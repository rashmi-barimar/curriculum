/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, str, counter=0, newStr = '') => {
  if ( counter === a ) {
    return newStr;
  }
  newStr += str;
  return solution(a, str, counter+1, newStr);
};

module.exports = {
  solution,
};
