const connection = require('../../config/config');

const getAllPostsQuery = () => {
  const sql = {
    text: `SELECT posts.id, posts.content, posts.photo_Post, posts.created_at, users.username, users.avatarUser 
          FROM posts 
          JOIN users ON posts.user_id = users.id
          `
  }
  return connection.query(sql)
}
module.exports = {
  getAllPostsQuery
}