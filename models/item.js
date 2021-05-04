//Variable for mongoose to 
var mongoose = require('mongoose');

//Variables in a schema allowing to define key value 
var itemSchema = new mongoose.Schema({
    name: String,
    category: String,
    allergy: String,
});

//Exporting mongoose for usage
module.exports = mongoose.model('Item', itemSchema);