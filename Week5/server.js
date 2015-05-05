var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.get('/', function(request, response) {
// 	response.send('You are requesting your own server');
// });

// app.get('/avengers', function(request, response) {
// 	response.send('<h3>Hulk smash. Puny human.</h3><p>Iron man is here</p>');
// });

// app.get('/school', function(request, response) {
// 	response.send('This is a new page');
// });

// app.post('/grumpycat', function(response, request){
// 	reponse.send('<img src="' + request.body.grumpyCat + '"/>');
// })

var person = [];



app.listen(9000);
console.log('The server is up and running on port 8080');

