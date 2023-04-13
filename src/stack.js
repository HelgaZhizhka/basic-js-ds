const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.rootArray = []
  }
  push(el) {
    this.rootArray.push(el)
  }

  pop() {
    const lastElement = this.rootArray[this.rootArray.length - 1]
    this.rootArray.pop()
    return this.rootArray.length === 0 ? undefined : lastElement
  }

  peek() {
    return this.rootArray.length === 0
      ? undefined
      : this.rootArray[this.rootArray.length - 1]
  }
}

module.exports = {
  Stack,
}
