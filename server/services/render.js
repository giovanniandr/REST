const axios = require('axios');

//Render index page
exports.index = function(req, res){
    axios.get('https://mysterious-reef-94316.herokuapp.com/items')
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
exports.update_item = (req, res) =>{
    axios.get('https://mysterious-reef-94316.herokuapp.com/items', { params : { id : req.query.id }})
        .then(function(idata){
            res.render("update_item", { items : idata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}