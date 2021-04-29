var Ingridient = require('./models/ingridients')

exports.createIngridient = function(req, res) { 
    var newuser = new User(req.body);
    newuser.save(function (err, ingridient) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(ingridient); 
});
};

exports.getIngridients = function(req, res) {
  User.find({}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridients);
  }); 
};

exports.getIngridient = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, ingridient) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridient);
  }); 
};

exports.updateIngridiet = function(req, res) {
  User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, ingridient) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridient);
  }); 
};

exports.deleteIngridient = function(req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function (err, ingridient) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridient);
  }); 
};