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

  // use depth first search to traverse tree and look for node w/ specified data
  // recursively visits each node and checks if currentNode matches target
  // if match found return node 

  findNode(data) {

    // Helper function to perform depth-first search recursive 
    const dfs = (node, target) => {
      if(node.data === target) {
        return node;
      } else {
        for(let child of node.children) {
          const result = dfs(child, target);
          if(result) {
            // Found the node in the child tree
            return result; 
          }
        }
      }
      return null
    };
    return dfs(this.root, data);
  }
}

const nodeA = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");
const nodeG = new TreeNode("G");
const nodeH = new TreeNode("H");

nodeA.children.push(nodeB, nodeC, nodeD);
nodeB.children.push(nodeE);
nodeC.children.push(nodeF);
nodeD.children.push(nodeG);
nodeG.children.push(nodeH);

const tree = new Tree(nodeA);
console.log(tree.findNode("A")); // Output: TreeNode { data: 'A', children: [ [TreeNode], [TreeNode], [TreeNode] ] }
console.log(tree.findNode("G")); 
console.log(tree.findNode("Y")); 


module.exports = { TreeNode, Tree };
