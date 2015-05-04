var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response){
	var parse = url.parse(request.url, true);
	var date = new Date(parse.query.iso);
	response.writeHead(200, { 'Content-Type': 'application/json' });
	if(parse.pathname == '/api/parsetime'){
		response.write(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	}
	if(parse.pathname == '/api/unixtime'){
		response.write(JSON.stringify({ unixtime: date.getTime()}));
	}
	response.end();
});
server.listen(process.argv[2]);
