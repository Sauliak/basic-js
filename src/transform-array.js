const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create convertedArray array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} convertedArray array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr)) {
    let newArr = [...arr];
    let convertedArray = [];
    for(let i = 0; i < newArr.length; i++){
      if (newArr[i] === '--discard-next' && newArr.length >= i) {
          newArr.splice(i+1, 1, 'undefined')    
      } else if (newArr[i] === '--discard-prev') {
          if (i-1 >= 0 && newArr[i-1] !== 'undefined') {
          convertedArray.pop();
        }
      } else if (newArr[i] === '--double-next') {
          if(newArr.length - 1 >= i+1) {
            convertedArray.push(newArr[i+1])
          }    
      } else if (newArr[i] === '--double-prev') {
        if (i-1 >= 0 && newArr[i-1] !== 'undefined') {
         convertedArray.push(newArr[i-1])
        }
      } else if (newArr[i] !== 'undefined')  {
       convertedArray.push(newArr[i])
      }
    }
    return convertedArray;
  } else {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
}

module.exports = {
  transform
};
