const router = require('express').Router();
const path = require('path');

const userRouter = require('./users')
const PostUsersRouter = require('./PostUsers')
const PageRouter = require('./PageRouter')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"))
})

router.use('/page',PageRouter)
router.use('/users', userRouter)
router.use('/posts', PostUsersRouter)

module.exports = router;