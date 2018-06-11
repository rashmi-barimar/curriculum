/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  let i;
  let sum=0;
  for ( i = 0; i < a.length; i ++ ) {
    sum = sum + a[i];
  }
  return sum;
};

module.exports = {
  solution,
};
