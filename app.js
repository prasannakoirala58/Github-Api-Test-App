var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const helmet = require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const reposRouter = require('./routes/repos');

var app = express();
app.use(helmet());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mounting Routes
app.use('/', indexRouter);
app.use('/repos', reposRouter);
app.use('/users', usersRouter);

module.exports = app;
