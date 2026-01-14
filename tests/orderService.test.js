const { calculateOrderTotal } = require('../src/orderService');

test('deve aplicar desconto quando valor for maior que 100', () => {
  expect(calculateOrderTotal(200)).toBe(180);
});

test('não deve aplicar desconto quando valor for menor ou igual a 100', () => {
  expect(calculateOrderTotal(100)).toBe(100);
});