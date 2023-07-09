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
    let treeArr = [this.root];

    while (treeArr.length > 0) {
      let currentNode = treeArr.shift();
      if (!currentNode) continue;

      if (currentNode.data === data) return currentNode;

      treeArr.push(...currentNode.children)
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
