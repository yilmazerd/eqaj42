 require('es6-promise');

 'use strict';
// Shows that a promise's state can only be changed once, meaning that once fulfilled you can't reject a promises


var promise = new Promise(function(fulfill, reject) {
	    	// Do async job
	        setTimeout(function(err,resp,body) {
	        	fulfill('I FIRED')
	        	reject(new Error('I DID NOT FIRE'))},0);
	        	}).then(onFulfill,onReject); //

function onReject (error) {
	console.log(error.message)
    }

function onFulfill(succes21) {console.log(succes21)}
function setTimeout2() {};
