// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLLNode { 
    constructor(val) {
        this.value = val; 
        this.next = null; 
    }
}

class SLL { 
    constructor() { 
        this.head = null;
    }
    front() {
        
        if (this.head == null) {
            return null;
        } else { 
            return this.head.value;
        }
    }
    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head; 
        this.head = newNode; 
        return this.head; 
    }
    removeFront() {
        if (this.head == null) { 
            return this.head;
        }
        var removedHeadNode = this.head; 
        this.head = removedHeadNode.next; 
        removedHeadNode.next = null;
        return this.head;
    }

}
//ADD TO FRONT:
// var mySLL = new SLL();
// mySLL.addFront(39);
// mySLL.addFront(24);
// mySLL.addFront(17);
// console.log(mySLL);
// console.log(mySLL.head.next)//this will print the second node

//REMOVE FROM FRONT:
// var mySLL = new SLL();
// mySLL.addFront(39);
// mySLL.addFront(24);
// mySLL.addFront(23);
// console.log(mySLL);
// mySLL.removeFront();
// console.log(mySLL);

//FRONT:
// var mySLL = new SLL();
// console.log(mySLL.front());
// mySLL.addFront(40);
// console.log(mySLL.front());
// mySLL.addFront(12);
// mySLL.addFront(18);
// mySLL.removeFront();
// console.log(mySLL);

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    // removeFront() {
    //     if (this.head == null) { 
    //         return this.head;
    //     }
    //     var removedHeadNode = this.head; 
    //     this.head = removedHeadNode.next; 
    //     removedHeadNode.next = null;
    //     return this.head;
    // }   


    // Front
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    
    // front() {
        
    //     if (this.head == null) {
    //         return null;
    //     } else { 
    //         return this.head.value;
    //     }
    // }



