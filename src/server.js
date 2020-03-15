const app = require('./app');
const port = require('./config/config').APP_PORT;

app.listen(port);
console.info(`Server OK - Port: ${port}`);
