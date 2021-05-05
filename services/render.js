const axios = require('axios');

//Render index page
exports.indexRoutes = function(req, res){
    //Request items
    axios.get('http://localhost:8000/items')
    .then(function(response){
        res.render('index', { items : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

//Render add page
exports.add_item = function(req, res){
    res.render('add_item');
}

//Render update page
exports.update_item = function(req, res){
    axios.get('http://localhost:8000/items', {params: {id: req.query.id}})
    .then(function(itemdata){
        res.render("update_item", { item : itemdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}