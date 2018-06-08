/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  let rem;
  let nextNumDivBy7;
  let noToMakeDivBy7;
  rem = a % 7;
  noToMakeDivBy7 = 7 - rem;
  nextNumDivBy7 = a + noToMakeDivBy7;
  return nextNumDivBy7;
};

module.exports = {
  solution,
};
