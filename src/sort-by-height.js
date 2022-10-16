const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrNegative = [];
  let arrHeight = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === -1) {
      arrNegative.push(i);
    } else {
      arrHeight.push(arr[i]);
    }
  }
  arrHeight.sort((a, b) => a - b);

  for (let i = 0; i < arrNegative.length; i++) {
    arrHeight.splice(arrNegative[i], 0, -1);
  }
  return arrHeight;
}

module.exports = {
  sortByHeight
};
