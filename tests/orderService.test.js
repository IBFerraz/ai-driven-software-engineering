const { calculateOrderTotal } = require('../src/orderService');

test('deve aplicar desconto quando valor for maior que 100', () => {
  expect(calculateOrderTotal(200)).toBe(180);
});

test('deve manter valor igual a 100 sem desconto', () => {
  expect(calculateOrderTotal(100)).toBe(100);
});

test('não deve aplicar desconto quando valor for menor que 100', () => {
  expect(calculateOrderTotal(50)).toBe(50);
});