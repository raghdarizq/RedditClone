const userRouter = require('./users')

const router = require('express').Router();

router.use('/users', userRouter)