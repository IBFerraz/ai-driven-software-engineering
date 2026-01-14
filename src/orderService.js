function calculateOrderTotal(orderValue) {
  if (orderValue > 100) {
    return orderValue * 0.9;
  }
  return orderValue;
}

module.exports = { calculateOrderTotal };