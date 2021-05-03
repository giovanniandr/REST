//Npm error lifecycle solution: https://www.geeksforgeeks.org/how-to-solve-npm-error-npm-err-code-elifecycle/
//When bad request 400 .env needs to be upload.

//Variables and const work in same ways
//Const requiring modules to operate website
const http = require('http'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require("dotenv");
path = require('path'),
ejs = require('ejs'),
axios = require('axios');

//Variable for app to be used for express and port given.
var app = express();
var port = process.env.PORT || 8000;
dotenv.config();

//Express variable uses body parser to get information, logger, routing and set as public for pages to be open.
app
    .use(bodyParser.urlencoded({ extended: false}))
    .use(bodyParser.json())
    .use(logger('tiny'))
    .use(require('./routes'))
    .use(express.static('public'));

//Set the view engine to open index.ejs
app.set('view engine', 'ejs');

//Display on command which port is listening too
app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

//MongoDB connection when .env is create with information of the database connection
const dbURI = process.env.DB_URL;

//Parsing and connecting database with an error catch
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('MongoDB Connected.'))
        .catch((err) => console.log(err));