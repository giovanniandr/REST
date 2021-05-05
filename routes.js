//Const to use express as router const
const express = require('express'),
router = express.Router()

//Requires import to be used in router
Item = require('./models/item'),
services = require('./services/render'),
ctrl = require('./controller');

//CRUD API
router.post('/items', ctrl.create);
router.get('/items', ctrl.find);
router.put('/items/:id', ctrl.update);
router.delete('/items/:id', ctrl.delete);


//Router render request for index.ejs 
router.get('/', (req, res) => {
    Item.find({}, function(err, items) {
        res.render('index', {
            addList: items
        })
    })
})

//Router gets render.js
router.get('/', service.indexRoutes);
router.get('/add-item', services.add_item);

//Router gets page
router.get('/update-item', )


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