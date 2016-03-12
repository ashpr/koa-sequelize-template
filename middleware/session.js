const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const config = require("../config");

module.exports = function() {
	return session({
		store: redisStore({
			host: config.redis.host,
			port: config.redis.port
		})
	});
}