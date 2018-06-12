/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  if ( a.length === 0 ) {
    return;
  }
  let largest = a[0];
  for ( let i = 1; i < a.length; i ++ ) {
    if ( a[i] > largest ) {
      largest = a[i];
    }
  }
  return largest;
};

module.exports = {
  solution,
};
