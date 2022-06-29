'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Function takes a value and returns the value unchanged
 * 
 * @param {any value} value: Function takes in any value
 * @returns {any value} return any input value unchanged 
 * 
 */
 function (value) { 
    return value;
}




/**
 * typeOf: Function takes a value and returns what type of data the value is, as a string
 * 
 * @param {any value} value: Function takes in any value
 * @returns {data type, value} return type of data the value is, as a string 
 * 
 */
 function(value) {
        
    if (Array.isArray(value)) { 
        return "array"
    }
    else if (value === null) { 
        return "null"
    }
    else if (value instanceof Date){ 
        return "date"
    }
     return typeof value; 
}




/**
 * first: Designed to take a number and an array. If the array is not an array we return an empty array. If number is not given (NaN or undefined) return
 * just the first element in the array. Otherwise, we return the first number items (for loop) of array.
 * 
 * @param {any value} num: Any given number.
 * @param {collection} array: An array. 
 * @returns { [] } an empty array
 * @returns {array[0]} whatever value is at the first index of the array
 * @returns {array} an array
 * @returns {newArr} a new array with the first number items of array
 * 
 */
 function(array, num) {
    var newArr = []; 

   if (Array.isArray(array) === false) { 
       return []; 
   } else if (num === null || isNaN(num)) { 
       return array[0]; 
   } else if (num <= 0) { 
        return [];
   } else if (num > array.length) { 
       return array;
   } 
   for (var i = 0; i < num; i++) { 
       newArr.push(array[i]); 
   }
   return newArr; 
}




/**
 * last: Designed to take a number and an array. If the array is not an array we return an empty array. If number is not given (NaN or undefined) return
 * just the last element in the array. Otherwise, we return the last number items of array.
 * 
 * @param {any value} num: Any given number.
 * @param {collection} array: An array. 
 * @returns { [] } an empty array
 * @returns {array[0]} whatever value is at the last index of the array
 * @returns {array} an array
 * @returns {new array} newArr: a new array with the last number items of array
 * 
 */
 function(array, num) {
    
    var newArr = [];
   if (Array.isArray(array) === false) {  
       return [];
   } else if (num === null || isNaN(num)) { 
       return array[array.length - 1];
   } else if (num < 0) { 
        return [];
   } else if (num > array.length) {  
       return array;
   }  else {
    newArr = array.slice(-num); 
   }
   return newArr; 
}




/**
 * indexOf: Designed to take a value and an array. Iterates through the array and returns the index of the array that matches the first occurance of input value. It will
 * also return -1 if no match is made between the array index and value. 
 * 
 * @param {any value} value: Any given value.
 * @param {collection} array: An array. 
 * @returns {i} the given index of array
 * @returns {-1} a value of -1 
 * 
 */
 function(array, value) {
    for (var i = 0; i < array.length; i++) { 
        if (array[i] === value) { 
            return i; 
        }
    }   
    return -1; 
} 




/**
 * contains: Designed to take a value and an array. Utilizing a ternary condition, the function tests if the array includes the given value of input. It returns true if the
 * value is included in the array, and false if not. 
 * 
 * @param {any value} value: Any given value.
 * @param {collection} array: An array. 
 * @returns {boolean value} true
 * @returns {boolean value} false
 * 
 */
 function(array, value) { 
    return array.includes(value) ? true : false;
}




/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */
 function(collection, func){
if(Array.isArray(collection)){
for (var i = 0; i < collection.length; i++){  
    func(collection[i], i, collection);  
}
} else {
    for (var key in collection){
        func(collection[key], key, collection); 
        }
    }
}




/**
 * unique: Designed to loop over a collection, an array in this instance, and removes any duplicate elements from array.
 * 
 * @param {collection} array: The collection over which to iterate.
 * @return {new array} newArr: The collection with no duplicate elements.
 */
 function(array) { 
    var newArr = []; 
    for (var i = 0; i < array.length; i++) { 
        if (this.indexOf(newArr, array[i]) < 0) { 
            newArr.push(array[i]); 
        }
    }
   return newArr; 
}




/**
 * filter: Designed to loop over a collection, an array in this instance, and returns a new array with elements from the parameter array, depending on whether they returned
 * a true value after passing through the called upon function.
 * 
 * @param {collection} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each element in the 
 * array
 * @return {new array} newArr: array of returned true values
 */
 function(array, func) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) { 
        if (func(array[i], i, array)) {
            newArr.push(array[i]); 
        }
    }
    return newArr; 
}




/**
 * reject: Designed to loop over a collection, an array in this instance, and returns a new array with elements from the parameter array, depending on whether they returned
 * a false value after passing through the called upon function.
 * 
 * @param {collection} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each element in the 
 * array
 * @return {new array} newArr: array of returned false values
 */
 function(array, func) {
    var newArr = []; 
    for (var i = 0; i < array.length; i++) { 
        if (func(array[i], i, array === false)) { 
            newArr.push(array[i]); 
        }
    }
    return newArr;
}




/**
 * partition: Designed to call function for each element in array passing in the arguments: element, key, & the array. After this it should 
 * return an array that is made up of 2 sub arrays: one containing all the truthy value, and one containing all the falsy value which were returned
 * from the function.  
 *  
 * @param {collection} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each element in the 
 * array
 * @return {new array} an array that is made up of 2 sub arrays: truth and falsy.
 */
 function(array, func) {
    return [_.filter(array, func), _.reject(array, func)]; 
    }



/**
 * map: Designed to call function to determine if the collection is an object or an array. If it is an array pass the arguments "the element, it's index, 
 * collection and if it's an object pass the arguments "the value, it's key, collection". After this, it should return a value of each function in a new
 * array.
 * 
 * @param {collection} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each element in the 
 * array
 * @return {new array} newArr: return value from each function
 */
 function(coll, func) {

    var newArr = []; 

    for (var i = 0; i < coll.length; i++) { 
        if (Array.isArray(coll)) { 
            newArr.push(func(coll[i], i, coll)); 
        }
    }
        if (!Array.isArray(coll)) { 
            for (var key in coll) { 
                newArr.push(func(coll[key], key, coll)); 
            }
        }
        return newArr; 
};




/**
 * pluck: Designed to return an array containing the value of the property parameter for every element in the array being passed through.
 * 
 * @param {collection} arr: The collection over which to iterate.
 * @param {A property} prop: The Function to be applied to each element in the 
 * array
 * @return {new array} array: return value for every element in array
 */
function(arr, prop) {
    return _.map(arr, function(value, index, array) { 
        return array[index][prop]; 
    })
}




/**
 * every: Designed to take in an object or an array. If every element of the object or array is true when passed through the function, we return true.
 * If even one element is false, we return fasle. If no function argument is provided we assess the elements as being either "truthy" or "falsy" and our 
 * return is then based on that.
 * 
 * @param {collection} collec: The collection over which to iterate.
 * @param {function} func: The Function to be applied to each element in the 
 * array or object
 * @return {boolean value} true or false
 */

 function (collec, func){
   
    let falseCount = 0;
  
    if (func === undefined) {
      if (Array.isArray(collec)) {
        for (let i = 0; i < collec.length; i++) {
          if (collec[i] === false) {
            falseCount++;
          }
        }
      }
    } else {
      if (Array.isArray(collec)) {
        for (let i = 0; i < collec.length; i++) {
          if (func(collec[i], i, collec) === !true) {
            falseCount++;
          }
        }
      }
    }
    return falseCount === 0;
  }




/**
 * some: Designed to take in an object or an array. If at least one element of the object or array is true when passed through the function, we return true.
 * If it is false for all elements, we return false. If no function argument is provided, then if even one element is considered truthy, we return true,
 * otherwise we return false.
 * 
 * @param {collection} collec: The collection over which to iterate.
 * @param {function} func: The Function to be applied to each element in the 
 * array or object
 * @return {boolean value} true or false
 */
   function (collec, func){
   
    let falseCount = 0; 
  
    if (func === undefined) { 
      if (Array.isArray(collec)) { 
        for (let i = 0; i < collec.length; i++) { 
          if (collec[i] === false) { 
            falseCount++; 
          }
        }
      }
    } else { 
      if (Array.isArray(collec)) {  
        for (let i = 0; i < collec.length; i++) { 
          if (func(collec[i], i, collec) === false) {  
            falseCount++;
          }
          if (func(collec[i], i, collec) === true) { 
            return true;
          }
        }
      }
    }
    return falseCount === 0; 
  }



/**
 * reduce: Designed to call a funciton, and for every element in an array we pass the arguments: previous result, element, & index. We us the return value
 * of the function as the "previous result" for the upcoming iteration. For the first iteration we would use the seed value, but if no seed value is
 * provided, we will instead us the first element value of the array as the seed value and move on to the next element. After the iteration is complete,
 * return the return value of the final call from the function.
 * 
 * @param {seed} seed: a starting value
 * @param {collection} array: The collection over which to iterate.
 * @param {function} func: The Function to be applied to each element in the array
 * @return {output value} whatever the value of the final function call is
 */
     function (array, func, seed) {
        var output;
        //determine if seed was not passed in
        if (seed === undefined) {
                output = array[0];
            for (var i = 1; i < array.length; i++) {
                //reassign value of ouput to result of invoking input func on the current value
                // of outpu, the current value in the array, the current index, and the array itself
                output = func(output, array[i], i, array);
            }
    
        } else {// else it was passed
            output = seed;
            for (var i = 0; i < array.length; i++) {
                output = func(output, array[i], i, array);
            }
        }// return output
        return output;
    };




/**
 * extend: Designed to copy properties from one object to another. Should be able to accept inifinite amount of objects as arguments.
 * 
 * @param {object} obj1: first object
 * @param {object} obj2: second object
 * @param {object} otherObjs: any other objects passed in 
 * 
 * @return {object} obj1 with the copied properties from the proceeding objects passed in.
 */
 function(obj1, obj2, ...otherObjs) { 
    return Object.assign(obj1, obj2, ...otherObjs)
}
