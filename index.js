const moi = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say ({
	text :`Je suis ${moi.nom} de ${moi.campus}!!!!`,
	eyes: 'oO',
	T : "U ", 
}));