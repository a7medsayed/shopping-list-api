let ShoppingList = [];

const getAll = () => ShoppingList;

const addItem = (productId) => {
  ShoppingList.push(productId);
};

const removeItem = (productId) => {
    const index = ShoppingList.findIndex(item => item === productId);
    ShoppingList =  ShoppingList.filter((_, i) => i !== index);
};

const exists = (productId) => {
    return ShoppingList.some(p => p === productId);
};

const getTotal = () => {
  return ShoppingList.reduce((total, product) => {
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
