const router = require('koa-router')();
const db = require("../_db");
const User = db.models.User;

router.get("/", function*() {
	yield this.render("register");
});

router.post("/", function*() {
	try {
		var user = yield User.create(this.request.body);
		yield this.login(user);
		this.redirect("/");
	}
	catch(err){
		this.redirect("/register");
	}
});

module.exports = router;