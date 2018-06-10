/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  let i;
  let sum=0;
  for (i=2; i<=a/2; i++) {
       if ( a % i === 0 ) {
           sum = sum + i;
       }
  }
  return sum;
};

/* const solutionRec = (a, sum=0, counter=2 ) => {
if ( a % counter === 0 ) {
  sum = sum + counter;
}
if ( counter >= a/2 ) {
 return sum;
}
return solutionRec(a, sum, counter+1 );
};*/

module.exports = {
  solution,
};
