/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b, counter=1) => {
  if ( counter === a ) {
    return b();
  }
  b();
  return solution( a, b, counter+1 );
 };

module.exports = {
  solution,
};
