export const totalPriceItems = (order) => Math.abs(order.price * order.count);

export const formatCurrency = (value) =>
  value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
