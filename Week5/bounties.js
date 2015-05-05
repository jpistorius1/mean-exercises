var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var bounties = [{firstName: "Luke", lastName: "Skywalker", living: true, bountyAmt: 1000000, type: "Jedi"}];

app.post('/bounties', function(request, response){
	bounties.push(request.body);
	response.send('Added '+ request.body.firstName + ' '+ request.body.lastName + ' with a ' + request.body.bounties)
});

app.get('/bounties', function(request, response){
	response.json(bounties);	
})

app.listen(8080);
console.log('Server is running on 8080');
