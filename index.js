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

    // If the tree is empty (has no root node), it means there are no nodes in the tree, so the method immediately returns null.
    if (this.root === null) {
      return null;
    }
     // If the tree is not empty, the method starts searching from the root node. It compares the data of the current node with the target data. If they match, it means the current node is the one we are looking for, so the method returns that node.
    return this.findNodeRecursive(data, this.root);
  }

  findNodeRecursive(data, currentNode) {
    // If the data of the current node doesn't match the target data, the method checks each child node of the current node. For each child node, it recursively calls itself (the findNode() method) passing in the child node as the new starting point.
    if (currentNode.data === data) {
      return currentNode;
    }
    // The method continues to traverse the tree in a depth-first manner, checking each node and its children recursively. If a matching node is found in any of the child nodes or their descendants, the method stops searching and returns that node.
    for (const child of currentNode.children) {
      const result = this.findNodeRecursive(data, child);
      if (result !== null) {
        return result;
      }
    }
   // If the entire tree is traversed and no node with the desired data is found, the method returns null to indicate that the data is not present in the tree.
    return null;
  }
}

module.exports = { TreeNode, Tree };
