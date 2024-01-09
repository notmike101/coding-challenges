/**
 * To Be Or Not To Be
 * https://leetcode.com/problems/to-be-or-not-to-be/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 56ms - Beats 54.47%
 * Memory:  42.45MB - Beats 82.95%
 */

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

const expect = (val: any): ToBeOrNotToBe => ({
  toBe(input): boolean {
    if (val === input) {
      return true;
    }

    throw 'Not Equal';
  },
  notToBe(input): boolean {
    if (val !== input) {
      return true;
    }

    throw 'Equal';
  }
});

const test0 = () => {
  let output: any;
  
  output = (() => {
    try {
      return expect(5).toBe(5);
    } catch (err) {
      return err;
    }
  })();

  console.assert(output === true, `Expected true, got ${output}`);
  
  output = (() => {
    try {
      return expect(5).notToBe(5);
    } catch (err) {
      return err;
    }
  })();

  console.assert(output === 'Equal', `Expected Equal, got ${output}`);
};

test0();
