const soma = require('./soma');

test('deve somar corretamente', () => {
  expect(soma(2, 3)).toBe(5);
});