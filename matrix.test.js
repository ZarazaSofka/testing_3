import { inverseMatrix } from '/matrixlib.js';

const expect = chai.expect;
window.alert = function() {};

describe('inverseMatrix', () => {

    describe('Вычисляет обратную матрицу для корректных случаев', () => {

        it('Матрица 1 x 1', () => {
            const M = [[10]];
            expect(inverseMatrix(M)).to.deep.equal([[0.1]]);
        });
    
        it('Матрица 2 x 2', () => {
            const M = [[-4, 2], [6, -4]];
            expect(inverseMatrix(M)).to.deep.equal([[-1, -0.5], [-1.5, -1]]);
        });

        it('Матрица 3 x 3', () => {
            const M = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
            expect(inverseMatrix(M)).to.deep.equal([[1, 0, 0], [0, 0.5, 0], [0, 0, 1/3]]);
        });
    });

    describe('Обрабатывает вырожденные случаи матриц (det=0)', () => {

        it('Матрица 1 x 1', () => {
            const M = [[0]];
            expect(inverseMatrix(M)).to.be.false;
        });
    
        it('Матрица 2 x 2', () => {
            const M = [[2, 1], [-4, -2]];
            expect(inverseMatrix(M)).to.be.false;
        });

        it('Матрица 3 x 3', () => {
            const M = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
            expect(inverseMatrix(M)).to.be.false;
        });
    });

    describe('Обрабатывает неквадратные матрицы', () => {

        it('Матрица 2 x 1', () => {
            const M = [[0], [3]];
            expect(inverseMatrix(M)).to.be.false;
        });
    
        it('Матрица 1 x 2', () => {
            const M = [[2, 1]];
            expect(inverseMatrix(M)).to.be.false;
        });
    });
});