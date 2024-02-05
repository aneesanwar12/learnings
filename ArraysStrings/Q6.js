function compressString(string) {
    let compressedStr = '';
    let count = 1;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++;
        } else {
            compressedStr += string[i] + count;
            count = 1;
        }
    }


    return compressedStr.length < str.length ? compressedStr : str;
}


console.log(compressString("aabcccccaaa"));
console.log(compressString("abcd"));
console.log(compressString("aaabb"));
