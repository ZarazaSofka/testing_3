const matrixA = document.getElementById('matrixA');
const matrixB = document.getElementById('matrixB');
const matrixC = document.getElementById('resultMatrix');

document.getElementById("executeButton").addEventListener("click", execute);

document.querySelectorAll('.buttonSize').forEach(function(button) {
    button.addEventListener('click', () => {
    const matrixContainer = button.closest(".matrix-container");
    const matrix = matrixContainer.querySelector(".matrix");
    const rowsNumb = matrixContainer.querySelector(".matrixRows").value;
    const colsNumb = matrixContainer.querySelector(".matrixCols").value;
    createMatrixInputs(matrix, rowsNumb, colsNumb)
    });
});

document.querySelectorAll('.buttonRandom').forEach(function(button) {
    button.addEventListener('click', () => {
    const matrixContainer = button.closest(".matrix-container");
    const matrix = matrixContainer.querySelector(".matrix");
    const rowsNumb = matrixContainer.querySelector(".matrixRows").value;
    const colsNumb = matrixContainer.querySelector(".matrixCols").value;
    createMatrixInputsRandom(matrix, rowsNumb, colsNumb)
    });
});

createMatrixInputs(matrixA, 2, 2);
createMatrixInputs(matrixB, 2, 2);
createResultMatrix([[0, 0], [0, 0]]);

function parseMatrix(matrix) {
    const rows = matrix.querySelectorAll('.matrix-row');
    const M = [];
    let error = false;
    rows.forEach((row) => {
    const inputs = row.querySelectorAll('.matrix-input');
    const rowValues = [];
    inputs.forEach((input) => {
        const value = input.value ? Number(input.value) : 0;
        if (isNaN(value)) error = true;
        rowValues.push(value);
    });
    M.push(rowValues);
    });
    return !error ? M : false;
}

function createMatrixInputs(matrix, rowNumb, colNumb) {
    if (rowNumb < 1 || colNumb < 1) {
    alert("Некорректная размерность")
    return;
    }
    matrix.innerHTML = '';
    for (let i = 0; i < rowNumb; i++) {
    const matrixRow = document.createElement('div');
    matrixRow.classList.add('matrix-row');
    
    for (let j = 0; j < colNumb; j++) {
        const input = document.createElement('input');
        input.classList.add('matrix-input');
        input.placeholder = "0";
        input.type = 'text';
        matrixRow.appendChild(input);
    }
    matrix.appendChild(matrixRow);
    }
}

function createMatrixInputsRandom(matrix, rowNumb, colNumb) {
    if (rowNumb < 1 || colNumb < 1) {
    alert("Некорректная размерность")
    return;
    }
    matrix.innerHTML = '';
    for (let i = 0; i < rowNumb; i++) {
    const matrixRow = document.createElement('div');
    matrixRow.classList.add('matrix-row');
    
    for (let j = 0; j < colNumb; j++) {
        const input = document.createElement('input');
        input.classList.add('matrix-input');
        input.value = Math.floor(Math.random() * 100) - 50;
        matrixRow.appendChild(input);
    }
    matrix.appendChild(matrixRow);
    }
}

function createResultMatrix(matrixValue) {
    matrixC.innerHTML = '';

    matrixValue.forEach((row) => {
    const resultMatrixRow = document.createElement('div');
    resultMatrixRow.classList.add('matrix-row');
    row.forEach((value) => {
        const input = document.createElement('input');
        input.classList.add('matrix-input');
        input.type = 'text';
        input.disabled = true;
        input.placeholder = "0";
        input.value = value;
        resultMatrixRow.appendChild(input);
    });
    matrixC.appendChild(resultMatrixRow);
    });
}

function execute() {
    const operation = document.getElementById("operation").value;
    const A = parseMatrix(matrixA);
    const B = parseMatrix(matrixB);
    let result;

    if (!A || !B) {
    alert("Некорректные матрицы!");
    return;
    }

    switch (operation) {
    case "addition":
        if (A.length !== B.length || A[0].length !== B[0].length) {
        alert('Матрицы должны иметь одинаковый размер');
        return;
        }
        createResultMatrix(addMatrices(A, B));
        break;

    case "multiplication":
        if (A.length !== B[0].length) {
        result = alert('Размерности матриц несовместимы');
        return;
        }
        createResultMatrix(multiplyMatrices(A, B));
        break;

    case "scalarMultiplication":
        const scalar = Number(prompt("Введите число для умножения матрицы:"));
        if (!isNaN(scalar)) {
        createResultMatrix(multiplyMatrixByScalar(A, scalar));
        } else {
        alert("Введите число!");
        }
        break;

    case "transpose":
        createResultMatrix(transposeMatrix(A));
        break;

    case "determinant":
        if (A.length !== A[0].length) {
        alert('Матрица должна быть квадратной');
        return;
        }
        alert("Определитель матрицы равен: " + evalDeterminant(A));
        break;

    case "inverse":
        if (A.length !== A[0].length) {
        alert('Матрица должна быть квадратной');
        return;
        }
        createResultMatrix(inverseMatrix(A));
        break;

    default:
        alert("Выберите корректную операцию.");
    }
}