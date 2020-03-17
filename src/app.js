const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// ROUTES
const userRoutes = require('./app/user/routes');

// MIDDLEWARES ERROR'S
const errorHandlerMiddleware = require('./middlewares/error-handler.middleware');
const clientErrorHandlerMiddleware = require('./middlewares/client-error-handler.middleware');

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// APP-USE ROUTES
app.use('/', userRoutes);

// MIDDLEWARES ERROR'S
app.use(clientErrorHandlerMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
