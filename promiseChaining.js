fetchUser()
  .then(user => fetchOrders(user.id)) // вызывается после успешного получения пользователя
  .then(orders => processOrders(orders)) // вызывается после успешного получения заказов
  .then(result => console.log('Orders processed:', result)) // вызывается после успешной обработки заказов
  .catch(err => console.error(err));