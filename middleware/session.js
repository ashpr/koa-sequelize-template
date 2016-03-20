const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const config = require("../config");
const redis = require(config.redis.client);

var client = redis.createClient(config.redis.host, config.redis.port);
console.log(config.redis.client);

module.exports = function() {
	return session({
		store: redisStore({
			client: client
		})
	});
}