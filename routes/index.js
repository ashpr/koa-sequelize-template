const router = require('koa-router')();
const HomeRouter = require("./HomeRouter");
const LoginRouter = require("./LoginRouter");
const LogoutRouter = require("./LogoutRouter");
const RegisterRouter = require("./RegisterRouter");

router.options("*", function *(){
	//Hotfix for CORS OPTIONS calls.
	this.status = 200;
});

router.use("/", HomeRouter.routes());
router.use("/login", LoginRouter.routes());
router.use("/logout", LogoutRouter.routes());
router.use("/register", RegisterRouter.routes());

module.exports = router;