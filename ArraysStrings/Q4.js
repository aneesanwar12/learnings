function isPermutationOfPalindrome(str) {
    const cleanedStr = str.replace(/\s/g, '').toLowerCase();

    const charFrequency = new Map();
    for (const char of cleanedStr) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    let oddCount = 0;
    for (const count of charFrequency.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

console.log(isPermutationOfPalindrome("Tact Coa")); // Output: true
console.log(isPermutationOfPalindrome("abc")); // Output: false
