// The first approach with additional data structures is generally more efficient as it has a time complexity of O(n), where n is the length of the string. The second approach without additional data structures has a time complexity of O(n^2), which is less efficient.

function hasUniqueChars(str) {
    const charSet = new Set();
    for (const char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}


const result1 = hasUniqueChars("abcdefg");
console.log(result1, 1); // Output: true

const result2 = hasUniqueChars("hello");
console.log(result2, 2); // Output: false



//Without Additional Data Structures
function hasUniqueCharsNoDS(str) {
    const n = str.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

// Example usage:
const result3 = hasUniqueCharsNoDS("abcdefg");
console.log(result3, 3); // Output: true

const result4 = hasUniqueCharsNoDS("hello");
console.log(result4, 4); // Output: false


