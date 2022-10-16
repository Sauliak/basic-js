const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrNum = ('' + n);
  console.log(arrNum)
  let arr = [];
  for(let i = 0; i < arrNum.length; i++) {
    arr.push(arrNum.slice(0, i) + arrNum.slice(i+1));
  }
  console.log(arr)
  return Number(Math.max(...arr))  ;
}

module.exports = {
  deleteDigit
};
