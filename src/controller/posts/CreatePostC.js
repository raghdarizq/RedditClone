const { CreatePostQ, getPost } = require("../../database/query/posts/CreatePostQ");


const CreatePostC = (req, res) => {
  const userPost = req.body;
  const { myToken } = req;

  CreatePostQ(userPost, myToken)
  getPost(myToken).then((result) => {
    res.status(200).json(result.rows)
  });
}
module.exports =  CreatePostC;