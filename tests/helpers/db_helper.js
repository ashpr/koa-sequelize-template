'use strict'
process.env.NODE_ENV="testing";
const db = require("../../_db");

let Helper = codecept_helper;

class Db extends Helper {
  _before() {
  	//Rebuild the database.
    return db.sync({force: true})
	    .then(function(){
	    	//This isnt really needed but I like to add logs here.
	    	return db;
		});
  } 

  /*
  	Expand with the following...

	createUser(username, password) {
		return db.models.User.create({
			username:username,
			password:password
		})
	}
  */
}

module.exports = Db;