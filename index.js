class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    let queue = [this.root];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode === null) continue;

      if (currentNode.data === data) {
        return currentNode;
      }

      queue.push(...currentNode.children);
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
