/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {
  let flag = true;
  let i;
  if ( a === 1 ) {
    return false;
  }
  for ( i=2; i<=a/2; i++) {
    if ( a % i === 0) {
      flag = false;
      break;
    }
  }
  if ( flag ) {
    return flag;
  } else {
    return flag;
  }
};

module.exports = {
  solution,
};
