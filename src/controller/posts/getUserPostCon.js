const {getUserPostQ}= require("../../database/query");

const getUserPostCon = (req, res) => {
  const { myToken } = req;
  // console.log(myToken)
  getUserPostQ(myToken).then((result) => {
    res.status(200).json(result.rows)
  });
}
module.exports = getUserPostCon;