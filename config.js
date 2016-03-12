module.exports = {
	"db":{
		"database":process.env.DB_DATABASE,
		"user":process.env.DB_USER,
		"password":process.env.DB_PASSWORD,
		"dialect":process.env.DB_DIALECT,
		"host":process.env.DB_HOST
	},
	"redis":{
		"host":process.env.REDIS_HOST,
		"password":process.env.REDIS_PASSWORD
	},
	"port":process.env.PORT,
	"keys":process.env.KEYS,
	"force":(process.env.FORCE_SYNC == "true")
}