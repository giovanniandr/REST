//Models
const http = require('http'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require("dotenv"),
path = require('path');

var app = express();
var port = process.env.PORT || 8000;
dotenv.config();

//Parse request to body parser
app.use(bodyParser.json());

//Log request
app.use(logger('tiny'));

//View engine
app.set("view engine", "ejs");

//Load
app.use(require('./routes'));
app.use('/css',express.static(path.resolve(__dirname,"views/css")));
app.use('/img',express.static(path.resolve(__dirname,"views/img")));
app.use('/js',express.static(path.resolve(__dirname,"views/js")));


app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

//Get response
app.get('/',(req, res)=>{
    res.render('index');
});

// const dbURI = "mongodb://localhost/test";
const dbURI = process.env.DB_URL;


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('MongoDB connected'))
        .catch((err) => console.log(err));