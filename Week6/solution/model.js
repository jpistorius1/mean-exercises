var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('localhost', "longboard")

var longboardSchema = new Schema({
	brand: String,
	name: String,
	length: Number,
	style: String,
	price: Number,
	bottom_img_url: String,
	top_img_url: String
});

var Longboard = mongoose.model('Longboard', longboardSchema);
module.exports = Longboard;