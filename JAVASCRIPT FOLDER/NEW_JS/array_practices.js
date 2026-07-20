const armstrongInput = document.getElementById('armstrongInput');
const checkArmstrongBtn = document.getElementById('checkArmstrongBtn');
const armstrongResult = document.getElementById('armstrongResult');
const displayStudentsBtn = document.getElementById('displayStudentsBtn');
const studentsResult = document.getElementById('studentsResult');
const studentsList = document.getElementById('studentsList');
const transposeMatrixBtn = document.getElementById('transposeMatrixBtn');
const matrixResult = document.getElementById('matrixResult');
const showPatternBtn = document.getElementById('showPatternBtn');
const patternResult = document.getElementById('patternResult');

function isArmstrongNumber(number) {
    const digits = number.toString().split('');
    const cubesSum = digits.reduce((sum, digit) => sum + Math.pow(Number(digit), 3), 0);
    return cubesSum === number;
}

function displayStudents() {
    const studentNames = [
        'Judas',
        'Chimebuka',
        'Kontrolla',
        'Naomi',
        'Wisdom',
        'Kamsi',
        'Newman',
        'Henry',
        'Paulinus',
        'Osaroh'
    ];

    const sortedNames = [...studentNames].sort((a, b) => a.localeCompare(b));
    studentsResult.textContent = 'Student names in alphabetical order:';
    studentsList.textContent = sortedNames.map((name, index) => `${index + 1}. ${name}`).join('\n');
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transpose = [];

    for (let col = 0; col < cols; col += 1) {
        transpose[col] = [];
        for (let row = 0; row < rows; row += 1) {
            transpose[col][row] = matrix[row][col];
        }
    }

    return transpose;
}

function renderMatrix(matrix) {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    matrix.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            td.style.border = '1px solid #999';
            td.style.padding = '0.4rem 0.6rem';
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    return table;
}

function buildPattern(lines) {
    let output = '';
    for (let i = 1; i <= lines; i += 1) {
        output += '*'.repeat(2 * i - 1) + (i < lines ? '\n' : '');
    }
    return output;
}

checkArmstrongBtn.addEventListener('click', () => {
    const value = Number(armstrongInput.value);
    if (Number.isNaN(value) || value < 0) {
        armstrongResult.textContent = 'Please enter a valid non-negative number.';
        return;
    }

    armstrongResult.textContent = isArmstrongNumber(value)
        ? `${value} is an Armstrong number.`
        : `${value} is not an Armstrong number.`;
});

displayStudentsBtn.addEventListener('click', displayStudents);

transposeMatrixBtn.addEventListener('click', () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const transpose = transposeMatrix(matrix);
    matrixResult.innerHTML = '';

    const originalTitle = document.createElement('p');
    originalTitle.textContent = 'Original matrix:';
    const originalTable = renderMatrix(matrix);

    const transposeTitle = document.createElement('p');
    transposeTitle.textContent = 'Transposed matrix:';
    const transposeTable = renderMatrix(transpose);

    matrixResult.appendChild(originalTitle);
    matrixResult.appendChild(originalTable);
    matrixResult.appendChild(transposeTitle);
    matrixResult.appendChild(transposeTable);
});

showPatternBtn.addEventListener('click', () => {
    patternResult.textContent = buildPattern(6);
});
