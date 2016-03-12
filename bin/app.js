const koa = require("koa");
const koaMount = require("koa-mount");
const koaStatic = require("koa-static");
const bodyParser = require('koa-bodyparser');
const handlebars = require("../middleware/handlebars");
const routes = require("../routes");
const passport = require("../middleware/passport");
const session = require("../middleware/session");
const config = require("../config");
const cors = require('kcors');

var app = koa();

var buildStatic = koaStatic(__dirname + '/../wwwbuild');
var assetsStatic = koaStatic(__dirname + '/../assets');

app.keys = config.keys.split(",");

app.use(cors({
	credentials:true
}));

app.use(koaMount("/build", buildStatic));
app.use(koaMount("/assets", assetsStatic));

app.use(handlebars());
app.use(bodyParser());

app.use(session());
app.use(passport.initialize())
app.use(passport.session())

app.use(routes.routes());

module.exports = app;