const PageRouter = require('express').Router();
const path = require('path');


PageRouter.get('/homePage', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "html", "homePage.html"))
})
PageRouter.get('/UserPage', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "html", "UserPage.html"))
})
PageRouter.get('/singin', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "html", "singinPage.html"))
})
PageRouter.get('/singup', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "html", "singupPage.html"))
})

module.exports = PageRouter;