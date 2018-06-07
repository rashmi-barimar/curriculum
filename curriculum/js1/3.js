/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a = 1, counter = 0 ) => {
  if ( counter === a ) {
    return;
  }
  console.log('hello');
  solution(counter + 1);
};

module.exports = {
  solution,
};
