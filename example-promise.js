// function getTempCallback(location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Utrecht', function(err, temp) {
// 	if(err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });


// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(79);
// 			reject('City not found');
// 		}, 1000);		
// 	});
// }

// getTempPromise('Utrecht').then(function(temp) {
// 	console.log('promise success', temp);
// }, function(err) {
// 	console.log('promise error', err);
// });

function addPromise(a, b) {
	return new Promise(function(resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		} else {
			reject('One of the parameters isn\'t a number!');
		}
	});
}

addPromise(5, 6).then(function(number) {
	console.log('number', number);
}, function(err) {
	console.log('error', err);
});

addPromise(5, "3").then(function(number) {
	console.log('number', number);
}, function(err) {
	console.log('error', err);
});