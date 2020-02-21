require('dotenv').config();
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

const router = require('./routes');

const port = process.env.port || 3000;

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, '..', 'public', 'img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
