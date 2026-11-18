/**
 * Casos de uso do carrinho: adicionar, remover unidade, deletar, listar e totalizar.
 */

async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: R$ ${result.toFixed(2)}`);
  return result;
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

/** Diminui 1 unidade; se quantity chegar a 1 e remover de novo, tira o item. */
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    console.log("item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  userCart.splice(indexFound, 1);
}

async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  if (userCart.length === 0) {
    console.log("(vazio)");
    return;
  }

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal().toFixed(2)}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
