const Product = require('../models/productsModel');
const ShoppingList = require('../models/shoppingListModel');
const { validateProductId } = require('../utils/validation');


// @desc Get shopping list with total
exports.getList = (req, res) => {
    const list = ShoppingList.getAll();
  
    const validProducts = [];
    let total = 0;
  
    list.forEach(id => {
      const product = Product.getById(id);
      if (product) {
        validProducts.push(product);
        total += product.price;
      } else {
        // Product was deleted from inventory, remove from shopping list
        ShoppingList.removeItem(id);
      }
    });
  
    res.status(200).json({ list: validProducts, total });
  };

// @desc Add a product to shopping list
exports.addToList = (req, res) => {
    const { productId } = req.params;

    const idError = validateProductId(productId);
    if (idError) return res.status(400).json({ message: idError });


    const product = Product.getById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }
  
    if (product.quantity <= 0) {
      return res.status(400).json({ message: 'Product is out of stock.' });
    }

  
    Product.decreaseQuantity(productId);
    ShoppingList.addItem(productId);
  
    res.status(200).json({ message: 'Product added to shopping list.' });
  };

// @desc Remove a product from shopping list
exports.removeFromList = (req, res) => {
    const { productId } = req.params;
  
    if (!ShoppingList.exists(productId)) {
      return res.status(404).json({ message: 'Product not in shopping list.' });
    }
  
    ShoppingList.removeItem(productId);
    Product.increaseQuantity(productId);
  
    res.status(200).json({ message: 'Product removed from shopping list.' });
  };
