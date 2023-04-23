const connection = require('../../config/config');

const getComment = (myToken) => {
  const sql = {
    text: `SELECT 
    comments.content, comments.created_at, users.avatarUser, users.username
    FROM comments
    INNER JOIN
    users ON comments.user_id = $1`,
    values: [myToken.id]
  };
  return connection.query(sql);
};

const createComment = (userData, myToken) => {

  const user_id = myToken.id;
  const { content, post_id } = userData;

  const sql = {
    text: ` INSERT INTO comments (content, user_id, post_id) VALUES ($1,$2,$3)`,
    values: [content, user_id, post_id]
  }
  return connection.query(sql)
}

const getCommentPost = (post_id) => {
  const sql = {
    text: `SELECT comments.id, comments.content, comments.created_at, users.avatarUser, users.username 
           FROM comments INNER JOIN users ON comments.user_id = users.id 
           WHERE comments.post_id = $1`,
    values: [post_id]
  };
  return connection.query(sql);
};



module.exports = {
  createComment,
  getComment,
  getCommentPost
}