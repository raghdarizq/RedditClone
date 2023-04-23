const userRouter = require('express').Router();
const {singupController} = require("../controller");
const {signInController} = require("../controller")
const path = require('path');


userRouter.get('/createUser',  (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'singupPage.html'))
});
userRouter.get('/SinInUsers',  (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'singinPage.html'))
});

userRouter.post('/createUser', singupController);
userRouter.post('/SinInUsers', signInController);
userRouter.get('/SinInUsers', signInController);

userRouter.get('/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('avataruser');
  res.clearCookie('username');
  res.redirect('/SinInUsers');
});


module.exports = userRouter;