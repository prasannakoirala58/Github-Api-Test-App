var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const reposRouter = require('./routes/repos');

var app = express();
app.use(helmet());
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mounting Routes
app.use('/api/', indexRouter);
app.use('/api/repos', reposRouter);
app.use('/api/user', usersRouter);

module.exports = app;
