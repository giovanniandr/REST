//Const to use express as router const
const express = require('express'),
router = express.Router()

//Requires import to be used in router
services = require('./server/services/render'),
ctrl = require('./server/controller/controller');

//Router gets render.js
router.get('/', services.indexRoutes);
router.get('/add-item', services.add_item);
router.get('/update-item', services.update_item);

//CRUD API
router.post('/items', ctrl.create);
router.get('/items', ctrl.find);
router.put('/items/:id', ctrl.update);
router.delete('/items/:id', ctrl.delete);

//Router request create.html
 router.use('/views', express.static(__dirname + '/views'));


//Router request css files
router.get('/style.css', function(req,res){
    res.sendFile(path.join(__dirname, 'style.css'))
});

router.get('/crud.css', function(req,res){
    res.sendFile(path.join(__dirname, 'crud.css'))
});

//Router request script.js
router.get('/script.js', function(req,res){
    res.sendFile(path.join(__dirname, 'script.js'))
});

//Export router
module.exports = router;