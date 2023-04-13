const express = require('express');

// eslint-disable-next-line import/no-extraneous-dependencies
const cookieParser = require('cookie-parser');

const app = express();

const path = require('path');
// const router = require('./router');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(router);

module.exports = { app };
