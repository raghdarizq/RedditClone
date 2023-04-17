const {signUpQuery,signInQuery} = require('./users');
const {getAllPostsQuery,getUserPostQ}= require('./posts')

module.exports = {
  signUpQuery,
  signInQuery,
  getAllPostsQuery,
  getUserPostQ
}
