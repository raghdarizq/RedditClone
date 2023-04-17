const { getAllPostsQuery } = require('./getAllPostsQuery');
const {getUserPostQ} = require('./getUserPostQ')
const {CreatePostQ,getPost} = require('./CreatePostQ')

module.exports = {
  getAllPostsQuery,
  getUserPostQ,
  CreatePostQ,
  getPost
}