const { createComment, getComment,getCommentPost } = require('../../database/query');

const createCommentC = (req, res) => {
  const userComment = req.body;
  const { myToken } = req;
  createComment(userComment, myToken)
  getComment(myToken).then((result) => {
    res.status(200).json(result.rows)
  })
}
const getCommentC = (req, res) => {
  const { post_id } = req.query;

  getCommentPost(post_id).then((result) => {
    res.status(200).json(result.rows)
  });
}


module.exports = {
  createCommentC,
  getCommentC
}