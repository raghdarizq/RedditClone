const { signInQuery, signUpQuery } = require("../../database/query");
const { signInSchema, signUpSchema } = require("../../validation/user.schema")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

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

  // signInQuery({ email }).then((data) => {
  //   if (data.rowCount == 1) {
  //     return bcrypt.compare(password, data.rows[0].password)
  //       .then((result) => {
  //         if (result == true) {
  //           const accessToken = jwt.sign({
  //             id: data.rows[0].id,
  //             username: data.rows[0].username,
  //           },process.env.The_private_key)
  //           res.cookie('accessToken', accessToken).json({ message: "Done" });

  //         } else {
  //           res.status(401).json({ message: "Password  is not correct" });

  //         }
  //       })
  //   }
  // })
  signInQuery({ email }).then((data) => {
    if (data.rowCount == 1) {
      return bcrypt.compare(password, data.rows[0].password)
        .then((result) => {
          if (result == true) {
            const accessToken = jwt.sign({
              id: data.rows[0].id,
              username: data.rows[0].username,
            }, process.env.The_private_key);

            res.cookie('username', data.rows[0].username);
            res.cookie('avataruser', data.rows[0].avataruser);
            res.cookie('accessToken', accessToken).json({ message: "Done" });
          } else {
            res.status(401).json({ message: "Password  is not correct" });
          }
        })
    }
  })

}

const hashed = (password, callback) => {
  bcrypt.hash(password, 10, callback)
}

const singupController = (req, res) => {
  const { username, email, password, avatarUser } = req.body;
  const { error } = signUpSchema.validate({
    username,
    email,
    password,
    avatarUser
  }, { abortEarly: false })
  if (error) {
    res.status(400).json({
      error: true,
      data: {
        errors: error.details
      }
    });
    return;
  }
  hashed(password, (err, result) => {
    signUpQuery({ avatarUser, username, email, password: result })
      .then(() => res.status(201).json({
        error: false,
        data: {
          data: 'your account has been created successfully'
        }
      }))
      .catch(console.log)
  })
}
module.exports = {
  signInController,
  singupController
};