const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if(n.length !== 17) {
    return false;
  }
  const arrAdress = n.split('-');
  if(arrAdress.length !== 6) {
    return false;
  }
  for( let i = 0; i < arrAdress.length; i++) {
    if(arrAdress[i].length !== 2) {
      return false;
    }
  }
  const arrLetter = n.split('');
  let arr = [];
  const arrSymbols = ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  for(let i = 0; i < arrLetter.length; i++) {
    for(let j = 0; j < arrSymbols.length; j++) {
      if(arrLetter[i] === arrSymbols[j]) {
        arr.push(arrLetter[i]);
      }
    }
  }
  if(arr.length !== arrLetter.length) {
    return false;
  }
  return true;
}

module.exports = {
  isMAC48Address
};
