var request = require('request');
var contacts, message;

request('http://mean.codingcamp.us:8000/contacts', incoming_request); 

function incoming_request(error, response, body){
	contacts = JSON.parse(body);
	if (message) process_data();
};

request('http://mean.codingcamp.us:8000/messages', incoming_messages); 

function incoming_messages(error, response, body){
	message = JSON.parse(body);
	if (contacts) process_data();
}

function process_data(){
	var speaker = incoming_request.name;
	var sentence = incoming_messages.text;
	if(i = 0; i <= incoming_messages.length; i++){
		console.log(contacts.name+": "+message.text);
	}
	console.log(message[0].text);
	console.log(contacts);
}