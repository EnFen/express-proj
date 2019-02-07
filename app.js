require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const acl = require('express-acl');

// models
const { User } = require('./models/User');
const { Host } = require('./models/Host');
const { Criteria } = require('./models/Criteria');
const EventWBGS = require('./models/EventWBGS');

// Route methods
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users')(User);
const eoiRouter = require('./routes/expression_of_interest')(User, Host, Criteria, EventWBGS);
const dashboardRouter = require('./routes/dashboard')(EventWBGS);

// custom middleware
const usersController = require('./controllers/usersController')(User);

const app = express();

// Database connection 
const [dbHost, dbName] = app.settings.env === 'development' ? ['localhost', 'real-world'] : [`${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_KEY}`, `${process.env.DB_NAME}`];
const dbConn = `mongodb://${dbHost}/${dbName}`;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Common Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

// Configure CORS
const corsOptions = {
  origin: app.settings.env === 'production' ? 'https://react-app-ca.herokuapp.com/' : ['http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'OPTIONS']
};
app.use(cors(corsOptions));

// Use sessions
app.use(session({
  secret: "Well that's just, like, your opinion, man."
}));

// Initialise Passport and connect it into the Express pipeline
app.use(passport.initialize());
// Connect Passport to the session
app.use(passport.session());

// Use strategy defined in User model to set authentication strategy - currently local strategy
passport.use(User.createStrategy());

// Use static serialize and deserialize of model to encrypt/decrypt user data for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// apply user role for session
app.use(usersController.userSession);

// Initilise mongoose
mongoose.connect(dbConn, (err) => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log(`Connected to database!`);
  }
});

// Configure acl for authorisation
acl.config({
  filename: 'acl.yml',
  defaultRole: 'guest',
  denyCallback: (res) => {
    return res.status(403).json({
      status: 'Access Denied',
      success: false,
      message: 'You are not authorized to access this resource'
    });
  }
});
// Connect acl to the app
app.use(acl.authorize);

// Routing
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/expression-of-interest', eoiRouter);
app.use('/dashboard', dashboardRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send error
  res.status(err.status || 500);
  res.send(err.message);

});

module.exports = app;