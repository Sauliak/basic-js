const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let codeStr = '';
  let code = '';
  let numCode = 1;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]) {
      numCode += 1;
    } else {
      codeStr = codeStr + numCode + str[i];
      numCode = 1;
    }
  }
  for(let i = 0; i < codeStr.length; i++) {
    if(codeStr[i] === '1') {
      codeStr.split(1, 1);
    } else {
      code = code + codeStr[i];
    }
  }
  return code;
}

module.exports = {
  encodeLine
};
