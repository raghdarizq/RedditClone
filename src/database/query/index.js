const { signUpQuery, signInQuery } = require('./users');
const { getAllPostsQuery, getUserPostQ, CreatePostQ, getPost } = require('./posts')
const { createComment, getComment, getCommentPost } = require('./comment')
module.exports = {
  signUpQuery,
  signInQuery,
  getAllPostsQuery,
  getUserPostQ,
  CreatePostQ,
  getPost,
  createComment,
  getComment,
  getCommentPost
}
