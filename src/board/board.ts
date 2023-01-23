// Time: O(n^2), Space: O(n)

function isValidDigit(currentVal: string) {
    return currentVal !== '.';
}

function isValidSudoku(board: string[][]): boolean {
    const NUMBER_CELLS = 9;
    let rows = Array.from({length: NUMBER_CELLS}, () => new Set());
    let cols = Array.from({length: NUMBER_CELLS}, () => new Set());

    // There are 9 boxes, because in a 2d array with 9 x 9, we can fit 9 sub boxes with size 3 x 3.
    // Or, in other way of thinking: 9 (rows) * 9 (columns) = 81. 81 (cells). 81 divided by sub box size (9) = 81 / 9 = 9.
    let subBoxes = Array.from({length: NUMBER_CELLS}, () => new Set());

    for (let rowIndex = 0; rowIndex < NUMBER_CELLS; rowIndex++) {
        for (let columnIndex = 0; columnIndex < NUMBER_CELLS; columnIndex++) {
            let cellValue = board[rowIndex][columnIndex];

            if (!isValidDigit(cellValue)) {
                continue;
            }

            let boxIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(columnIndex / 3);

            if (rows[rowIndex].has(cellValue) || cols[columnIndex].has(cellValue) || subBoxes[boxIndex].has(cellValue)) {
                return false;
            } else {
                rows[rowIndex].add(cellValue);
                cols[columnIndex].add(cellValue);
                subBoxes[boxIndex].add(cellValue);
            }
        }
    }

    return true;
}


const validBoard1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];


const validBoard2 = [
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]
];

const validBoard3 = [
    ["2","4","7",".",".",".",".",".","."],
    ["1","3","6",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".","7",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]
];

const invalidBoard1 = [
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"]
];

const invalidBoard2 = [
    ["5","3",".",".","7",".",".",".","."],
    ["5",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

const invalidBoard3 = [
    ["5","3",".",".","7",".",".",".","."],
    [".",".","3","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]


console.log(`valid board 1 - ${isValidSudoku(validBoard1)}`);
console.log(`valid board 2 - ${isValidSudoku(validBoard2)}`);
console.log(`valid board 3 - ${isValidSudoku(validBoard3)}`);
console.log(`invalid board 1 - ${isValidSudoku(invalidBoard1)}`);
console.log(`invalid board 2 - ${isValidSudoku(invalidBoard2)}`);
console.log(`invalid board 3 - ${isValidSudoku(invalidBoard3)}`);
