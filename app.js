// app.js
const express = require('express');
const productRoutes = require('./routes/products');
const shoppingListRoutes = require('./routes/shoppingList');
const promoCodesRoutes = require('./routes/promoCodes');

const app = express();
const PORT = 3000;

// Middleware (optional)
app.use(express.json());


app.use(express.json());

// Routes
app.use('/products', productRoutes);
app.use('/shopping-list', shoppingListRoutes);
app.use('/promo-codes', promoCodesRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
