/*
Priority Queue - a ds where each element ha a apriority. Elements with higher priority are served before elements with lower priorities

we can build priority queue with array or linked list but its slow 
//building priority queue with
-array - take o(n) [p2,p1,p4,p3] - we got p1 at index1 but still we have to loopthrogh  whole index
-heap - take o(log n)
*in heap insertion and removal both o(logn)

//priority queue is used in operating system for selectiong the next process to run, ensuring higher priority task run before lower priority task
*/

class Node{
    constructor(val,priority){
        this.val = val
        this.priority = priority
    }
}


class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqeue(val,priority){
        let newNode = new Node(val,priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp(){
         let idx = this.values.length-1
        let element = this.values[idx]
        while(idx > 0){
            let parentidx = Math.floor((idx - 1)/2)
            let parent = this.values[parentidx]
            if(element.priority >= parent.priority) break;
            this.values[parentidx] = element
            this.values[idx] = parent
            idx = parentidx
        }
        return this;
    }
    dequeue(){
        let min = this.values[0]//8
        let end = this.values.pop()//2
        if(this.values.length > 0){
            this.values[0] = end
            this.sinkDown()
        }
        return min;
    }
    sinkDown(){
        let idx = 0
        let length = this.values.length
        let element = this.values[0]//2 
        while(true){
            let firstChildidx = 2*idx+1
            let secondChildidx = 2*idx+2
            let firstChild,secondChild;
            let swap = null
            if(firstChildidx < length){
                firstChild = this.values[firstChildidx]
                if(firstChild.priority < element.priority){
                    swap = firstChildidx
                }
            }
            if(secondChildidx < length){
                secondChild = this.values[secondChildidx]
                if((swap === null && secondChild.priority < element.priority) || 
                (swap !== null && secondChild.priority < firstChild.priority)){
                    swap = secondChildidx
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}
const pq = new PriorityQueue()
pq.enqeue("common cold",5)
pq.enqeue("gunshot wound",1)
pq.enqeue("high fewer",4)
pq.enqeue("broken arm",2)
pq.enqeue("glass in foot",3)



//if there are same priority than it will not gonna work as if suppose the first inserted will be first removed "no" becuase the siblings are not related to each other so to avoid than you can use timer with prority 
/*
pq
PriorityQueue {values: Array(5)}values: Array(5)0: Node {val: 'gunshot wound', priority: 1}1: Node {val: 'broken arm', priority: 2}2: Node {val: 'high fewer', priority: 4}3: Node {val: 'common cold', priority: 5}4: Node {val: 'glass in foot', priority: 3}length: 5[[Prototype]]: Array(0)[[Prototype]]: Object
pq.dequeue()
Node {val: 'gunshot wound', priority: 1}
pq.dequeue()
Node {val: 'broken arm', priority: 2}
pq.dequeue()
Node {val: 'glass in foot', priority: 3}
pq.dequeue()
Node {val: 'high fewer', priority: 4}
pq.dequeue()
Node {val: 'common cold', priority: 5}
*/