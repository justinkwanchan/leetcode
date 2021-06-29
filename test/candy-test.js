const { assert } = require('chai');
const candy = require('../candy');

describe('candy', function () {
  it('should return 4 for [1, 2, 1]', function () {
    const result = candy([1, 2, 1]);
    assert.equal(result, 4);
  });

  it('should return 5 for [1, 0, 2]', function () {
    const result = candy([1, 0, 2]);
    assert.equal(result, 5);
  });

  it('should return 6 for [1, 2, 3]', function () {
    const result = candy([1, 2, 3]);
    assert.equal(result, 6);
  });

  it('should return 6 for [3, 2, 1]', function () {
    const result = candy([3, 2, 1]);
    assert.equal(result, 6);
  });

  it('should return 13 for [1, 1, 2, 1, 2, 2, 3, 3, 1]', function () {
    const result = candy([1, 1, 2, 1, 2, 2, 3, 3, 1]);
    assert.equal(result, 13);
  });
});
