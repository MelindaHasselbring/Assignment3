/*eslint-env browser*/

//The Fortune Teller (5 points)
//Why pay a fortune teller when you can just program your fortune yourself? Write a function named tellFortune() that:
//•	Takes 4 arguments: number of children, partner's name, geographic location, job title.
//•	Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//•	Call that function 3 times with 3 different values for the arguments.


var X = window.prompt("Enter jobTitle");
var Y = window.prompt("Enter geoloc");
var Z = window.prompt("Enter partnersName");
var N = window.prompt("Enter numOfChildren");

var i;
var toBe;

function fortuneTeller(N, Z, Y, X) {
	"use strict";
	for (i = 1; i < 3; i += 1) {
		toBe = "You will be a " + X + " in " + Y +  ", and married to " +  Z + " with " +  N + ".";
		window.console.log(toBe);
	}
}
fortuneTeller(N, Z, Y, X);

//function tellFortune(jobTitle, geoLocation, partner, numKids) {
//	"use strict";
//    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partner + ' ' + ' with ' + numKids + ' kids.';
//    window.console.log(future);
//}
//
//tellFortune('bball player', 'spain', 'Shaq', 3);
//tellFortune('stunt double', 'Japan', 'Ryan Gosling', 4);
//tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);
