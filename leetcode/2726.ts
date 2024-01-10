/**
 * Calculator with Method Chaining
 * https://leetcode.com/problems/calculator-with-method-chaining/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 69ms - Beats 11.80%
 * Memory:  42.78 MB - Beats 59.38%
 */

class Calculator {
  #output: number;

  constructor(value: number) {
    this.#output = value;
  }

  add(value: number): Calculator {
    this.#output += value;

    return this;
  }

  subtract(value: number): Calculator {
    this.#output -= value;

    return this;
  }

  multiply(value: number): Calculator {
    this.#output *= value;

    return this;
  }

  divide(value: number): Calculator {
    if (value === 0) throw "Division by zero is not allowed";

    this.#output /= value;

    return this;
  }

  power(value: number): Calculator {
    this.#output **= value;

    return this;
  }

  getResult(): number {
    return this.#output;
  }
}