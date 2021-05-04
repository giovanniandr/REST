//Variable for mongoose to 
var mongoose = require('mongoose');

//Schema as models when imported does not load and gives error to load table content
const itemsSchema = {
    name: String,
    category: String,
    allergy: String
}

const Item = mongoose.model('Item', itemsSchema);