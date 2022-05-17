/*
Singly Linked Lists
-Linked list is consist of nodes and each node has value and pointer to the next node or null
-linked list contain head,tail and length
-Linked list has no index so to acccess we have to search from start to access
*/

/*
Linked list
-Do not have indexes
-connected via nodes with a next pointer
-Random access is not allowed
-insertion and deletion is not expensive(we dont have to shift all element to insert or delete like in array) 

Array
-indexes in order
-insertion and delition can be expensive
-can quickly be accessed at a specific index
*/

//piece of data - val
//refrence to the next node - next

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //push at the end
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this
    }
    //pop at the end
    pop()
    {
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--;
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current;
    }
    //remove an node from the beginning
    shift(){
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--;
        if(this.length === 0){
            //if length is 0 that head is already null through our above code
            this.tail = null
        }
        return currentHead;
    }
    //add a node at the begin
    unshift(val)
    {
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return this
    }
    //get node at specified position (0 is head)
    get(pos)
    {
        if(pos < 0 || pos >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter != pos){
            current = current.next
            counter++;
        }
        return current;
    }
    set(index,val)
    {
        let foundNode = this.get(index)
        if(foundNode){
        foundNode.val = val
        return true
        }
        return false
    }
    insert(index,val) 
    {
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)

        let newNode = new Node(val)
        let prev = this.get(index-1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let prevNode = this.get(index - 1)
        let removed = prevNode.next
        prevNode.next = removed.next
        this.length--;
        return removed
    }
    print()
    {
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse()
    { 
       let node = this.head
       this.head = this.tail
       this.tail = node
       let next;
       let prev = null
       for(let i = 0; i<this.length; i++)
       {
           next = node.next
           node.next = prev
           prev = node
           node = next
       }
       return this;
    }
}
var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.push("<3")
list.push(":)")

//Singly Linkedlist
//insertion - o(1) - push it at the end by tail or push it the begin by using head
//removal - it depends... o(1) - to remove first item  or o(N) - to remove last item
//searching - o(N) - we have to traverse whole linked list
//access - o(N)

//array 
//insertion at beginning - o(N)
//removal - o(N)
//access - o(1)

//when to use linked list ? 
//when you dont need an order
//when you need insertion and deletion fast 
