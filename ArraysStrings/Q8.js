function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const zeroRows = new Array(rows).fill(false);
    const zeroCols = new Array(cols).fill(false);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows[i] = true;
                zeroCols[j] = true;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        if (zeroRows[i]) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 0; j < cols; j++) {
        if (zeroCols[j]) {
            for (let i = 0; i < rows; i++) {
                matrix[i][j] = 0;
            }
        }
    }
}


const exampleMatrix = [
    [1, 0, 3],
    [4, 1, 1],
    [1, 8, 9]
];

setZeroes(exampleMatrix);

console.log(exampleMatrix);
