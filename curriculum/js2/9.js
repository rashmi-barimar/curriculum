/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (cb, a, i=0) {
    if ( i === this.length ) {
      return a;
    }
    a = cb(a, this[i], i, this);
    return this.gsReduce(cb, a, i+1);
  };
};

module.exports = {
  solution,
};
