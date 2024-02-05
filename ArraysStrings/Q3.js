function URLify(str, trueLength) {

    let spaceCount = 0;
    for (let i = 0; i < trueLength; i++) {
        if (str[i] === ' ') {
            spaceCount++;
        }
    }


    const newLength = trueLength + spaceCount * 2;


    for (let i = trueLength - 1, j = newLength - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            str[j] = '0';
            str[j - 1] = '2';
            str[j - 2] = '%';
            j -= 3;
        } else {
            str[j] = str[i];
            j--;
        }
    }

    return str.join('');
}

// Example usage:
const input = "Mr John Smith    ";
const trueLength = 13;

const result = URLify([...input], trueLength);
console.log(result);