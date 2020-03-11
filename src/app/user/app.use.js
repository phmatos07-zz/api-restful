const app = require('../../app.js');
const createUser = require('./create-user/create-user.route.js');

// POST
app.set('./create-user', createUser);

// GET
// PUT
// DELETE
