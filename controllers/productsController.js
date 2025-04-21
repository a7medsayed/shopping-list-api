const Product = require('../models/productsModel');

// @desc Get all products
// @route GET /products
// @access Public
exports.getAllProducts = (req, res) => {
  try {
    const products = Product.getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// @desc Add new product
// @route POST /products
// @access Public
exports.addNewProduct = (req, res) => {
    try {
        const error = validateProductInput(req.body);
        if (error) return res.status(400).json({ message: error });
      const products = Product.add(req.body);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong.' });
    }
  };


 // @desc update  product
// @route PUT /products
// @access Public
exports.updateProduct = (req, res) => {
    try {
      const products = Product.update(req.params.id, req.body);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong.' });
    }
  };



 // @desc delete  product
// @route DELETE /products
// @access Public
exports.deleteProduct = (req, res) => {
    try {
      const products = Product.deleteProduct(req.params.id);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong.' });
    }
  };
