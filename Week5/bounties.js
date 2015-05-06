var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');

app.use(bodyParser.json());

var bounties = [{firstName: "<h1>Luke</h1>", lastName: "<h1>Skywalker</h1>", living: true, bountyAmt: 1000000, type: "<p><strong>Jedi</strong></p>"}];

app.post('/bounties', function(request, response){
	request.body.id = uuid.v1();
	bounties.push(request.body);
	response.send('Added '+ request.body.firstName + ' '+ request.body.lastName + ' with a ' + request.body.bountyAmt + " bounty. The ID is " + request.body.id)
});

app.get('/bounties', function(request, response){
	response.json(bounties);	
});

app.put('/bounties/:bountyID', function(request, response) {
	var data = request.body;
	for(var i = 0; i < bounties.length; i++){
		var bountySearch = bounties[i];
		if (bountySearch.id === request.params.bountyID){
			response.json(bountySearch);
		}
	}
});



app.listen(9000);
console.log('Server is running on 9000');
