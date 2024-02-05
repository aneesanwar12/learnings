function isPermutation(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};

    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }


    for (const char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return Object.values(charCount).every(count => count === 0);
}


const result1 = isPermutation("abc", "bca");
const result2 = isPermutation("abc", "xyz");
console.log(result1);
console.log(result2);
