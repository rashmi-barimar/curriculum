/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a)=>{
  let dupArr = [];
  let x;
  let object = arrayToObject(a);
  for ( x in object ) {
    if ( object[x] > 1 ) {
      dupArr.push(parseInt(x));
    }
  }
  return dupArr;
};
const arrayToObject = (a, obj = { }, i = 0) => {
  if ( i === a.length ) {
    return obj;
  }
  if ( obj[a[i]] ) {
    obj[a[i]]++;
  } else {
    obj[a[i]] = 1;
  }
  return arrayToObject(a, obj, i + 1);
};

module.exports = {
  solution
}
