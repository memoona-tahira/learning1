
console.log("hhhhhhhhhhhh.js");

console.log(monnaTest(17));


let result = monnaTest(6);
console.log(result);

let result2 = monnaTest(-12);
console.log(result2);


//arraytest();
function myFunction() {
	console.log("ya chala from j.js");
}


function arraytest() {
	var cars = ["Saab", "Volvo", "BMW"];
	console.log(cars[0]);
	cars[0] = "Opel";
	console.log(cars[0]);
}
/*
function monnaTest(input) {
	if (input < -10 || input > 10) {
		return true;
	}
	else {
		return false;
	}
}
*/

/*
function moonaTest(val) {
 return 	(val < -10 || val > 10) ? true  :  false  ;
}
*/
/*
function monnaTest(input) {
	if (input < -10) {
		return true;
	} else if (input > 10) {
		return true;
	} else {
		return false;
	}
}