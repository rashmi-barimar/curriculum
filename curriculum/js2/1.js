/**
 * Given an array, return the same array where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  for (i=0; i<a.length; i++) {
      if ( a[i] <= 5) {
        a[i] = 0;
      }
  }
  return a;
};

module.exports = {
  solution,
};
