Feature('HomeRouter');

Scenario('Home page renders', (I, Host) => {
  I.amOnPage(Host.getFullUrl("/"));
  I.see('Maybe you would like to Log in or Register');
});

Scenario('Log in button takes you to log in page', (I, Host) => {
	I.amOnPage(Host.getFullUrl("/"))
	I.click("Log in");
	I.seeInCurrentUrl("/login");
});

Scenario('Register button takes you to log in page', (I, Host) => {
	I.amOnPage(Host.getFullUrl("/"))
	I.click("Register");
	I.seeInCurrentUrl("/register");
});