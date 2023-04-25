const PostUsersRouter = require('express').Router();
const jwt = require("jsonwebtoken");
const { getAllPostsCon, getUserPostCon ,CreatePostC,deletedPostC,EditPostC} = require('../controller');


const auth = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (accessToken) {
    jwt.verify(accessToken, process.env.The_private_key, (err, decoded) => {
      if (err) {
        res.send({ message: "Error" })
      } else {
        req.myToken = decoded;
        next()
      }
    })
  } else {
    res.redirect("users/SinInUsers")
  }
}

PostUsersRouter.get("/getPosts", getAllPostsCon);
PostUsersRouter.get("/getUserPost", auth, getUserPostCon)
PostUsersRouter.post("/create", auth, CreatePostC)
PostUsersRouter.put("/delete/:post_id",auth, deletedPostC)
PostUsersRouter.put("/edit/:post_id", EditPostC)

module.exports = PostUsersRouter;