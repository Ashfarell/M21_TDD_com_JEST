const multiplicar = require('./atividade3');

test('deve multiplicar corretamente', () => {
  expect(multiplicar(2, 3)).toBe(6);
});