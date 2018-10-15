const downloader = require('./urlDownloader');

t();

async function t() {
filesToDownload = [];
obj1 = [];
//obj1.url = 'https://www.dropbox.com/s/e7o304n7vb97gyg/myfile2.pdf?dl=0';
obj1.url = 'https://www.dropbox.com/s/e7o304n7vb971231231231231231232gyg/myfile2.pdf?dl=0';
obj1.fnm = 'assets/myfile0.pdf';
filesToDownload.push(obj1)
a = await downloader.download(filesToDownload)
console.log(a)
}
