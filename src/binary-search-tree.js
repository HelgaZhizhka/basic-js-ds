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
    const addNode = (currentNode, newNode) => {
      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode
        } else {
          addNode(currentNode.left, newNode)
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
        } else {
          addNode(currentNode.right, newNode)
        }
      }
    }
    if (this.rootNode === null) {
      this.rootNode = node
    } else {
      addNode(this.rootNode, node)
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    const findNode = (node, value) => {
      if (!node) {
        return null
      }
      if (value < node.data) {
        return findNode(node.left, value)
      } else if (value > node.data) {
        return findNode(node.right, value)
      } else {
        return node
      }
    }
    return findNode(this.rootNode, data)
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
      // node without children 
      if (node.left === null && node.right === null) {
        return null
      }
      //node with one children
      if (node.left === null) {
        return node.right
      } else if (node.right === null) {
        return node.left
      }
      //node with two children
      const minNode = this.findMinNode(node.right)
      node.data = minNode.data
      node.right = this.removeNode(node.right, minNode.data)
      return node
    }
  }

  findMaxNode(node) {
    if (!node) {
      return null
    }
    if (node.right) {
      return this.findMaxNode(node.right)
    }
    return node
  }

  findMinNode(node) {
    if (!node) {
      return null
    }
    if (node.left === null) {
      return node
    } else {
      return this.findMinNode(node.left)
    }
  }

  // removeNode(node, data) {
  //   if (!node) {
  //     return null
  //   }
  //   if (data < node.data) {
  //     node.left = this.removeNode(node.left, data)
  //     return node
  //   } else if (data > node.data) {
  //     node.right = this.removeNode(node.right, data)
  //     return node
  //   } else {
  //     if (!node.left && !node.right) {
  //       return null
  //     }
  //     if (!node.left) {
  //       return node.right
  //     } else if (!node.right) {
  //       return node.left
  //     } else {
  //       let minRight = node.right
  //       while (minRight.left) {
  //         minRight = minRight.left
  //       }
  //       node.data = minRight.data
  //       node.right = this.removeNode(node.right, minRight.data)
  //       return node
  //     }
  //   }
  // }

  min() {
    if (this.rootNode === null) {
      return null
    }
    const minNode = this.findMinNode(this.rootNode)
    return minNode.data
  }

  max() {
    if (this.rootNode === null) {
      return null
    }
    const maxNode = this.findMaxNode(this.rootNode)
    return maxNode.data
  }
}

module.exports = {
  BinarySearchTree,
}
