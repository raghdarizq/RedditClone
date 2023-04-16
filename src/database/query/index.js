const {signUpQuery} = require('./users');
const {signInQuery} = require('./users')
const {getAllPostsQuery}= require('./posts')

module.exports = {
  signUpQuery,
  signInQuery,
  getAllPostsQuery
}
