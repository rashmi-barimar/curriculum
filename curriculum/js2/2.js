/**
 * Given an array, return the same array
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  for ( i=0; i<a.length;i++ ) {
    if ( a[i] % 2 !== 0 ) {
      a[i] = 0;
    }
  }
  return a;
};

module.exports = {
  solution,
};
