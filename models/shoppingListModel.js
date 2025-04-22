let ShoppingList = {
    products: [],
    promoCodeApplied: null,
};

const getAll = () => ShoppingList.products;

const getShoppingListPromoCode = () => ShoppingList.promoCodeApplied;


const addItem = (productId) => {
  ShoppingList.products.push(productId);
};

const removeItem = (productId) => {
    const index = ShoppingList.products.findIndex(item => item === productId);
    ShoppingList.products =  ShoppingList.products.filter((_, i) => i !== index);
};

const exists = (productId) => {
    return ShoppingList.products.some(p => p === productId);
};

const getTotal = () => {
  return ShoppingList.products.reduce((total, product) => {
    return total + product.price;
  }, 0);
};

const addPromoCode = (promoCode)=> {
    ShoppingList.promoCodeApplied = promoCode;
    return ShoppingList;
}

module.exports = {
  getAll,
  addItem,
  removeItem,
  exists,
  getTotal,
  addPromoCode,
  getShoppingListPromoCode
};
