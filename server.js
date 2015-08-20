var http = require ("http");
var url = require("url");

function start (route) {
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname +" received!");
		route(pathname);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Oi NodeJS! Versao 2");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciado em http://localhost:8888/");
}

exports.start = start;
