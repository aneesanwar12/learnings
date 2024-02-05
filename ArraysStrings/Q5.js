function isOneEditAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    let edits = 0;
    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length) {
        if (str1.charAt(i) !== str2.charAt(j)) {
            edits++;
            if (edits > 1) {
                return false;
            }

            if (str1.length > str2.length) {
                i++;
            } else if (str1.length < str2.length) {
                j++;
            } else {
                i++;
                j++;
            }
        } else {
            i++;
            j++;
        }
    }

    if (i < str1.length || j < str2.length) {
        edits++;
    }

    return edits <= 1;
}


console.log(isOneEditAway("pale", "pale"));   // Output: true
console.log(isOneEditAway("pales", "pales")); // Output: true
console.log(isOneEditAway("pale", "bale"));  // Output: true
console.log(isOneEditAway("pale", "lale"));  // Output: false
