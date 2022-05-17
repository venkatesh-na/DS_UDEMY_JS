class Node
{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val)
        if(this.root === null){
            this.root = newNode
            return this;
        }
        let current = this.root
        while(true){
            if(val === current.value) return undefined
            if(val < current.value){
                if(current.left === null){
                    current.left = newNode
                    return this;
                }
                current = current.left
            } else if(val > current.value){
                if(current.right === null){
                    current.right = newNode
                    return this;
                }
                current = current.right
            }
        }
    }

    //     10
    //  6       17
   //3     7  15    19
    find(val){
        if(this.root === null) return undefined
        let current = this.root,
            found = false
        while(current && !found){
            if(val < current.value) current = current.left
            else if(val > current.value) current = current.right
            else found = true
        }
        if(!found) return undefined
        return current;
    }
    contains(val){
        if(!this.root) return false
        let current = this.root
        while(current){
            if(val < current.value) current = current.left
            else if(val > current.value) current = current.right
            else return true
        }
        return false;
    }
    //for bfs tree traversal we use queue always whethe rit is binary or ternary
    bfs(){
       let queue = [this.root],
           data = [],
           dequeu; 
       while(queue.length){
           dequeu = queue.shift()
           data.push(dequeu.value)
           if(dequeu.left) queue.push(dequeu.left)
           if(dequeu.right !== null) queue.push(dequeu.right)
       }
       return data
    }
//         10 
//       /   \
//     5       13 
//    / \     /  \
//   2   7   11    16
    DFSPreOrder(){
        let data = []
        let current = this.root
        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data;
    }
    DFSPostOrder(){
        let data = []
        let current = this.root
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data;
    }
    DFSInorder(){
        let data = []
        function traverse(node){
            node.left && traverse(node.left)
            data.push(node.value)
            node.right && traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
    //time coplexity of BFS and DFS is the same
    //space complexity of DFS and BFS depends
    //tree is wide - BFS will take up a lot of space for storing nodes in queue
    //tree is deep and long - DFS will endup taking up lot of space
    
    //DFS
    //  -inorder - the data that you get by inorder is sorted
    //  -preorder - the data that we get is in a order where we can recreate a tree
    //         10 
    //       /   \
    //     5       13 
    //    / \     /  \
    //   2   7   11    16
    //inorder - [2,5,7,10,11,13,16]
    //preorder - [10,5,2,7,13,11,16]
    
}


const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(11)
bst.insert(2)
bst.insert(16)
bst.insert(7)
bst.DFSPreOrder()


/*
BIG o of bst
insertion - o(log n)
searching - o(log n)
NOT guaranteed

if tree is bst and if no of node doubles we only increase the step by 1
eg :
no of node 7 
      10
  6        17
3     7  15    19
insert 20 -  need 3 step to insert 20

no of node 15
            10
      6              17
   3      7      15      19
2     4 5   8 14    16 18   20
insert 21 - need 4 step to insert 21to nsert at right most end

no of node 31
will need 5 step 

not garenteed becuase below is a valid BST and to insert 8 we have o(N) time complexity
1 - root
  2 
    3 
       5
         6
           7


*/

/*
Tree - data structure that consist of nodes in a parent/child relationship
list - linear
trees - non-linear

1)the arrow must always points downword
2)the node can only point to its child it cannot points to its sibling or its parent
3)there must be only one root

        10 - root
      /   \-> edge
    7       15  -> 7 and 15 are sibling becuase they both have same parent
   / \     /  \
  3   8    14    16  -> 3,8,14,16 are leaf becuase they dont have children
3,8 are sibling for parent 7
3,8 is child relative to its parent 7 etc.



Tree applicaton
-HTML DOM
-Network Routing
-abstract syntax tree (like pseudo code)
-AI
-folrders in operating system(like DSA_UDEMY_JS have more than 11 foldrer which are childrens and than children have many folder)
-JSON object



KINDS OF TREES
-TREES - (each node can have n no of child)
-BINARY TREES - (each node can have at most 2 children (0,1,2))
-BINARY SEARCH TREES - (at most 2 children per node and every no greater than parent is located at right and every node less than parent is located at left)



why bst ? 
-easier to search
-easier to insert

Two way of traversing a tree
-Breath-first-search - (horizontal traverse) - use queue to implement bfs
-Depth-first-search - (vertical traverse) - use recurson to implement dfs
    -inorder(left,root,right)
    -preorder(root,left,right)
    -postorder(left,right,root)
*/
