const cartApi = 'https://dummyjson.com/carts';

export const updateCartItem = (cartId, productId, numbers) => {
  return fetch(`${cartApi}/${cartId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      merge: true,
      products: [{ id: productId, numbers }]
    })
  })
  .then(response => response.json());
};

export const removeCartItem = (cartId, productId) => {
  return fetch(`${cartApi}/${cartId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      merge: true,
      products: [{ id: productId, quantity: 0 }]
    })
  })
  .then(response => response.json());
};
