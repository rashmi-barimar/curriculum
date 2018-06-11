/**
 * Given an array, return a new array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  let b = [];
  let j = 0;
  for ( let i = 0; i < a.length; i ++ ) {
    if ( a[i] > 5 ) {
      b[j] = a[i];
      j += 1;
    }
  }
  return b;
};

module.exports = {
  solution,
};
