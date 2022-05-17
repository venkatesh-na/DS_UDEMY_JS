//Stack - LIFO DATA STRUCTURE
//LIFO - last in first out

/*where stacks are used
-Managing function invocations(chrome cal stack)
-undo/redo(undo the recending update like in photoshop)
-Routing(the history object) is treated like a stack
*/

//stack is implemented by array(2 ways) and likedlist

//stack implementation form array push and pop - suggested to use this becuase push and pop in o(1) time complexity but array implementation is sorted and easier
let stack = []
stack.push(1) //adds at the end
stack.push(2) //last element to be pushed
stack.pop() //2

//stack implementation form array shift and unshift - suggested to not to use this becuase shift and unshift both take o(N) time complexity
stack = [3,4]
stack.unshift(2)
stack.unshift(1) //last element to be added at end
stack.shift() //1

//suggested also to use linked list rather than arrays becuase array comes with dozens of build in method and also comes with indices and we dont want that extra weightege , we just need two method push and pop so we can make our own be linked list




