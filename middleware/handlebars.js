const handlebars = require("handlebars");
const hbsKoa = require("koa-handlebars");
const swag = require("swag");
const config = require("../config.js");

swag.registerHelpers(handlebars);

module.exports = function(){
	return hbsKoa({
		handlebars: handlebars,
		extension: 'hbs',
		defaultLayout: "main",
		layoutsDir: "views/layouts",
		partialsDir: "views/partials",
		cache: false,
		data:{
			config:config
		}
	});
};