const mogoose = require('mongoose');
const url = require('./config.js').URL_MONGODB;
const nameDb = require('./config.js').NAME_MONGODB;

mogoose.connect(`${url}/${nameDb}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mogoose.Promise = global.Promise;
module.exports = mogoose;
