const calculateTotalQuantity = (items) => {
  return items.reduce((acc, cur) => {
    return acc + cur.quantity
  }, 0);
}

const calculateItemTotalPrice = (items) => {
  return items.price * items.quantity;
}

const calculateOrderTotal = (items) => {
  return items.reduce((acc, cur) => {
    return acc + (cur.price * cur.quantity)
  }, 0);
}

export {
  calculateTotalQuantity,
  calculateItemTotalPrice,
  calculateOrderTotal
}