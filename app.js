var personName = "amBer asiF";
console.log("Nmae in Uppercase : ".concat(personName.toUpperCase()));
console.log("Nmae in Lowercase : ".concat(personName.toLowerCase()));
//for title case
var step1 = personName.split(" ");
var step2 = step1.map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
var step3 = step2.join(" ");
console.log("Name in title case : ".concat(step3));
