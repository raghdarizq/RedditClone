const connection = require('../../config/config');

const getUserPostQ = (mytoken) => {
  const sql = {
    text: `SELECT
    posts.content,
    posts.photo_Post,
    users.avatarUser,
    users.username, 
    posts.created_at 
    FROM posts JOIN users 
    ON
    users.id = posts.user_id
    WHERE users.id = $1`,
    values: [mytoken.id]
  };
  return connection.query(sql);
};

module.exports = {getUserPostQ};

