var mathlib = require('../src/');
var assert = require('chai').assert;

describe('index', function() {
  describe('sum', function() {
    it('should return 4 when given 2 and 2', function() {
      expect(mathlib.sum(2,2)).toBe(4);
    });
    it('should not return 0 when given 1 and 0', function() {
      assert.notEqual(mathlib.sum(1,0), 0);
    });
  });
  describe('substr', function() {
    it('should return 2 when given 4 and 2', function() {
      assert.equal(mathlib.substr(4,2), 2);
    });
    it('should not return 0 when given 0 and 1', function() {
      assert.notEqual(mathlib.substr(1,0), 0);
    });
  });
  describe('mult', function() {
    it('should return 25 when given 5 and 5', function() {
      assert.equal(mathlib.mult(5,5), 25);
    });
    it('should not return 0 when given 1 and 1', function() {
      assert.notEqual(mathlib.mult(1,1), 0);
    });
  });
  describe('fibo', function() {
    it('should return 21 when given 8', function() {
      assert.equal(mathlib.fibo(8), 21);
    });
    it('should not return 0 when given 1', function() {
      assert.notEqual(mathlib.fibo(1), 0);
    });
  });
});
