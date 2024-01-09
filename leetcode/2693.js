/**
 * Call Function with Custom Context
 * https://leetcode.com/problems/call-function-with-custom-context/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 60ms - Beats 25.15%
 * Memory:  41.90 - Beats 82.12%
 */

Function.prototype.callPolyfill = function(context, ...args) {
  const contextID = Symbol();

  context[contextID] = this;

  const returnValue = context[contextID](...args);

  delete context[contextID];

  return returnValue;
};

const test0 = () => {
  function add(b) {
    return this.a + b;
  }

  const output = add.callPolyfill({ a: 5 }, 7);
  
  console.assert(output === 12, `Failed, got ${output}`);
};

const test1 = () => {
  function tax(price, taxRate) {
    return `The cost of the ${this.item} is ${price * taxRate}`;
  }

  const output = tax.callPolyfill({ item: 'burger' }, 10, 1.1);

  console.assert(output === 'The cost of the burger is 11', `Failed, got ${output}`)
}

test0();
