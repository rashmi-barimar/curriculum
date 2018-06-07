/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, counter = 0, str = '') => {
    if ( counter === a ) {
    return str;
    }
  str += 'hello';
  return solution(a, counter + 1, str);
};

module.exports = {
  solution,
};
