const subtrair = require('./atividade2');

test('deve subtrair corretamente', () => {
  expect(subtrair(5, 3)).toBe(2);
});