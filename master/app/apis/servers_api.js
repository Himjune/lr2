const host = 'http://127.0.0.1:5004';
const request = require('request');

module.exports = {
    accuireServer : function(game, perf, callback){
        const url = host+'/servers?game=' + game + '&perf=' + perf;
		
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
	
	releaseServer : function (id, callback) {
        const url = host+'/servers/' + id;
		
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