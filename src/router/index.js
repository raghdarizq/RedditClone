const router = require('express').Router();
const path = require('path');

const userRouter = require('./users')

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"..","..","public","html","homePage.html"))
})
router.use('/users', userRouter)


module.exports=router;