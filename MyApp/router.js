function route(handle, pathname, response, request){
	console.log('about to route a request for ' + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response, request);
	}else{
		console.log('no request handler found for ' + pathname);
	}	
}

exports.route = route;