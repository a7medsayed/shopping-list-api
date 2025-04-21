const Product = require('../models/productsModel');
const { validateProductInput, validateProductId, validateProductInputUpdate } = require('../utils/validation');

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
     const idError = validateProductId(req.params.id);
     if (idError) return res.status(400).json({ message: idError });

     const product = Product.getById(req.params.id);
     if (!product) return res.status(404).json({ message: 'Product not found.' });

     const bodyError = validateProductInputUpdate(req.body);
     if (bodyError) return res.status(400).json({ message: bodyError });
     
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
