// var names = ['Jan', 'Piet', 'Karel'];

// names.forEach(function(name) {
// 	console.log('forEach', name);
// });

// names.forEach((name) => console.log('arrowFunc', name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('pils'));

function add(a, b) {
	return a + b;
}

var addStatement = (a, b) => {
	return a + b;
}

var addExpression = (a, b) => a + b;

console.log(addStatement(1, 3));
console.log(addExpression(9, 0));
