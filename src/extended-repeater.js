const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let separator = options.separator ? options.separator : '+';
  let additionRepeat = String(str); 
  if (options.additionRepeatTimes > 1){
    for(let i = 0; i < options.additionRepeatTimes - 1; i++) {
      additionRepeat = additionRepeat + addition + additionSeparator;
    }
    additionRepeat = additionRepeat + addition;
  } else {
    additionRepeat = additionRepeat + addition;
  }

  let stringRepeat = additionRepeat;
  if(options.repeatTimes > 1) {
    for(let j = 0; j < options.repeatTimes - 1; j++) {
      stringRepeat = stringRepeat + separator + additionRepeat;
    }
  } else {
    stringRepeat = stringRepeat;
  }

  return stringRepeat;
}

module.exports = {
  repeater
};
