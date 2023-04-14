const userRouter = require('express').Router();
const { singupController } = require("../controller");

userRouter.post('/createUser', singupController);

module.exports = userRouter;