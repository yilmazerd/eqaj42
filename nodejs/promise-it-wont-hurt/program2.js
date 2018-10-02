 require('es6-promise');

 'use strict';
    


var promise = new Promise(function(fulfill, reject) {
	    	// Do async job
	        setTimeout(function(err,resp,body) {
	        		if(err) {
	        			reject(err);
	        		} 
	        		else {
	        			fulfill("FULFILLED!");
	        	}},300);

}).then(function(result) {
        console.log(result);
    });
