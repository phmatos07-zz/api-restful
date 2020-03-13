const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const userRoutes = require('./app/user/routes.js');

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// APP-USE ROUTES
app.use('/', userRoutes);

module.exports = app;
