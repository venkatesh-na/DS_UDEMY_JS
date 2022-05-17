/*
Binary Heaps
Heap is one type of tree
there are many type of heaps where binary heap is one of them

*in heap a node can have at most 2 child node ,same as bst  
*in heap there is no relationship between sibling like in bst
Two type of binaryHeap(there are more than 2)
-MaxBinaryHeap - parent node are always larger than child nodes
-MinBinaryHeap - parent node are always smaller than child nodes

MaxBinaryHeap example :
             41
        39          33 //-it is not neccesary its has to be next largest
    18      27   12
    //41 is larger than 39 and 41
    //39 is larger than 18 and 27 etc

why do we need to know binary heap ?
-binary heap are used to implement priority queues, which are very commonly used ds
-binary heap used in graph traverse algorithm

in MaxBinaryHeap if we want to find the 1stchild of parent - 2n + 1
in MaxBinaryHeap if we want to find the 2ndchild of parent - 2n + 2
in MaxBinaryHeap if we want to find the parent of any child - (n-1)/2
in MaxBinaryHeap the larger element bubbled up to its correct position

100 23 45  3  42
0   1   2  3  4 -- indices
//find second child of 23(index 1)
//2(1) + 2 = 4(index) - 42 is second child of 23 


*/

class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12]
    }
    insert(val){
      this.values.push(val)
      this.bubbleUp()
    }
    /*
         41                                    41                                    (55)
    39        33         55 > 33 yes      39         (55)      55 > 41 yes     39          41     
18      27  12   (55)                  18    27   12     33                  18   27    12     33 
[41,39,33,18,27,12,55]                 [41,39,55,,18,27,12,33]            [55,39,41,18,27,12,33]
       pa           e                   pa     e                            
    */
    bubbleUp(){
        let idx = this.values.length-1
        let element = this.values[idx] 
        while(idx > 0){ //to avoid negative indexing
            let parentidx = Math.floor((idx-1)/2)
            let parent = this.values[parentidx] 
            if(element <= parent) break;
            this.values[parentidx] = element
            this.values[idx] = parent
            idx = parentidx 
        }
    }
    //remove node(extractmax)
    extractMax(){
        /*
        -Remove the root
        -Replace with most recently added
        -adjust(sink down)
                     41-pop              12                            39                         39
                39       33         39        33   39 > 12         12      33    18 > 12      27      33
            18     27  12-swap   18    27          39 > 33      18    27         27 > 18   18   12    
        */
       let max = this.values[0]
       let end = this.values.pop()
       if(this.values.length > 0){
       this.values[0] = end
       this.sinkDown()
       }
       return max
    }
    sinkDown(){
        let idx = 0
        const length = this.values.length;
        const element = this.values[0]
        while(true){
            let leftChildidx = 2 * idx + 1
            let rightChildidx = 2 * idx + 2
            let leftChild,rightChild;
            let swap = null; //swap for comparing is leftChild is greater or rightChild is greater
            if(leftChildidx < length){ //checking is the leftchild exists or not
                leftChild = this.values[leftChildidx]
                if(leftChild > element){
                    swap = leftChildidx
                }
            }
            if(rightChildidx < length){ //checking is the rightchild exists or not
                rightChild = this.values[rightChild]
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                )
                {
                    swap = rightChild
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

}
const bh = new MaxBinaryHeap()

/*
time complexity
insertion - o(logn)
removal - o(logn)
searching - o(n)

//insertion and removal
[100,19,36,17,12,25,5,9,15,6,11,13,8,1,4] 
//if size 16 than 4 comparision   2^4 = 16 o(logn)
//if size 32 than 5 comparision   2^5 = 32 o(logn) 
//insert 200
[100,19,36,17,12,25,5,9,15,6,11,13,8,1,4,(200)]
- 1) (16-1)/2 = 7  200 > 9
[100,19,36,17,12,25,5,(200),15,6,11,13,8,1,4,9]
- 2) (7-1)/2 = 3   200 > 17
[100,19,36,(200),12,25,5,17,15,6,11,13,8,1,4,9]
- 3) (3-1)/2 = 1   200 > 19 
[100,(200),36,19,12,25,5,17,15,6,11,13,8,1,4,9]
- 4) (1-1)/2 = 0   200 > 100
[200,100,36,19,12,25,5,17,15,6,11,13,8,1,4,9]

in binary search tree there is tree where the insertion and removal take o(n)
1
  2
    3
      4 
        5
but in heap it cant be possible becuase it always fills up the space and becuase of that the removal and insertion take o(logn) time
[5,3,4,1,2]
        5
    3       4
  1    2  

  in heap we cant optimize searching becuase there is nothing like left of parent is less than parent its random in heap

*/