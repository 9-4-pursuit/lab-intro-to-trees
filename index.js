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
    let tree = [this.root];

    while (tree.length > 0) {
      let currentNode = tree.shift();
      if (!currentNode) continue;

      if (currentNode.data === data) return currentNode;

      tree.push(...currentNode.children)
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
