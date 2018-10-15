require('es6-promise');

downloadOutput = [];
downloadOutput.exec4 = true;

async function	download(filesToDownload) {
 'use strict';

//filesToDownload = [];
//obj1 = [];
//obj1.url = 'https://speed.hetzner.de/1GB.bin';
//obj1.fnm = 'assets/myfile0.bin';
//filesToDownload.push(obj1)
//urlDownloader(filesToDownload)
//use testUrlDownloader.js for unit test



filesToDownload.forEach(function(element){
	if (element===undefined) 
	{
	console.log('not defined')
	} else {
		console.log(element.fnm)
		UrlDownloader(element.url,element.fnm)
	}
});


function UrlDownloader(URL_,fileName) {
	var promise = new Promise(function(fulfill, promiseError) {
	    	// Do async job
	    	downloader(URL_,function(err,resp,body){
	    		if(err) {
	    			promiseError(body);
	    		}
	    		else {
	    			fulfill("FULFILLED");
	    		}
	    	})

}).then(function(result) {
        console.log(result);
    });

function downloader(t) {

	try {
			require('child_process').exec('wget --timeout=1 --output-document='+ fileName + ' ' + t,function(err,stats){
				if(err) 
					throw(err)
			});
	}
		catch(err) {
			console.log(err);
		}
}


function errorHandlers(type){
	switch (type) {
		case 1:
			console.log('There is a problem with your URL address');
			break;
		case 2:
			break;		
	}
}

function statusReport(in42) {
	switch (in42) {
		case 1:
			downloadOutput.exec4 = false;
			break;
	}
}

function promiseError(a) {
	console.log(a)
}

return downloadOutput;
//return true
}

module.exports = {
    download: download
}
