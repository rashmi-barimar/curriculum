/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {
  let flag = 1;
  let i;
  if ( a === 1 ) {
    return false;
  }
  for ( i=2; i<a; i++) {
    if ( a % i === 0) {
      flag = 0;
      break;
    }
  }
  if ( flag === 1) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  solution,
};
