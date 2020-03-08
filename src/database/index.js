const mogoose = require('mongoose');
const url = require('./../config/config.js').URL_MONGODB;
const nameDb = require('./../config/config.js').NAME_MONGODB;

mogoose.connect(`${url}/${nameDb}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mogoose.Promise = global.Promise;
module.exports = mogoose;
