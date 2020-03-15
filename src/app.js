const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// ROUTES
const userRoutes = require('./app/user/routes.js');

// MIDDLEWARES
const errorHandler = require('./middlewares/error-handler.middleware.js');

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// APP-USE ROUTES
app.use('/', userRoutes);

// ERROR-HANDLER
app.use(errorHandler);

module.exports = app;
