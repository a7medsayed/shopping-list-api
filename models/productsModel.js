// In-memory product storage
const { v4: uuidv4 } = require('uuid');

let products = [
  {
    id: uuidv4(),
    name: 'Milk',
    quantity: 10,
    price: 2.5
  },
  {
    id: uuidv4(),
    name: 'Bread',
    quantity: 5,
    price: 1.5
  }
];

const getAll = () => products;

const add = (product) => {
  const newProduct = { id: uuidv4(), ...product };
  products.push(newProduct);
  return newProduct;
};


const update = (productId, updatedProduct) => {
    const product = products.find((prod)=> { return prod.id == productId});
    product.name = updatedProduct.name ?? product.name;
    product.quantity = updatedProduct.quantity ?? product.quantity;
    product.price = updatedProduct.price ?? product.price;
    return products;
  };

  const deleteProduct = (productId) => {
    products = products.filter((prod)=> { return prod.id !== productId});
    return products;
  };

  const getById = (id) => products.find(p => p.id === id);

  const decreaseQuantity = (id) => {
    const product = getById(id);
    if (product) {
      product.quantity -= 1;
    }
  };
  
  const increaseQuantity = (id) => {
    const product = getById(id);
    if (product) {
      product.quantity += 1;
    }
  };

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteProduct,
  decreaseQuantity,
  increaseQuantity
};
