const { signInQuery } = require("../../database/query");
const { signInSchema } = require("../../validation/user.schema")
const bcrypt = require('bcryptjs');
require('dotenv').config();

const jwt = require('jsonwebtoken');

const signInController = (req, res) => {
  const { email, password } = req.body;
  const { error } = signInSchema.validate({ email, password }, { abortEarly: false })
  if (error) {
    res.status(400).json({
      error: true,
      data: {
        errors: error.details
      }
    })
    return;
  }

  signInQuery({ email }).then((data) => {
    if (data.rowCount == 1) {
      return bcrypt.compare(password, data.rows[0].password)
        .then((result) => {
          if (result == true) {
            const accessToken = jwt.sign({
              id: data.rows[0].id,
              username: data.rows[0].username,
            },process.env.The_private_key)
            res.cookie('accessToken', accessToken).json({ message: "Done" });

          } else {
            res.status(401).json({ message: "Password  is not correct" });

          }
        })
    }
  })

}

module.exports = signInController;