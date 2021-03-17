const studentIntro = require('./information.js');

var cowsay = require("./node_modules/cowsay");

console.log(cowsay.say({
	text : studentIntro,
	e : "oO",
	T : "U ",
}));

// or cowsay.think()