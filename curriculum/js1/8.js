/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  let remainder = 0 , remainder2 = 0;
  if ( a >= b ) {
    if ( b === 0 ) {
      return a;
    }
    remainder = a % b;
    a = b;
    b = remainder;
    return solution(a, b);
  } else {
    if ( a === 0 ) {
      return b;
    }
    remainder2 = b % a;
    b = a;
    a = remainder2;
    return solution(a, b);
  }
};

module.exports = {
  solution,
};
