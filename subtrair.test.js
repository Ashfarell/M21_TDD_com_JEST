const subtrair = require('./subtrair');

test('deve subtrair corretamente', () => {
  expect(subtrair(5, 3)).toBe(2);
});