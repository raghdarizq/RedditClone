const { singupController, signInController } = require('./users/usersController');
const { getAllPostsCon, getUserPostCon, CreatePostC } = require('./posts/postsController');

module.exports = {
  singupController,
  signInController,
  getAllPostsCon,
  getUserPostCon,
  CreatePostC
}
