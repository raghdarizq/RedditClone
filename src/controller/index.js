const singupController = require('./users/singupController');
const signInController = require('./users/signInController')
const getAllPostsCon = require('./posts/getAllPostsCon');
const getUserPostCon = require('./posts/getUserPostCon');
const CreatePostC = require('./posts/CreatePostC')
module.exports= {
  singupController,
  signInController,
  getAllPostsCon,
  getUserPostCon,
  CreatePostC
}
