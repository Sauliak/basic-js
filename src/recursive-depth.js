const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let num = 1;
    let depth = 1;
    if(Array.isArray(arr)) {
      for(let value of arr) {
        if(Array.isArray(value)) {
          num = num + this.calculateDepth(value);
          if (num > depth) depth = num
          num = 1
        }
      }
    } else {
      return 0;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
