let shoppingList = [];

const getAll = () => shoppingList;

const addItem = (productId) => {
  shoppingList.push(productId);
};

const removeItem = (productId) => {
    shoppingList = shoppingList.filter(id => id !== productId);
};

const exists = (productId) => shoppingList.some(p => p.id === productId);

const getTotal = () => {
  return shoppingList.reduce((total, product) => {
    return total + product.price;
  }, 0);
};

module.exports = {
  getAll,
  addItem,
  removeItem,
  exists,
  getTotal
};
