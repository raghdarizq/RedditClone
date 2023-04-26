const express = require('express');

const cookieParser = require('cookie-parser');
// eslint-disable-next-line no-unused-vars
const env = require('dotenv').config();

const app = express();
// const router = require('express').Router();

const path = require('path');
const router = require('./router');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);
module.exports = { app };
