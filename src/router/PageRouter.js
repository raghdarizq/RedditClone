const PageRouter = require('express').Router();
const path = require('path');


PageRouter.get('/homePage', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "Public", "html", "homePage.html"))
})
PageRouter.get('/UserPage', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "Public", "html", "UserPage.html"))
})
PageRouter.get('/singin', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "Public", "html", "singinPage.html"))
})
PageRouter.get('/singup', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "Public", "html", "singupPage.html"))
})

module.exports = PageRouter;