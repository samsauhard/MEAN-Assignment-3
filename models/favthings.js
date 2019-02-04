let mongoose = require('mongoose');

// create a model class
let favSchema = mongoose.Schema({
    name: String,
    description: String,
    
},
{
    collection: "favthings"
});

module.exports = mongoose.model('fav', favSchema);