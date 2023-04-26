const router = require('express').Router();
const path = require('path');

const userRouter = require('./users')
const PostUsersRouter = require('./PostUsers')
const PageRouter = require('./PageRouter')
const CommentRouter = require('./CommentRouter')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "Public", "index.html"))
})

router.use('/page',PageRouter)
router.use('/users', userRouter)
router.use('/posts', PostUsersRouter)
router.use('/Comment', CommentRouter)

module.exports = router;