//Variable to request item model to talk to controller
var Item = require('../model/item');


//Full CRUD code starts below:

//Create function to create an item
exports.create = function(req, res) { 
//Variable to request body inputs made from user
   var newItem = new Item(req.body);
    newItem.save(function (err, items) { 
        if (err) { 
            res.status (400).json(err);
        }

        //Display to user confirmation of actions for all below actions
        res.json(items); 
    });
};

//Create function to get items
exports.find = function(req, res) {
//Variable to find items

  if(req.query.id){
  const id = req.query.id;

  Item.findById(id)
      .then(data =>{
          if(!data){
              res.status(404).send({ message : "Not found an item with id "+ id})
          }else{
              res.send(data)
          }
      })
      .catch(err =>{
          res.status(500).send({ message: "Erro retrieving an item with id " + id})
      })
    }else{
      Item.find()
          .then(user => {
              res.send(user)
          })
          .catch(err => {
              res.status(500).send({ message : err.message || "Error Occurred while retriving item information" })
          })
  }
    };


//Create function to update a single item
exports.update = function(req, res) {
//Variable to find and update the one item 
  if(!req.body){
    return res
        .status(400)
        .send({ message : "Data to update can not be empty"})
  }

  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Update item with ${id}. Maybe item not found!`})
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({ message : "Error Update item information"})
    })
};

//Create function to delete a single item
exports.delete = function(req, res) {
//Variable to find and delete the one item
  Item.findByIdAndRemove({_id: req.params.id}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(items);
  }); 
};