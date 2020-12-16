var http = require('http');
var url = require('url');


function start(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		var postData = "";
		
		route(handle, pathname, response, request);	
		
		/*request.setEncoding('utf8');
		
		request.addListener('data', function(chunk){
			postData += chunk;
		});
		
		request.addListener('end', function(){
			route(handle, pathname, response, postData);	
		});		*/
		
	}

	 http.createServer(onRequest).listen(8888);
	 
	 console.log('server has started...');
}

exports.start = start;
