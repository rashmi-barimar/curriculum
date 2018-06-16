/*
 * findNum - Takes in the root node of a tree and
 *     a number, return a node with the same value
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.children = [b,c]
 *    solution(a, 3);
 * output: b
 * @param {object} node
 * @returns {object}
*/

// Hint: BFS or DFS from the teaching doc
const solution = (node, num, c=[]) => {
  if ( !node ) {
    return;
  }
  if ( node.v === num ) {
    return node;
  }
  c = c.concat(node.children || []);
  return solution(c.shift(), num, c);
};

module.exports = {
  solution,
};


