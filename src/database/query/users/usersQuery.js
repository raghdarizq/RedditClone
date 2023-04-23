const connection = require('../../config/config');

const signInQuery = (userData) => {
  const { email } = userData;

  const sql = {
    text: 'SELECT id,username, email,password, avatarUser FROM users where email=$1 ;',
    values: [email]
  }

  return connection.query(sql);
}

const signUpQuery = (userData) => {
  const { username, email, password, avatarUser } = userData;

  const sql = {
    text: 'INSERT INTO users (username, email ,password ,avatarUser) VALUES ($1 , $2, $3, $4)',
    values: [username, email, password, avatarUser]
  }

  return connection.query(sql);
};

module.exports={
  signInQuery,
  signUpQuery
}