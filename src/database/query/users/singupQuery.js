const  connection  = require('../../config');

const signUpQuery = (userData) => {
  const { username, email, password, avatarUser } = userData;

  const sql = {
    text: 'INSERT INTO users (username, email ,password ,avatarUser) VALUES ($1 , $2, $3, $4)',
    values: [username, email, password, avatarUser]
  }

  return connection.query(sql)
};

module.exports = {signUpQuery};