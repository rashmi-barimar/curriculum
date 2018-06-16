/**
 * Create Object.prototype.forEach
 *   ForEach takes in a function, and that function
 *       is called with key, value parameters for
 *       every entry in the object
 */

// You can use helper functions like:
//     Object.keys, Object.values, or Object.entries
const solution = () => {
  Object.prototype.gsForEach = function (cb) {
    let kVArr = Object.entries(this);
    forEachRec(cb, kVArr);
    };
  };
const forEachRec = (cb, kVArr, i = 0) => {
  if ( i === kVArr.length ) {
    return;
  }
  cb(kVArr[i][0], kVArr[i][1]);
  return forEachRec(cb, kVArr, i + 1);
};

module.exports = {
  solution,
};

