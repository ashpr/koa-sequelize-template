const router = require('koa-router')();
const db = require("../_db");
const User = db.models.User;

router.get("/", function *(){
	this.logout();
	yield this.render("logout");
});

module.exports = router;