const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const routes = require('./routes/api');
const keys = require('./config/keys');
const serveFavicon = require('./serve-favicon');


//setup express app
const app = express();

//enable local testing with HTTP requests
app.use(cors({
    credentials: true,
    origin: keys.frontEnd.URL
//origin: 'http://localhost:8080'
}));
app.use(function(req, res, next) {
res.setHeader("Content-Security-Policy", default-src 'none'; style-src 'self' data:; img-src 'self' data:; script-src 'self'; connect-src 'self');
    return next();
});
//fix deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to the database
mongoose.connect(keys.mongodb.dbURI);
mongoose.Promise = global.Promise; //mongodb promise is deprecated

//initialize body-parser (before the route handler!)
app.use(bodyParser.json());

app.use(cookieSession({
    maxAge: 1000*60*60*24,
    keys: [keys.cookieSession.key]
}))
app.use(favicon(__dirname + '/favicon.ico'));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('./public'));

//initialize routes
app.use('/api', routes);

//listen for requests
server.connection({
    host: (process.env.HOST || 'localhost'),
    port: (process.env.PORT || 4000)
});
