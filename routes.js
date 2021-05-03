//Const to use express as router const
const express = require('express'),
router = express.Router(),

//Requiring controller to communicate
ingridientCtrl = require('./ingridient-controller');

//CRUD Commands being called from ingridient-controller with destination of /ingridients
router.post('/ingridients', ingridientCtrl.createIngridient);
router.get('/ingridients', ingridientCtrl.getIngridients);
router.get('/ingridients/:id', ingridientCtrl.getIngridient);
router.put('/ingridients/:id', ingridientCtrl.updateIngridient);
router.delete('/ingridients/:id', ingridientCtrl.deleteIngridient);


//Router request index.html
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'))
});

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