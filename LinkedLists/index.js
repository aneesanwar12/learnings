//The linked list is a data structure where elements are connected in a linear sequence, and each node points to the next one.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtFront(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    deleteByIndex(index) {
        if (index < 0 || index >= this.size) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let prev = null;

            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }

            prev.next = current.next;
        }

        this.size--;
    }

    insertAtIndex(index, data) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.insertAtFront(data);
        } else {
            const newNode = new Node(data);
            let current = this.head;
            let prev = null;

            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }

            newNode.next = current;
            prev.next = newNode;
            this.size++;
        }
    }

    findByValue(value) {
        let current = this.head;

        while (current) {
            if (current.data === value) {
                return current;
            }
            current = current.next;
        }

        return null;
    }
}

const linkedList = new LinkedList()
//inserting the node at the end of linkedlist
linkedList.insertAtEnd(2)

//inserting the node at front of linkedlist
linkedList.insertAtFront(3)

//inserting the node at specific index of linkedlist
linkedList.insertAtIndex(1, 4)
console.log(linkedList)

//deleting the node at specific index of linkedlist
linkedList.deleteByIndex(1)
console.log(linkedList)

// length of linkedlist
console.log(linkedList.size)

//finding the node using data
console.log(linkedList.findByValue(2))