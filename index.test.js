const index = require('./index');

test('adds 1 + 2 is equal to 3', () => {
  expect(index(1, 2)).toBe(3);
});

test('addition', () => {
  expect(index(1, 6)).toBe(7);
});
