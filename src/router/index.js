const router = require('express').Router();
const path = require('path');

const userRouter = require('./users')
const PostUsersRouter = require('./PostUsers')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"))
})
router.get('/homePage', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "html", "homePage.html"))
})
router.get('/singin', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "html", "singinPage.html"))
})
router.get('/singup', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "html", "singupPage.html"))
})
router.use('/users', userRouter)
router.use('/posts', PostUsersRouter)


module.exports = router;