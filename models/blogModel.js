var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var blogSchema = new Schema({
	'title' : String,
    'description' : String,
    'imageUrl' : String
}, {
    timestamps: true
});

module.exports = mongoose.model('blog', blogSchema);
