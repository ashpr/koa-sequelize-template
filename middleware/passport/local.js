const LocalPassport = require("passport-local");
const sequelize = require("../../_db");
const LocalStrategy = LocalPassport.Strategy;
const User = sequelize.models.User;

module.exports = new LocalStrategy(
  function(username, password, done) {
    console.log("Doing login with", username, password);
    User.doLogin(username, password)
      .then(function(user) {
        if (user)
          return done(null, user);
        else
          return done(null, false);
      })
      .catch(function(err) {
        done(err);
      });
  }
);