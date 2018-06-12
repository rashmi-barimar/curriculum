/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (a) {
    let obj = this;
    let newObj = [];
    if ( obj.length === 0 ) {
      return newObj;
    }
    for ( let i = 0; i < obj.length; i ++ ) {
      newObj[i] = a(obj[i]);
    }
    return newObj;
  };
};

module.exports = {
  solution,
};
