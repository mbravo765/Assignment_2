/*---------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/


let myArray = [1,9,3,5,7];

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
// The map() method should create a new array with new elements that have done the provided function on every element in the old array
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
// This function should return a new array with elements that pass the filter provided
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
  const filtered_array = []; //create a new array for filtered elements
  for(let i = 0; i < this.length; i++) {
    if(callbackFn(this[i],i,this)) {
      filtered_array.myPush(this[i]);
    }
  }
  return filtered_array;
};

console.log("Filter function");
// Test for FILTER
const words = ['fellow','friend','grandfather','aunt','cousin','grandmother'];
console.log("All words in array: ");
console.log(words);
console.log("Words with a length greater than 6");
const result = words.myFilter(word => word.length > 6);
console.log(result);

console.log("------------------------------------------------------------");


// SOME //
// This method should test whether there is at least one element in the array that passes the provided test
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  let boolean = false;
  for(let i = 0; i < this.length; i++) {
    if(callbackFn(this[i],i,this)) {
      boolean = true;
    }
  }
  return boolean;
};

//Test for Some method
console.log("Some function");
console.log(myArray);
console.log("check if there is at least one element in array that is even");
const even = (element) => element % 2 == 0;
console.log(myArray.mySome(even));
console.log("------------------------------------------------------------");


// EVERY
// This every function should return a boolean value that returns true if all elements in the array pass the test implemented by the function
//Does not work for every element
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  let boolean = true;
  for(let i = 0; i < this.length; i++) {
    if(callbackFn(this[i],i,this)) {
      boolean = true;
    }
   boolean = false;
  }
  return boolean;
};

//Test for every function
console.log("Every function");
const array2 = [13,26,56,32,17,10,4];
console.log(array2);
console.log("Check if every element in the array is under 40");
const isBelow = (currentValue) => currentValue < 40;
console.log(array2.myEvery(isBelow));
console.log("----------------------------------------------------------------");


// REDUCE //
// The reduce method should run a callback function on each element of the array
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  let total = 0;
  for(let i = 0; i < this.length; i++) {
    if(callbackFn(this[i],i,this)) {
      total += this[i];
    }
  }
  return total;
};

//Test for reduce
console.log("Reduce Function");
const array3 = [1,2,3,4];
console.log(array3);
const initVal = 0;
const total = array3.myReduce((accumulator, currentValue) => accumulator + currentValue, initVal);
console.log("Return sum of all elements in the array: ");
console.log(total);
console.log("---------------------------------------------------------------------");


// INCLUDES //
// The includes function should determine whether an array includes a certain value among its elements. Return true if certain value is found, false otherwise.

Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  let x = false;
  for(let i = 0; i < this.length; i++) {
    if(searchElement==this[i]) {
      x = true;
    }
  }
  return x;
};

//Test for INCLUDES
console.log("INCLUDES FUNCTION");
const array4 = [1,2,3];
console.log(array4);
console.log("Does this array INCLUDE '2'?");
console.log(array4.myIncludes(2));
const animals = ['rabbits','bunnies','birds', "ducks", "owls", "bunnies"];
console.log("animals: ");
console.log(animals);
console.log("Does this array INCLUDE 'bunnies'?");
console.log(animals.myIncludes('bunnies'));
console.log("Does this array INCLUDE 'lizards'?");
console.log(animals.myIncludes('lizards'));
console.log("----------------------------------------------------------------------");


// INDEXOF //
//The indexOf method should return the first INDEX at which a given element can be found in the array. If it cannot be found, return -1.
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
  for(let i = 0; i < this.length; i++) {
    if(searchElement == this[i]) {
      return i;
    }
  }
  return -1;
};

//TEST FOR INDEXOF
console.log("indexOf function");
console.log(animals);
console.log("Return index of 'bunnies'");
console.log(animals.myIndexOf('bunnies'));
console.log("Return index of 'bunnies' starting after index 2");
console.log(animals.myIndexOf('bunnies',2));
console.log("Return index of 'jellyfish'");
console.log(animals.myIndexOf('jellyfish'));



// LASTINDEXOF //
// The lastIndexOf function should return the last index at which a given element can be found in an array. If it is not found, return -1. The array is searched backwards.
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  let index = 0;
  for(let i = this[this.length-1]; i < this.length; i--) {
    if(searchElement == this[i]) {
      index = i;
    }
    else {
      index = -1;
    }
  }
   return index;
};

console.log("LASTINDEXOF FUNCTION");
const ocean_animals = ['fish', 'dolphins', 'sharks', 'jellyfish', 'fish'];
console.log(ocean_animals);
console.log("Return last index of 'fish' in array");
console.log(ocean_animals.myLastIndexOf('fish'));
console.log("Return last index of 'dolphins' in array");
console.log(ocean_animals.myLastIndexOf('dolphins'));
console.log("--------------------------------------------------------------------------");


// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};

