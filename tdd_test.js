const get_determinant = require("./index").get_determinant;
const assert = require('assert').strict;

describe("Найти определитель", function () {
    it("Матрица 1x1", function () {
        const matrix = [[6]];
        assert.equal(get_determinant(matrix), 6);
    });
    it("Матрица 2x2", function () {
        const matrix = [[6, 10], [-3, 5]];
        assert.equal(get_determinant(matrix), 60);
    });
    it("Матрица 3x3", function () {
        const matrix = [[1, 2, 3], [2, 3, 1], [3, 1, 2]];
        assert.equal(get_determinant(matrix), -18);
    });
    it("Матрица 4x4", function () {
        const matrix = [[1, 2, 3, 4], [2, 3, 4, 1], [3, 4, 1, 2], [4, 1, 2, 3]];
        assert.equal(get_determinant(matrix), 160);
    });
    it("Матрица 5x5", function () {
        const matrix = [[1, 2, 3, 4, 5],
                        [2, 3, 4, 5, 1],
                        [3, 4, 5, 1, 2],
                        [4, 5, 1, 2, 3],
                        [5, 1, 2, 3, 4]];
        assert.equal(get_determinant(matrix), 1875);
    });
    it("Матрица 1x2", function () {
        const matrix = [[1, 2]];
        assert.equal(get_determinant(matrix), false);
    });
    it("Матрица 5x3", function () {
        const matrix = [[1, 2, 3],
                        [2, 3, 4],
                        [3, 4, 5],
                        [4, 5, 1],
                        [5, 1, 2]];
        assert.equal(get_determinant(matrix), false);
    });
    it("Матрица пустая", function () {
        const matrix = [[]];
        assert.equal(get_determinant(matrix), false);
    });
});