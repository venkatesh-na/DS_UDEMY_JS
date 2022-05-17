class Node
{
    constructor(val){
        this.val = val
        this.next =null
    }
}

class Stack
{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    //we are using unshift of linked list for stackpush becuase pop of linkedlist takes o(N) time but shift of linked list takes o(1) to remove from beginning so therefore we are using unfift of linked list for push of stack

    //same as unshift of linked list
    push(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        //first increment and then return 
        return ++this.size;
    }
    //same as shift of linkedlist
    pop(){
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
const s = new Stack()

//1 -> 2 -> 3
//f         l
// s.push(0)
//0 -> 1 -> 2 -> 3
// s.push(-1)
//-1 -> 0 -> 1 -> 2 -> 3
// s.pop() //1
//0 -> 1 -> 2 -> 3


/*Big O of stacks
insertion - o(1)
removal - o(1)
seraching - o(N)
accessing - o(N)
*/