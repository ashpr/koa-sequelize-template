const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const config = require("../config");
const redis = require("redis");

var client = redis.createClient({
	host:config.redis.host, 
	port:config.redis.port
});

module.exports = function() {
	return session({
		store: redisStore({
			client: client
		})
	});
}