/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a, b)=>{
  let flag1;
  flag1 = checkPairs(a, b, false);
  return flag1;
};
const checkPairs = (a, b, flag, obj = {}, i = 0) => {
  if ( i === a.length ) {
    return flag;
  }
  if ( obj[b-a[i]] ) {
    return true;
  } else {
    obj[a[i]] = true;
  }
  return checkPairs(a, b, flag, obj, i + 1 );
};
module.exports = {
  solution,
};
