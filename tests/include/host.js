'use strict';
process.env.NODE_ENV="testing";
const ip = require('ip');
const config = require("../../config");

module.exports = {
	getFullUrl: function(path){
	  	path = path || "";
	  	
		return "http://" + ip.address() + ":" + config.port + path;
	}
};