const PostUsersRouter = require('express').Router();
// const jwt = require("jsonwebtoken");
const { getAllPostsCon } = require('../controller');

// const auth = (req, res, next) => {
//   const accessToken = req.cookies.accessToken;
//   if (accessToken) {
//     jwt.verify(accessToken, process.env.The_private_key, (err, decoded) => {
//       if (err) {
//         res.send({ message: "Error" })
//       } else {
//         req.myToken = decoded;
//         next()
//       }
//     })
//   } else {
//     res.redirect("users/SinInUsers")
//   }
// }

PostUsersRouter.get("/getPosts", getAllPostsCon);

module.exports = PostUsersRouter;