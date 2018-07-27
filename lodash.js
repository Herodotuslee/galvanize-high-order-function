var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0]
  // Place your solution here
};

 // Returns the first n number of elements in an array.
 _.take = function(array, n) {
 	// Place your solution here
   const newArray = [];
   if (n === undefined) {
     n = 1;
   }

   for (var i = 0; i < n; i++) {
     newArray.push(array[i]);
   }

   return newArray;
 };
// Returns the last element of an array.
_.last = function(array) {
  return array[array.length-1]
	// Place your solution here
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
	// Place your solution here
  const yetAnotherArray = [];
  if (n === undefined) {
    n = 1;
  }

  for (let i = array.length - n; i < array.length; i++) {
    yetAnotherArray.push(array[i]);
  }

  // newArray = array.slice(array.length - n);
  return yetAnotherArray;
};

_.compact = function(array) {
	// Place your solution here
  const noFalsey = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      noFalsey.push(array[i]);
    }
  }

  return noFalsey;
};
// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.compact = function(array) {
	// Place your solution here
  const noFalsey = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      noFalsey.push(array[i]);
    }
  }

  return noFalsey;
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
  return Math.min(...array)
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
  return Math.max(...array)
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
  return array.indexOf(el)
};


/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
	// Place your solution here
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
	// Place your solution here
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
	// Place your solution here
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	// Place your solution here
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
