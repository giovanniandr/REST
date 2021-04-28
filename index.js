const http = require('http');
const axios = require('axios');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json());

app.get('/hello/:foo/:bar', function(req, res) {
    res.json({message: 'Hello JSON', data: [
        req.params.foo,
        req.params.bar
    ] });
});

//Get request
 let users = []; // names of users will be stored here
(async function getNames(){
  try{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    users = data.map(user=>user.name);
  } catch(error){
    console.log(error)
  }
})();

app.listen(port, function(err){
    console.log('Listening on port ' + port);
})
