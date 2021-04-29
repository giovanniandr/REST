var mongoose = require('mongoose');

var ingridientsSchema = new mongoose.Schema({
    name: String,
    category: String,
    allergy: String
},

{ timestamps: true }
);

module.exports = mongoose.model('Ingridient', ingridientsSchema);