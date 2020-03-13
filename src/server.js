const app = require('./app.js');
const port = require('./config/config.js').APP_PORT;

app.listen(port);
console.info(`Server OK - Port: ${port}`);
