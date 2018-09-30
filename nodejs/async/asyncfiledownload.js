var request = require("request");
var fs = require('fs');
const cm = require('./combineMovies');
const AWS = require('fluent-ffmpeg');


function initialize(inputURL) {
    // Setting URL and headers for request
    var options = {
        url: inputURL,
        encoding: 'binary',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
    	// Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })

}

function main(URLinput,outputFileName) {
    var mediaFile = [];
    var initializePromise = initialize(URLinput);
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        return userDetails;
    }, function(err) {
        console.log(err);
    }).then(function(result) {
    	//var buf = new Buffer.alloc(result, 'base64');
        fs.writeFile(outputFileName, result, 'binary', function(err) {if(err) {return console.log(err);}console.log("The file was saved!");
    });});
    //fs.writeFile('test.mp4', mediaFile, function(err) {if(err) {return console.log(err);}console.log("The file was saved!");});
}


main('https://github.com/mediaelement/mediaelement-files/raw/master/big_buck_bunny.mp4','test2.mp4');
main('https://github.com/mediaelement/mediaelement-files/raw/master/big_buck_bunny.mp4','test21.mp4');
