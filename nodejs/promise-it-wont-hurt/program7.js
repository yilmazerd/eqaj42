// Teaches chaining promises with then
// Return a promise with then to another promise

/*Parse.User.logIn('user', 'pass').then(function (query) {
      return query.find();
    }).then(function (results) {
      return results[0].save({ key: value });
    }).then(function (result) {
      // the object was saved
    });
*/

//exampleOfOnePromiseFunctionChain()
//examplePromiseReturnsPromise()

//function first() {return 'elma'};
//function second() {return 'armut'}

//first(function(result){
//	new Promise(resolve,reject)=> {resolve(second(result));}});

//first.then(function(result){return new Promise((cosh,reject) => {cosh(second(result));})});
//console.log(second(2))
//function cosh(a) {console.log(a)}


/*var promise = new Promise(
	function(fulfill,reject){
			fulfill(p2);

	}).then(function(result){
		console.log(result)
	})
*/
//var p2 = new Promise(function(fulfill,reject){fulfill('Finalized')}).then(function(result){console.log(result)});
//var p2 = new Promise(function(fulfill,reject){fulfill('Finalized')});

//first().then(function(result){console.log(result)}); 
var promise = new Promise(
	function(fulfill, reject) {
	        			fulfill(
	        				first().then(function(result){
	        					return second(result);
	        				})
	        				);
}).then(console.log);


function doNotUseGoodExamplesImade(){
var vs  = fthatreturn()
console.log(vs)

function fthatreturn(){ // this function returns a prmises
	var p2 = new Promise(function(fulfill,reject){fulfill('Finalized')}).then(function(result){console.log(result)});
	return p2
}

function fthatreturn2(){
	var p2 = new Promise(function(fulfill,reject){fulfill('Finalized')});
	return p2
}

// Although fthatreturn2 is a function, because it returns a promise, you can still use .then with it
fthatreturn2().then(function(result){console.log(result)}); 

}

function examplePromiseReturnsPromise(){

  new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  console.log(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  console.log(result); // 4

});
}

function exampleOfOnePromiseFunctionChain() {
	new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*) Just an async function that resolves at 1

	}).then(function(result) { // (**)

	  console.log(result); // 1
	  return result * 2;

	}).then(function(result) { // (***)

	  console.log(result); // 2
	  return result * 2;

	}).then(function(result) {

	  console.log(result); // 4
	  return result * 2;

	});

}
