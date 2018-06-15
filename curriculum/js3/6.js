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
  let key = Object.keys(a);
  let value = Object.values(a);
  let flag = false;
  let newObj = {};
  for ( let i = 0; i < key.length; i ++ ) {
    flag = b(key[i], value[i]);
    if ( flag ) {
      newObj[key[i]] = value[i];
    }
  }
  return newObj;
};

module.exports = {
  solution,
};
