const request = require('supertest');
const app = require('../app');

describe('Shopping List API', () => {
  let productId = null;

  beforeAll(async () => {
    const res = await request(app).post('/products').send({
      name: 'Milk',
      price: 4,
      quantity: 2
    });
    productId = res.body.id;
  });

  it('should add item to shopping list', async () => {
    const res = await request(app).post(`/shopping-list/${productId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/added/i);
  });

  it('should get shopping list with total', async () => {
    const res = await request(app).get('/shopping-list');
    expect(res.statusCode).toBe(200);
    expect(res.body.originalTotal).toBe(4);
  });

  it('should remove item from shopping list', async () => {
    const res = await request(app).delete(`/shopping-list/${productId}`);
    expect(res.statusCode).toBe(200);
  });
});
