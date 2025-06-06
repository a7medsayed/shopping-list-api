const express = require('express');
const router = express.Router();
const shoppingListController = require('../controllers/shoppingListController');

// Get shopping list
router.get('/', shoppingListController.getList);

// Add product to shopping list
router.post('/:productId', shoppingListController.addToList);

// Remove product from shopping list
router.delete('/:productId', shoppingListController.removeFromList);
// Apply promo code
router.post('/apply-promo/:name', shoppingListController.applyPromo);

module.exports = router;
