 'use strict';
 // Nice use of process.stderr.write 
 // Do this instead of console.log if you want to update a piece in the message
 // Teaches promise.resolve and promise.reject (with catch)
    
    var message;
    var promise;
    var BOO = Math.random();
    
    function randomBytes(n) {
      return (Math.random() * Math.pow(256, n) | 0).toString(16);
    }

    if (BOO <0.5) {  
	    message =
	      'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
	      randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
	      'terminated in 3 seconds.';
	    
	    promise = Promise.reject(new Error(message));
	    
	    promise.catch(function (err) {
	      var i = 3;
	    
	      process.stderr.write(err.message);
	    
	      setTimeout(function boom() {
	        process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
	        if (!i) {
	          process.stderr.write('\n..... . . . boom . . . .....\n');
	        } else {
	          setTimeout(boom, 1000);
	        }
	      }, 1000);
	    });
    }

    else promise = Promise.resolve(t2())

    function t2() {
    	console.log('Game will continue in a minute')
    }
