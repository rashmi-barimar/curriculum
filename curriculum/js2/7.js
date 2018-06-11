/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b) => {
  let counter = 0;
  for ( let i = 0; i < a.length; i ++ ) {
    if ( a[i] === b ) {
      counter += 1;
    }
  }
  return counter;
};

module.exports = {
  solution,
};
