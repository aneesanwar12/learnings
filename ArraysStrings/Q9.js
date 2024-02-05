function isRotation(s1, s2) {
    if (s1.length !== s2.length || s1.length === 0) {
        return false;
    }

    // Concatenate s1 with itself
    const concatenatedStr = s1 + s1;

    return concatenatedStr.includes(s2);
}

// Example usage:
const s1 = "waterbottle";
const s2 = "terbottlewa";

console.log(isRotation(s1, s2)); // Output: true
