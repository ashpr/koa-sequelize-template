//Import Test Environment Variables
const app = require("../bin/app.js");
const http = require("http");
const config = require("../config.js");

var server = http.createServer(app.callback());

server.listen(config.port, function(){
	console.info("APP", "Listening on port", config.port);
});