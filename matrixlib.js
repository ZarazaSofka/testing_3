// @author:  Константинова С.

function multiplyMatrices(A, B) {
    if (A.length != B[0].length) return false;
    let res = [];
    for (var i = 0; i < A.length; i++) {
        res[i] = [];
        for (var j = 0; j < B[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < A[0].length; k++) {
                sum += A[i][k] * B[k][j];
            }
            res[i][j] = sum;
        }
    }
    return res;
}

function evalDeterminant(M) {
    const n = M.length;
    if (n < 1 || n !== M[0].length) return false;
    if (n == 1) return M[0][0];
    if (n == 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
    let sum = 0;
    let i = 0;
    for (let j = 0; j < n; j++) {
        let a = (-1) ** (i + j + 2) * M[i][j];
        let new_M = M.map(function(M) {return M.filter(function(el,idx){return idx !== j;});})
                            .filter(function(el,idx){return idx !== i});
        sum += a * evalDeterminant(new_M);
    }
    return sum;
}

// @author:  Конценберг И.

function transposeMatrix(M) {
    const result = [];
    for (let i = 0; i < M[0].length; i++) {
    const row = [];
    for (let j = 0; j < M.length; j++)
        row.push(M[j][i]);
    result.push(row);
    }
    return result;
}

function inverseMatrix(A) {
    const N = A.length;

    // проверка квадртаности матрицы
    if (N !== A[0].length) {
    return false;
    }
    
    // копия, чтобы избежать изменения
    const M = JSON.parse(JSON.stringify(A));

    // создание единичной матрицы 
    const L = [];
    for (let i = 0; i < N; i++) {
    L[i] = []
    for (let j = 0; j < N; j++) {
        L[i][j] = i == j ? 1 : 0;
    }
    }

    for (let i = 0; i < N; i++) {
    let divisor = M[i][i];
    if (divisor == 0) {
        let ok = false;
        for (let j = i + 1; j < N; j++) {
        if (M[j][i] != 0) {
            let temp = M[i]
            M[i] = M[j]
            M[j] = temp
            
            temp = L[i]
            L[i] = L[j]
            L[j] = temp
            ok = true;
            divisor = M[i][i]
        }
        }
        if (!ok) {
        alert("Обратную матрицу невозможно найти, так как детерминант равен 0")
        return false; // случай вырожденной матрицы
        }
    }

    for (let j = 0; j < N; j++) {
        M[i][j] /= divisor;
        L[i][j] /= divisor;
    }

    for (let j = 0; j < N; j++) {
        if (j == i) continue;
        const multiplier  = M[j][i];
        for (let k = 0; k < N; k++) {
        M[j][k] -= M[i][k] * multiplier ;
        L[j][k] -= L[i][k] * multiplier ;
        }
    }
    }
    return L;
}

// @author:  Шкред В.

function multiplyMatrixByScalar(a, num) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
        a[i][j] *= num;
        }
    }
    return a;
}

function addMatrices(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let line = [];
        for (let j = 0; j < a[0].length; j++) {
        line.push(a[i][j] + b[i][j]);
        }
        result.push(line);
    }
    return result;
}

module.exports = { transposeMatrix, inverseMatrix }
