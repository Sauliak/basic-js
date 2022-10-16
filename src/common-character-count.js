const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str1 = s1.split('').sort();
  const str2 = s2.split('').sort();
  let num = 0;
  for (let value of str1) {
    if (str2.includes(value)) {
      num += 1;
      str2.splice(str2.indexOf(value), 1)
    }
  }
  return num;
}

module.exports = {
  getCommonCharacterCount
};
