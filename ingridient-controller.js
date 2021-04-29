var Ingridient = require('./models/ingridient')

exports.createIngridient = function(req, res) { 
    var newingridient = new Ingridient(req.body);
    newuser.save(function (err, ingridient) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(ingridient); 
});
};

exports.getIngridients = function(req, res) {
  Ingridient.find({}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridients);
  }); 
};

exports.getIngridient = function(req, res) {
  Ingridient.findOne({_id: req.params.id}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridients);
  }); 
};

exports.updateIngridient = function(req, res) {
  Ingridient.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridients);
  }); 
};

exports.deleteIngridient = function(req, res) {
  Ingridient.findByIdAndRemove({_id: req.params.id}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridients);
  }); 
};