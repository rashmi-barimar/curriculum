/**
 * Given an array, return the same array
 *   where all elements that are not prime is changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  for ( i = 0; i< a.length; i ++ ) {
    if ( ! primeNoFunc(a[i]) ) {
      a[i] = 1;
    }
  }
  return a;
};
const primeNoFunc = (num) => {
  let flag = true;
  let i;
  for ( i = 2; i <= num/2; i++ ) {
    if ( num % i === 0 ) {
      flag = false;
      break;
    }
  }
  return flag;
};

module.exports = {
  solution,
};
