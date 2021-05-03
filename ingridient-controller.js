//Variable to request ingridient model to talk to controller
var Ingridient = require('./models/ingridient');


//Full CRUD code starts below:

//Create function to create an ingridient
exports.createIngridient = function(req, res) { 

//Variable to request body inputs made from user
   var newIngridient = new Ingridient(req.body);
    newIngridient.save(function (err, ingridients) { 
        if (err) { 
            res.status (400).json(err);
        }

        //Display to user confirmation of actions for all below actions
        res.json(ingridients); 
    });
};

//Create function to get all ingridients
exports.getIngridients = function(req, res) {

//Variable to find all ingridients
  Ingridient.find({}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    }
    axios.get("https://8000-jade-jackal-l9g5m1qe.ws-eu03.gitpod.io/ingridients")
    .then(function(response){
        console.log(response)
res.render('index', {ingridients: response.data});
    })
    .catch(err =>{
        res.send(err);
    })
    
  }); 
};


//Create function to get a single ingrident
exports.getIngridient = function(req, res) {

//Variable specifying find one ingridient, choosing by the id or able to change for name for all the actions below
  Ingridient.findOne({_id: req.params.id}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridients);
  }); 
};

//Create function to update a single ingridient
exports.updateIngridient = function(req, res) {

//Variable to find and update the one ingridient 
  Ingridient.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridients);
  }); 
};

//Create function to delete a single ingridient
exports.deleteIngridient = function(req, res) {

//Variable to find and delete the one ingridient
  Ingridient.findByIdAndRemove({_id: req.params.id}, function (err, ingridients) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(ingridients);
  }); 
};