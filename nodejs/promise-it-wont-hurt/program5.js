 require('es6-promise');

 'use strict';
// Proves that promises are always async
// Despite that the promise is resolved synchronously, the provided function is not executed until the next turn of the event loop.


var promise = new Promise(function(fulfill, reject) {
	    	// Do async job
	        	fulfill('PROMISE VALUE')
	        //	reject(new Error('I DID NOT FIRE'))
	        	}).then(console.log); //

function onReject (error) {
	console.log(error.message)
    }

function onFulfill(succes21) {console.log(succes21)}
function setTimeout2() {};

console.log("MAIN PROGRAM")
