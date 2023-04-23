const { createComment, getComment } = require('../../database/query');

const createCommentC = (req, res) => {
  const userComment = req.body;
  const { myToken } = req;
  createComment(userComment, myToken)
  getComment(myToken).then((result)=>{
    res.status(200).json(result.rows)
  })
}

module.exports={
  createCommentC
}