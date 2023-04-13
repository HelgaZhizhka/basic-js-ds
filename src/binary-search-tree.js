const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
    this.length = 0
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const node = new Node(data)
    if (!this.rootNode) {
      this.rootNode = node
    } else {
      let currentNode = this.rootNode
      while (true) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node
            break
          } else {
            currentNode = currentNode.left
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = node
            break
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
}
