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
    if (this.root.data === data) return this.root;

    return null;
  }
}

module.exports = { TreeNode, Tree };
