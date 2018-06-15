/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/

const solution = (a, b)=>{
  let kVArr = Object.entries(a);
  return callFuncb(kVArr, b);
};
const callFuncb = (kVArr, b, newObj = {}, i = 0) => {
  if ( i === kVArr.length ) {
    return newObj;
  }
  if (b(kVArr[i][0], kVArr[i][1])) {
    newObj[kVArr[i][0]] = kVArr[i][1];
  }
  return callFuncb(kVArr, b, newObj, i + 1);
};

module.exports = {
  solution,
};
