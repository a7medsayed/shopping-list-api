const Product = require('../models/productsModel');
const ShoppingList = require('../models/shoppingListModel');
const { validateProductId } = require('../utils/validation');
const Promo = require('../models/promoCodesModel');

// @desc Get shopping list with total
exports.getList = (req, res) => {
    const list = ShoppingList.getAll();
    const promoCode = ShoppingList.getShoppingListPromoCode();
  
    let promo;
    if(promoCode){
         promo = Promo.getByName(promoCode);
    }

    let total = 0;
    const validProducts = [];
  
    list.forEach(id => {
      const product = Product.getById(id);
      if (product) {
        validProducts.push(product);
        total += product.price;
      } else {
        ShoppingList.removeItem(id);
      }
    });
  
    const discount = (total * (promo ? promo.percentage : 0)) / 100;
    const discountedTotal = +(total - discount).toFixed(2);
  
    res.status(200).json({
      list: validProducts,
      promoApplied: promo? promo.name: null,
      discountPercent: promo? promo.percentage: 0,
      originalTotal: total,
      discountedTotal
    });  
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

  exports.applyPromo = (req, res) => {
    const { name } = req.params;
    const promo = Promo.getByName(name);
  
    if (!promo) {
      return res.status(404).json({ message: 'Promo code not valid.' });
    }
    ShoppingList.addPromoCode(name);
    res.status(200).json({ message: 'Promo code added.' });

  };