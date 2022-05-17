//Doubly Linked List
//pop - o(1)
//reverse an doubly linked list is easier
//doubly linked list take more memory than singly linked list but more memory ,more flexibility
//doubly linked list is two directional means node is point to its prev node and also points to its next node

/*Node
-val
-next
-prev
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

/*Doubly Linked list
-head
-tail
-length
*/

class doublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length  = 0
    }
    push(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++;
        return this;
    }  
    pop()
    {
        //use !this.head or !this.tail or this.length === 0 all are same condition
        if(!this.head) return undefined
        let poppedNode = this.tail
        if(this.length == 1){
            this.head = null
            this.tail = null
            this.length--;
        }
        else{
           this.tail = poppedNode.prev;
           this.tail.next = null
           poppedNode.prev = null//if we dont do this that means we still can able access list by poppedNode.prev.prev...
        }
        this.length--;
        return poppedNode;
    } 
    //shift in dll and sll is the same thing
    shift()
    {
        if(!this.head) return undefined
        let oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } 
        else{
        this.head = oldHead.next
        this.head.prev = null
        oldHead.next = null
        }
        this.length--;
        return oldHead;
    }
    unshift(val)
    {
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = this.head
        } else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let current;
        let counter;
        if(index <= this.length/2){
            current = this.head
            counter = 0
            while(counter != index){
                current = current.next
                counter++;
            }
        } else { 
            current = this.tail
            counter = this.length-1
            while(counter != index){
                current = current.prev
                counter--;
            }
        }
        return current; 
    }
    set(index,val){
        let foundNode = this.get(index)
        if(foundNode != null){
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index,val){  
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)

        let newNode = new Node(val)
        let prevNode = this.get(index-1)
        let nextNode = prevNode.next 
        
        prevNode.next = newNode ,newNode.prev = prevNode 
        newNode.next = nextNode, nextNode.prev = newNode
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        let removedNode = this.get(index)
        let beforeNode = removedNode.prev
        let afterNode = removedNode.next
        beforeNode.next = afterNode, afterNode.prev = beforeNode
        // removedNode.prev.next = removedNode.next
        // removedNode.next.prev = removedNode.prev
        //we have to removed the next and prev of removed node otherwise a user can access elements that are linked to removednode before
        removedNode.next = null
        removedNode.prev = null
        this.length--;
        return removedNode;
    }
}

const list = new doublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)


//Big of doubbly linked lists
//insertion - o(1) - push or unshift
//removal - o(1) - becuase of prev we can do deletion in o(1) but it is o(N) in sll
//searching - o(N/2)  - o(N) in sll 
//access - o(N)
//techincally searching is o(N/2) but thats still o(n)
//10 - if we need index 2 than we do 10/2 = 5 2 < 5 so we start from 0 and increase
//10 - if we need index 7 than we do 10/2 = 5 7 > 5 so we start from 10 and decrease
//browser history is an application of dll









