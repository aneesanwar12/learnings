//Stack is a data structure that follows the Last In, First Out (LIFO) principle. It means that the last element added is the first one to be removed. Stack can be implement using arrays.


class CustomStack {
    constructor() {
        this.stack = []
        this.length = 0
    }

    push(item) {
        this.stack[this.length] = item
        this.length++
    }
    pop() {
        if (this.length < 1) {
            return undefined
        } else {
            const poppedElement = this.stack[this.length - 1]
            delete this.stack[this.length - 1]
            this.length--
            return poppedElement
        }
    }
    peek() {
        return this.length < 1 ? undefined : this.stack[this.length - 1]
    }
    find(item) {
        for (let i = 0; i < this.length; i++) {
            if (item === this.stack[i]) {
                return i
            }
        }
        return -1
    }
    isEmpty() {
        return this.length === 0
    }
    clear() {
        this.stack = []
    }
    getLength() {
        return this.length
    }
}

const customStack = new CustomStack();
// push items to stack
customStack.push(10);
customStack.push(20);
customStack.push(30);
customStack.push(40);

// stack with values
console.log(customStack.stack);

//remove last value from stack
console.log(customStack.pop())

// get the item at the top of the stack
console.log(customStack.peek());

// find the index of the item
console.log(customStack.find(20));

// get length of the stack
console.log(customStack.getLength());

// check whether stack is empty or not
console.log(customStack.isEmpty())

//clear the stack
customStack.clear()

console.log(customStack.stack)

