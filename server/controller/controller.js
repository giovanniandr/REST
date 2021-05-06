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
//Variable to find fresh items
Item.find({}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(items);
  }); 
};


//Create function to update a single item
exports.update = function(req, res) {
//Variable to find and update the one item 
Item.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(items);
  }); 
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
