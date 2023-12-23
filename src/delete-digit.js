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
  let string = String(n);
  let splited = string.split('')
  let numArr = [];
  for (let i = 0; i < splited.length; i++) {
    let cloneArr = [...splited];
    let del = cloneArr.splice(i, 1);
    let sorted = Number(cloneArr.join(''));
    numArr.push(sorted);
  }
  let result = Math.max(...numArr);
  return result;
}

module.exports = {
  deleteDigit
};
