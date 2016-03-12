const router = require('koa-router')();
const db = require("../_db");
const User = db.models.User;

router.get("/", function *(){
	yield this.render("login");
});

router.post("/", function *(){
	var username = this.request.body.username;
	var password = this.request.body.password;

	try{
		var user = yield User.doLogin(username, password);

		yield this.login(user);
		this.redirect("/");
	}
	catch(err){
		this.redirect("/login");
	}
});

module.exports = router;