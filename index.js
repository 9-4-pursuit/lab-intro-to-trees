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

      
    }


    // while ([this.root]) {
    //   if ([this.root].data === data) {
    //     break;
    //   }
    //   parent = [this.root];
    //   [this.root] = (data > [this.root].data) ? [this.root].right : [this.root].left
    // }

    // return { found: [this.root], parent}
  

    


  }
}

module.exports = { TreeNode, Tree };
