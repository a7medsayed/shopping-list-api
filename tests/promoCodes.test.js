const request = require('supertest');
const app = require('../app');

describe('Promo Code API', () => {
  let promoId = null;

  it('should add a promo code', async () => {
    const res = await request(app).post('/promo-codes').send({
      name: '20OFF',
      percentage: 20
    });
    expect(res.statusCode).toBe(201);
    promoId = res.body.id;
  });

  it('should get all promo codes', async () => {
    const res = await request(app).get('/promo-codes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should apply promo to shopping list', async () => {
    // Add product
    const prod = await request(app).post('/products').send({
      name: 'Bread',
      price: 5,
      quantity: 1
    });

    const prodId = prod.body.id;
    await request(app).post(`/shopping-list/${prodId}`);

    const res = await request(app).post('/shopping-list/apply-promo/20OFF');
    expect(res.statusCode).toBe(200);

    const shoppingList = await request(app).get('/shopping-list');
    expect(shoppingList.statusCode).toBe(200);

    expect(shoppingList.body.discountedTotal).toBe(4); // 20% off 5
  });

  it('should delete a promo code', async () => {
    const res = await request(app).delete(`/promo-codes/${promoId}`);
    expect(res.statusCode).toBe(200);
  });
});
