const {signUpQuery,signInQuery} = require('./users');
const {getAllPostsQuery,getUserPostQ,CreatePostQ,getPost}= require('./posts')

module.exports = {
  signUpQuery,
  signInQuery,
  getAllPostsQuery,
  getUserPostQ,
  CreatePostQ,
  getPost
}
