/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

const solution = () => {
  Array.prototype.gsForEach = function(cb, i = 0) {
    if ( i === this.length ) {
      return;
    }
    cb( this[i], i, this );
    return this.gsForEach(cb, i + 1);
  };
};

module.exports = {
  solution,
};
