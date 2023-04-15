const connection = require('../../config/config');

const signInQuery = (userData) => {
  const { email } = userData;

  const sql = {
    text: 'SELECT id,username, email,password, avatarUser FROM users where email=$1 ;',
    values: [email]
  }

  return connection.query(sql);
}

module.exports = signInQuery;