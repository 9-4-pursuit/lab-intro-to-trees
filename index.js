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
    return this.findNodeRecursive(this.root, data)
 }

  findNodeRecursive(node, targetValue) {
    if( node.data === targetValue){
      return node
    }
    for( let child of node.children) {
      const result = this.findNodeRecursive(child, targetValue);
    if( result !== null){
      return result
    }
    }
    return null;
  }
}
module.exports = { TreeNode, Tree };
