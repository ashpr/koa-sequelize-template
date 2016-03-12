const passport = require("koa-passport");
const sequelize = require("../../_db");
const local = require("./local");

const User = sequelize.models.User;

passport.serializeUser(function(user, cb) {
	cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
	User.findById(id)
		.then(function(user) {
			cb(null, user);
		})
		.catch(function(err) {
			cb(err);
		});
});

passport.use(local);

module.exports = passport;