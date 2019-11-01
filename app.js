'use strict';
const express = require('express');
const path = require('path');
const swig = require('swig');
const debug = require('debug')('library:app');
const app = express();

// config
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.engine('html', swig.renderFile);

// routes
app.use('/', require('./routes'));

// errors handling
app.use(function (request, response, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, request, response, next) {
  response.status(err.status || 500).json({ err: err.message });
});

// server listener
module.exports = app;
