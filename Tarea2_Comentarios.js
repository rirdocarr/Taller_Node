var request = require('request');

var data = [];

request('http://jsonplaceholder.typicode.com/comments', function(error, responde, body){
	if(!error && responde.statusCode == 200){
		data = JSON.parse(body);
		var SumaComent = data.reduce( (prev, com) => {
	    return prev + Number(com.body.length);
		}, 0);
		console.log(SumaComent/data.length);
	}
	
});





