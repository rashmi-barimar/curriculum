/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a, b)=>{
  let value = [];
  let key = [];
  value = Object.values(a);
  key = Object.keys(a);
  callFuncb(key, value, b);
};
const callFuncb = (key, value, b, i = 0) => {
  if ( i === key.length ) {
    return;
  }
  b(key[i], value[i]);
  return callFuncb(key, value, b, i + 1 );
};
module.exports = {
  solution
}
