const CommentRouter = require('express').Router();
const {createCommentC , getCommentC} = require('../controller')
const jwt = require("jsonwebtoken");

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

CommentRouter.post("/createComment", auth, createCommentC)
CommentRouter.get("/getPostComment", getCommentC)

module.exports = CommentRouter

