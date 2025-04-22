const Promo = require('../models/promoCodesModel');
const { validatePromoInput } = require('../utils/validation');

// GET all promo codes
exports.getAllPromoCodes = (req, res) => {
  const promos = Promo.getAll();
  res.status(200).json(promos);
};

// POST new promo code
exports.addPromoCode = (req, res) => {
  const error = validatePromoInput(req.body);
  if (error) return res.status(400).json({ message: error });

  if(Promo.exists(req.body.name)){
    return res.status(404).json({ message: 'Promo code is already exist.' });
  }

  const created = Promo.add(req.body);
  res.status(201).json(created);
};

// DELETE promo code
exports.deletePromoCode = (req, res) => {
  const removed = Promo.remove(req.params.id);
  if (!removed) {
    return res.status(404).json({ message: 'Promo code not found.' });
  }
  res.status(200).json({ message: 'Promo code deleted.' });
};
