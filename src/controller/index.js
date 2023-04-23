const { singupController, signInController } = require('./users/usersController');
const { getAllPostsCon, getUserPostCon, CreatePostC } = require('./posts/postsController');
const { createCommentC ,getCommentC} = require('./comment/commentController');

module.exports = {
  singupController,
  signInController,
  getAllPostsCon,
  getUserPostCon,
  CreatePostC,
  createCommentC,
  getCommentC
}
