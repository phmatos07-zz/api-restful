const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const APP = EXPRESS();

APP.use(BODY_PARSER.json());

APP.use(BODY_PARSER.urlencoded({
  extended: false
}));

APP.listen(3000);
