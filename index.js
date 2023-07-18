class TreeNode {
  constructor(data = null) {
    this.data = data
    this.children = []
  }
}

class Tree {
  constructor(node) {
    this.root = node
  }

  findNode(data) {
    let queue = [this.root]

    while (queue.length > 0) {
      let currentNode = queue.shift()
      if (currentNode === undefined) continue

      if (currentNode.data === data) {
        console.log('currentNode:', currentNode, 'data:', data)
        return currentNode
      }

      queue.push(...currentNode.children)
    }
    return null
  }
}

module.exports = {TreeNode, Tree}
