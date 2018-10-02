 require('es6-promise');

 'use strict';
// Notice that .then takes 2 parameters, then and another function that is used when the promise is rejected
// Notice that you can enter null instead of an empty function with .then
// Notice that in the case of reject, we can call another function 
// Notice that new Error object is used to create an error and the .message is the variable that matters    


var promise = new Promise(function(fulfill, reject) {
	    	// Do async job
	        setTimeout(function(err,resp,body) {
	        	reject(new Error("REJECTED!"))},300);
	        	}).then(null,onReject); //

function onReject (error) {
	console.log(error.message)
    }
