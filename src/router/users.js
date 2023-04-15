const userRouter = require('express').Router();
const {singupController} = require("../controller");
const {signInController} = require("../controller")
const path = require('path');


userRouter.get('/',  (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'singupPage.html'))
});
userRouter.post('/createUser', singupController);
userRouter.post('/SinInUsers', signInController);


module.exports = userRouter;