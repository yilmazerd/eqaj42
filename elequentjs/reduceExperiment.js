//Use reduce to sum an array
var myArray =[];
myArray = [1,2,3,4,5];
myArray.reduce(function (accum,vari1){if (vari1>2) {return accum+vari1}});

//Use reduce to clean undefined variables and sum the numbers
var myStatInput = [1,2,3,4,2,2,3,1,2,41,'nan',2,4,'nan'];
var fm = myStatInput.reduce(function (accum,vari1){
	if (typeof vari1 == 'number') {return accum+vari1;}
	else {return accum;}
});

//console.log(fm)

//Use reduce to clean undefined variables and create a new array
var myStatInput = [1,2,3,4,2,2,3,1,2,41,'nan',2,4,'nan'];
myStatInput.clean = [];
myStatInput.total = 0;
myStatInput.total = myStatInput.reduce(function (accum,vari1){
	if (reduceCondition(vari1)) {myStatInput.clean.push(vari1);return accum+vari1}
	else {return accum;}
});

function reduceCondition(v) {return (typeof v == 'number')}

console.log(myStatInput)
//console.log(myStatInput.clean)


//Use reduce to work on multi-dimensional arrays
var myStatInput = [[1,2,3,4,2,2,3,1,2,41,'nan',2,4,'nan'],[1,2,3,4,2,2,3,1,2,41,'nan',2,4,'nan']];
