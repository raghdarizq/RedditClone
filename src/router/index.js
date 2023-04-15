const router = require('express').Router();

const userRouter = require('./users')
const path = require('path');


router.use('/users', userRouter)
router.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'singupPage.html'))
})

module.exports=router;