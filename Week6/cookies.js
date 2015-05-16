var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var PORT = 8000;

app.use(cookieParser());
app.use(bodyParser.urlencoded())

app.get('/', function (req, res){
	if (req.cookies.email){
		fs.readFile('./Week6/cookiethankyou.html', function(err, data){
			data = data.toString();
			res.header('Contect-type', 'text/html');
			res.send(data.replace('*emailaddress*', req.cookies.email));
		});

	} else {
		fs.readFile('./cookielanding.html', function (err, data){
			data = data.toString();
			res.header('Content-type', 'text/html');
			res.send(data);
		});
	}
});

app.post(function (req, res){
	res.cookie('email', req.body.email);
	res.redirect('/');

});

// fs.readFile('./cookiethankyou.html', function(err, data){
// 	data = data.toString();

// 	res.header('Content-type', 'text/html');
// 	res.send(data.replace('*emailaddress*', req.body.email()));
// })

app.listen(PORT);
console.log('You are listening to ' +PORT);