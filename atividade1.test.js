const soma = require('./atividade1');

test('deve somar corretamente', () => {
  expect(soma(2, 3)).toBe(5);
});