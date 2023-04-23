const connection = require('../../config/config');
const getPost = (myToken) => {
  const sql = {
    text: `select 
    posts.content, posts.photo_Post, users.avatarUser, users.username, posts.created_at
    from posts 
    join users 
    on users.id = posts.user_id
    where users.id = $1`,
    values: [myToken.id]
  };
  return connection.query(sql);
};
const CreatePostQ = (userData, myToken) => {
  const user_id = myToken.id
  const { content, photo_Post } = userData;

  const sql = {
    text: `INSERT INTO posts (content, photo_Post, user_id) VALUES ($1, $2, $3)`,
    values: [content, photo_Post, user_id]
  }

  return connection.query(sql)
}

const getAllPostsQuery = () => {
  const sql = {
    text: `SELECT posts.id, posts.content, posts.photo_Post, posts.created_at, users.username, users.avatarUser 
          FROM posts 
          JOIN users ON posts.user_id = users.id
          `
  }
  return connection.query(sql)
}

const getUserPostQ = (myToken) => {
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
    values: [myToken.id]
  };
  return connection.query(sql);
};


module.exports = {
  CreatePostQ,
  getPost,
  getAllPostsQuery,
  getUserPostQ

};
