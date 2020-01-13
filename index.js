const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const routes = require('./routes/api');
const keys = require('./config/keys');


//setup express app
const app = express();

//enable local testing with HTTP requests
app.use(cors({
    credentials: true,
    origin: keys.frontEnd.URL
//origin: 'http://localhost:8080'
}));

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
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'none';script-src 'self' https://www.google-analytics.com/analytics.js https://code.jquery.com/jquery-2.2.4.min.js https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js; img-src 'self' https://www.google-analytics.com/r/collect https://www.google-analytics.com/collect https://www.gstatic.com/images/; font-src 'self' https://fonts.gstatic.com https://stackpath.bootstrapcdn.com/bootswatch/3.3.7/fonts/;connect-src 'self' https://www.google-analytics.com; ;style-src 'self' https://stackpath.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css https://fonts.googleapis.com;frame-ancestors 'none'; base-uri 'self'; form-action 'self'; report-uri https://app.getsentry.com/api/61840/csp-report/?sentry_version=5&sentry_key=fa6dfb4b9f18472ea63004645f521c17;");
    return next();
});
app.use(cookieSession({
    maxAge: 1000*60*60*24,
    keys: [keys.cookieSession.key]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('./public'));

//initialize routes
app.use('/api', routes);

//listen for requests
app.listen(process.env.PORT || 4000, function(){
    console.log('Listening for requests');
});
