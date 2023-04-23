const { getAllPostsQuery, getUserPostQ, CreatePostQ, getPost } = require('../../database/query')

const getAllPostsCon = (req, res) => {
  getAllPostsQuery().then((data) => {
    res.json({
      error: false,
      data: data.rows,
    });
  });
};

const getUserPostCon = (req, res) => {
  const { myToken } = req;
  // console.log(myToken)
  getUserPostQ(myToken).then((result) => {
    res.status(200).json(result.rows)
  });
}

const CreatePostC = (req, res) => {
  const userPost = req.body;
  const { myToken } = req;

  CreatePostQ(userPost, myToken)
  getPost(myToken).then((result) => {
    res.status(200).json(result.rows)
  });
}
module.exports={
  getAllPostsCon,
  getUserPostCon,
  CreatePostC
}