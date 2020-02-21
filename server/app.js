require('dotenv').config();
const app = require('express')();

const port = process.env.port || 3000;

app.set('port', port);

module.exports = app;
