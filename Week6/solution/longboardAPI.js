var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Longboard = require('./model.js');
var PORT = 9050;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//GET all longboards
app.get('/longboards', function(req, res){
	Longboard.find({}, function (err, data) {
		res.send(data);
	})
});

//POST a new longboard
app.post('/longboard', function(req, res){
	var newLongboard = new Longboard(req.body);
	console.log(Longboard);
	newLongboard.save(function (err, data) {
		res.send(data);
	});
});

//PUT an existing longboard
app.put('/longboard/:id', function(req, res){
	Longboard.findOne({_id: req.params.id}, function(err, longboard){
		for (var key in req.body) {
			longboard[key] = req.body[key];
		}
		longboard.save();
		res.send(longboard);
	})
});

//DELETE a longboard

app.delete('/longboard/:id', function(req, res){
	Longboard.findOne({_id: req.params.id}, function(err, longboard){
		longboard.remove(function(err, data){
			res.send(data);
		})
	})
});

app.listen(PORT);
console.log('You are listening to ' + PORT + ' your new music favorites');