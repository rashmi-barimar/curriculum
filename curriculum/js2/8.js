/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (callback, i = 0, newObj = []) {
  if ( this.length === 0 ) {
    return newObj;
  }
  if ( i === this.length ) {
    return newObj;
  }
  newObj[i] = callback(this[i]);
  return this.gsMap(callback, i + 1, newObj);
  };
};

module.exports = {
  solution,
};
