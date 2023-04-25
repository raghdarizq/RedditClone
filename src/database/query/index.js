const { signUpQuery, signInQuery } = require('./users');
const { getAllPostsQuery, getUserPostQ, CreatePostQ, getPost ,deletedPostQ } = require('./posts')
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
  getCommentPost,
  deletedPostQ
}
