const { transposeMatrix, multiplyMatrices } = require('../../src/matrixlib.js')
const { defineParameterType, Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert')


defineParameterType({
    name: "boolean",
    regexp: /true|false/,
    transformer: (s) => s === "true" ? true : false
  });

function parse(data) {
    return data.raw().map(row => row.map(value => parseInt(value)))
}

Given('M', function (aData) {
    this.M = parse(aData);
});
When('транспонировать', function () {
    this.addition = transposeMatrix(this.M);
});
Then('результат', function (resData) {
    const expected = parse(resData);
    assert.deepEqual(this.addition, expected);
});

Given('матрица a', function (a) {
    this.a = a.raw();
    });
  Given('матрица b', function (b) {
    this.b = b.raw();
    });
  When("перемножает матрицы a и b", function () {
      this.matrix = multiplyMatrices(this.a, this.b);
    });
    
  Then("возвращает матрицу", function (res) {
      assert.deepEqual(this.matrix, res.raw());
  });
  Then("возвращает {boolean}", function (bool) {
    assert.equal(this.matrix, bool);
  });


Given('матрицa:', function (aData) {
    this.a = parse(aData);
});
Given('число:', function (numData) {
    this.num = parse(numData)[0][0];
});
When('умножаем матрицу на число', function () {
    this.multiplication = new Operation().multiplication_number(this.a, this.num);
});
Then('результат умножения должен быть такой:', function (resData) {
    const expected_result = parse(resData);
    assert.deepStrictEqual(this.multiplication, expected_result);
});