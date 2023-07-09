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
    let searchNodes = [this.root];

    while (searchNodes.length > 0) {
      let currentNode = searchNodes.shift(); //take the first node from array
      if (currentNode.data === data) {
        return currentNode; // finds node with data given, return this!
      } 
      //what about the children?
   
  }
    return null;
  }
}

module.exports = { TreeNode, Tree };
