//queue - FIFO
/*
how do we use them in programming
-Background taks -> if we have put 3 file of same size for downloading than the first file added will be downloads first
-uploading resources
-printing/Task processing - a printer can print 1 papaer at a time the first thing added will be first to print and so on 
*/

//two operation performed in queue 
//1) enqueue -(insert)
//2) dequeue - (remove)

//way of implementing queue array(2ways) and linkedlist
//in array
//1
let queue = []
queue.push(1)
queue.push(2)
queue.shift() //1

//2
queue = []
queue.unshift(1)
queue.unshift(2)
queue.pop() //1
//in array there is reindexing and o(N) timecomplexity for operation like shift and unshift so we use linked list

//linked implementation of queue
//two way 
//1) unshift o(1) and pop o(N)
//2) push o(1) and shift o(1) - better way as the time complexity is o(1) for enqueue and dequeue

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
        if(!this.first) return null
        let temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--;
        return temp.val
    }
}
let q = new Queue() 

/*Big of queue
insertion - o(1)
removal - o(1)
searching - o(N)
access - o(N)
*/











