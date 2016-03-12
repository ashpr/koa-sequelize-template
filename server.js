const app = require("./bin/app.js");
const config = require("./config.js");
const db = require("./_db");
const http = require("http");

var server = http.createServer(app.callback());

console.info("DB", "Synchronising Database");
db.sync({force:config.force})
	.then(function(){
		server.listen(config.port, function(){
			console.info("APP", "Listening on port", config.port);
		});
	});
