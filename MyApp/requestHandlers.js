var fs = require('fs');
var formidable = require('formidable');
function view(response) {
	console.log('request handler called --> view');
	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; ' +
		'charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<form action="/create" enctype="multipart/form-data" method="post">' +
		'<textarea name="text" rows="20" cols="60"></textarea>' +
		'<input type="file" name="upload">' +
		'<input type="submit" value="Submit" />' +
		'</form>' +
		'</body>' +
		'</html>';
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.write(body);
	response.end();
}

function create(response, request) {
	console.log('request handler called --> create');
	var form = new formidable.IncomingForm();
	form.uploadDir = './';
	form.parse(request, function(error, fields, files) {
		fs.renameSync(files.upload.path, './test.png');
		response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		response.write('<p>send data:' + fields.text + '</p>');
		response.write('<p><img src="/view/image"/>');
		response.end();
	});
}
function viewImage(response) {
	console.log('request handler called --> view image');
	fs.readFile("./test.png", "binary", function(error, file) {
		if (error) {
			response.writeHead(500, { "Content-Type": "text/plain" });
			response.write(error + "\n");
			response.end();
		} else {
			response.writeHead(200, { "Content-Type": "image/png" });
			response.write(file, "binary");
			response.end();
		}
	});
}

var handle = {};
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;
handle['/view/image'] = viewImage;
exports.handle = handle;
