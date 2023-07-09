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
    let breadthFirstSearchArray = [this.root];
    while (breadthFirstSearchArray.length > 0) {
      if (breadthFirstSearchArray[0].data === data) {
        return breadthFirstSearchArray[0]
      } else {
        breadthFirstSearchArray = [...breadthFirstSearchArray, ...breadthFirstSearchArray[0].children]
        breadthFirstSearchArray.shift();
      }
    }
    return null;
    // while

  }
}

module.exports = { TreeNode, Tree };
