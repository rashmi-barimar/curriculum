/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */

const solution = (arr)=>{
  obj = {};
  for ( let i = 0; i < arr.length; i ++ ) {
    if ( obj[arr[i]] ) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let largest = Math.max(...(Object.values(obj)));
  let commonNum = (Object.keys(obj)).find(function (key) {
    if ( obj[key] === largest ) {
      return key;
    }
  });
  return parseInt(commonNum);
};

module.exports = {
  solution
}
