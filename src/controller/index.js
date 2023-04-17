const singupController = require('./users/singupController');
const signInController = require('./users/signInController')
const getAllPostsCon = require('./posts/getAllPostsCon');
const getUserPostCon = require('./posts/getUserPostCon')
module.exports= {
  singupController,
  signInController,
  getAllPostsCon,
  getUserPostCon
}
