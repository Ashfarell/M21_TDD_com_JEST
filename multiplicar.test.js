const multiplicar = require('./multiplicar');

test('deve multiplicar corretamente', () => {
  expect(multiplicar(2, 3)).toBe(6);
});