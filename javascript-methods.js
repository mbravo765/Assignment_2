/*---------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/


let myArray = [1,2,3,4,5];

//PUSH
//From Example Code provided on course page
//PUSH
//From Example Code provided on course page

Array.prototype.myPush = function(...args) {
  let args_index = 0;
  let length = this.length;
  for(let i = length; i < length+args.length; i++) {
    this[i] = args[args_index];
    args_index++;
  }
  return this.length;
};

// MAP //
// The map() method should take in an array of elements and execute a callback function on each of those elements
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  const new_array = [];
  for(let i = 0; i < this.length; i++) {
    new_array.myPush(callbackFn(this[i],i,this));
  }
  return new_array;
};

// TEST myMap method
console.log("myMap method");
console.log("The original array: ");
console.log(myArray);
console.log("The myMap method for array: ");
const map1 = myArray.myMap(x=> x*2);
console.log(map1);
console.log("----------------------------------------------------------------");

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};
