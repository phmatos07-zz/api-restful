const MOGOOSE = require('mongoose');

MOGOOSE.connect('mongodb://localhost:27017/noderest', { useMongoClient: true });
MOGOOSE.Promise = global.Promise;

module.exports = MOGOOSE;
