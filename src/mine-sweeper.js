const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]
function minesweeper(matrix) {
  let addBombe = [...matrix];
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === false) {
        addBombe[i][j] = 0;
      }
      if(matrix[i][j] === true) {
        addBombe[i][j] = 'bomb';
      }
    }
  }
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++) {
      if(addBombe[i][j] === 'bomb') {
        if (addBombe[i] !== undefined && addBombe[j+1] !== undefined && addBombe[i][j+1] !== 'bomb') {
          addBombe[i][j+1] = addBombe[i][j+1] + 1;
        }
        if (addBombe[i] !== undefined && addBombe[j-1] !== undefined && addBombe[i][j-1] !== 'bomb') {
          addBombe[i][j-1] = addBombe[i][j-1] + 1;
        }
        if (addBombe[i-1] !== undefined && addBombe[j] !== undefined && addBombe[i-1][j] !== 'bomb') {
          addBombe[i-1][j] = addBombe[i-1][j] + 1;
        }
        if (addBombe[i+1] !== undefined && addBombe[j] !== undefined && addBombe[i+1][j] !== 'bomb') {
          addBombe[i+1][j] = addBombe[i+1][j] + 1;
        }
        if (addBombe[i-1] !== undefined && addBombe[j-1] !== undefined && addBombe[i-1][j-1] !== 'bomb') {
          addBombe[i-1][j-1] = addBombe[i-1][j-1] + 1;
        }
        if (addBombe[i-1] !== undefined && addBombe[j+1] !== undefined && addBombe[i-1][j+1] !== 'bomb') {
          addBombe[i-1][j+1] = addBombe[i-1][j+1] + 1;
        }
        if (addBombe[i+1] !== undefined && addBombe[j-1] !== undefined && addBombe[i+1][j-1] !== 'bomb') {
          addBombe[i+1][j-1] = addBombe[i+1][j-1] + 1;
        }
        if (addBombe[i+1] !== undefined && addBombe[j+1] !== undefined && addBombe[i+1][j+1] !== 'bomb') {
          addBombe[i+1][j+1] = addBombe[i+1][j+1] + 1;
        }
      }
    }
  }
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++) {
      if(addBombe[i][j] === 'bomb') {
        addBombe[i][j] = 1;
      }
    }
  }
  return addBombe;
}

module.exports = {
  minesweeper
};
