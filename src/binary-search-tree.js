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
        if (currentNode.data === data) {
          return node
        }
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node
            return node
          } else {
            currentNode = currentNode.left
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = node
            return node
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    let currentNode = this.rootNode
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode
      }
      currentNode =
        data < currentNode.data ? currentNode.left : currentNode.right
    }
    return null
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data)
  }

  removeNode(node, data) {
    if (!node) {
      return null
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
    } else {
      if (!node.left && !node.right) {
        return null
      }

      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data

        node.right = this.removeNode(node.right, minRight.data)

        return node
      }
    }
  }

  min() {
    let currentNode = this.rootNode
    while (currentNode && currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode ? currentNode.data : null
  }

  max() {
    let currentNode = this.rootNode
    while (currentNode && currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode ? currentNode.data : null
  }
}

module.exports = {
  BinarySearchTree,
}
