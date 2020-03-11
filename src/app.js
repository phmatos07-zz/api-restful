const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = require('./config/config.js').APP_PORT;

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);
console.info(`Server OK - Port: ${port}`);

module.exports = app;