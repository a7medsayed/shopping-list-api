const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// GET all products
router.get('/', productsController.getAllProducts);
// POST add new product
router.post('/', productsController.addNewProduct);
// PUT update  product
router.put('/:id', productsController.updateProduct);
// DELETE update new product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;