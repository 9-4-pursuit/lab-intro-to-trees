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

    let node = [this.root];

    while (node.length > 0) {
      let currentNode = node.shift();
      if (currentNode.data === data) {
        return currentNode;
      } 

      node.push(...currentNode.children);
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
