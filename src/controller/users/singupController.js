const singupQuery = require('../../database/query/index'); // h
const { signUpSchema } = require('../../validation/user.schema');
const bcrypt = require('bcryptjs')

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
    singupQuery({ username, email, password: result, avatarUser })
    .then(() => res.status(201).json({
      error: false,
      data: {
        data: 'your account has been created successfully'
      }
    }))
      .catch(console.log)
  })
}

module.exports = {singupController};