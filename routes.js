//Const to use express as router const
const express = require('express'),
router = express.Router(),

//Requiring controller to communicate
ctrl = require('./controller');


//CRUD API
router.post('/items', ctrl.create);
router.get('/items', ctrl.find);
router.put('/items/:id', ctrl.update);
router.delete('/items/:id', ctrl.delete);


//Router request for index.ejs using render instead of send otherwise will download the page
router.get('/', function(req, res){
    res.render('index')
})

//Router request create.html
 router.use('/views', express.static(__dirname + '/views'));


//Router request style.css
router.get('/style.css', function(req,res){
    res.sendFile(path.join(__dirname, 'style.css'))
});

//Router request script.js
router.get('/script.js', function(req,res){
    res.sendFile(path.join(__dirname, 'script.js'))
});

//Export router
module.exports = router;