const express = require('express');
const router = express.Router();
const controller = require('../controllers/promoCodesController');

router.get('/', controller.getAllPromoCodes);
router.post('/', controller.addPromoCode);
router.delete('/:id', controller.deletePromoCode);

module.exports = router;
