const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = require('./config/config.js').APP_PORT;

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/auth/auth.controller.js')(app);

app.listen(port);
console.log(`Server OK ${port}`);
