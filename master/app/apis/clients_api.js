const host = 'http://127.0.0.1:5002';
const request = require('request');

module.exports = {
    getClient : function(id, callback){
        const url = host+'/clients/' + id;
		
		console.log('GET ' + url);
		
		request.get(url, {method: 'GET', uri: url}, function(errors, response, body){
			if(errors) {
				console.log('err: ' + errors);
				callback(errors, null, null);
			} else {
				console.log('res: ' + body);
				callback(null, response.statusCode, body);
			}
		});
    },
	
	patchClient : function (id, server, game, callback) {
        const url = host+'/clients/'+id+'?server=' + server + '&game=' + game;
		
		console.log('PATCH ' + url);
		
		request.patch(url, {method: 'PATCH', uri: url}, function(errors, response, body){
			if(errors) {
				console.log('err: ' + errors);
				callback(errors, null, null);
			} else {
				console.log('res: ' + body);
				callback(null, response.statusCode, body);
			}
		});
	}
}