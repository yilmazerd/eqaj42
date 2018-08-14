// Filter an array with a simple condition

myClients = [
	{
		name: "Mike the old one",
		age: 35
	},

	{
		name: "George the young one",
		age: 22
	},

	{
		name: "Enzo the baby",
		age: 2
	},

	{
		name: "Hans the elder",
		age: 50
	}
]

function filterArray(arr,condition) {
	var passed = [];
	for (var i =0; i<arr.length;i++) {
		if(condition(arr[i]))
		{
			passed.push(arr[i]);
		}
	}
	return passed;
}

console.log(filterArray(myClients,function(person) {
	return person.age < 30;
}));




