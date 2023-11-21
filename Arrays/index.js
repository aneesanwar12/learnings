class CustomArray {
    constructor() {
        this.arr = [];
        this.length = 0;
    }

    push(item) {
        this.arr[this.length] = item;
        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            console.log('Index out of bounds');
        } else {
            for (let i = index; i < this.length - 1; i++) {
                this.arr[i] = this.arr[i + 1];
            }

            delete this.arr[this.length - 1];
            this.length--;
        }
    }

    find(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] === item) {
                return i;
            }
        }

        return -1;
    }

    getLength() {
        return this.length;
    }
}

// Example usage
const customArr = new CustomArray();
customArr.push(10);
customArr.push(20);
customArr.push(30);
console.log(customArr.arr);

customArr.removeAt(5);

console.log(customArr.find(30));

console.log(customArr.getLength());
