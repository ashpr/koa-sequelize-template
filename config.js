if (process.env.NODE_ENV == "testing")
	require('node-env-file')(__dirname + '/tests/.env');

module.exports = {
	"db":{
		"database":process.env.DB_DATABASE + (process.env.NODE_ENV == "testing" ? "_test" : ""),
		"user":process.env.DB_USER,
		"password":process.env.DB_PASSWORD,
		"dialect":(process.env.NODE_ENV == "testing" ? "sqlite" : process.env.DB_DIALECT),
		"host":process.env.DB_HOST
	},
	"redis":{
		"host":process.env.REDIS_HOST,
		"password":process.env.REDIS_PASSWORD,
		"client": (process.env.NODE_ENV == "testing" ? "fakeredis" : "redis")
	},
	"port":process.env.PORT,
	"keys":process.env.KEYS,
	"force":(process.env.FORCE_SYNC == "true")
}