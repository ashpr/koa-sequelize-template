const router = require('koa-router')();

router.get("/", function *(){
	yield this.render("home");
})

module.exports = router;