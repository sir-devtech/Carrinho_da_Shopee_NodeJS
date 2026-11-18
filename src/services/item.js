/**
 * Casos de uso do item: criar com subtotal sempre alinhado à quantity atual.
 */
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity;
    },
  };
}

export default createItem;
