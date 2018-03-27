var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var employees = require('./routes/employees');
var api = require('./routes/api');

var server = express();

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jsx');
server.engine('jsx', require('express-react-views').createEngine());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// CORSを許可する
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use('/', index);
server.use('/employees', employees);
server.use('/_api/', api);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.get('*', (req, res) => {
  return handle(req, res);
})

server.listen(3001, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3001 as backend')
})

module.exports = server;
