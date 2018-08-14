
myNumbers = [2,4,12];
// Best use case of map is to apply something on ALL variables in an array like this
myNumbers2 = myNumbers.map(function (doubler) {return doubler*2;});
//Call back can be a function like this
var function myDoubler(var1) {return var1*2};
myNumbers3 = myNumbers.map(function (doubler) {myDoubler(doubler)});
//Another great use of map is to manupiluate ALL strings
var myStringArray = [];
myStringArray = ["Asd","ESD","EFS"];
a = myStringArray.map(function (st1) {return "ThisIsMyPassword".concat(st1);});
//If you need quality control on the strings, you must do it somewhere else

var myStatInput = [1,2,3,4,2,2,3,1,2,41,'nan',2,4,'nan'];
var mstatmap = []
mstatmap.data = [];
myStatInput.map(function(var1){
	counter = 0;
	avg = 0;
	total=0
	if (typeof var1 == 'number') {mstatmap.data.push(var1)}
})

console.log(mstatmap.data)



myRectangles = [
	{
		short: 20,
		long: 35
	},

	{
		short: 10,
		long:  45
	},

	{
		short: 12,
		long:  33
	},

	{
		short: 12,
		long: 14
	},

	{
		short: "nsn",
		long: 14
	}
]


areas = myRectangles.map(function (e) {return areaCalculator(e)})

function areaCalculator(dimensions) 
{
	if (typeof dimensions.short == 'number' && typeof dimensions.long == 'number')
	{
		return dimensions.short*dimensions.long;
	}
};


