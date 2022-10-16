const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 let domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
  ]
function getDNSStats(domains) {
  let arr = [];
  let obj = {};
  for(let value of domains){
    arr.push(value.split('.').reverse());
  }
  for (let i = 0; i < arr.length; i++) {
    let key = '';
    for (let j = 0; j < arr[i].length; j++) {
      key = key + '.' + arr[i][j];
      obj[key] = obj[key] ? obj[key] + 1 : 1;
    }
  }
  return obj;
}
console.log(getDNSStats(domains))
module.exports = {
  getDNSStats
};
