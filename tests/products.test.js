const request = require('supertest');
const app = require('../app');

describe('Products API', () => {
  let createdId = null;

  it('should get all products (initially empty)', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new product', async () => {
    const res = await request(app).post('/products').send({
      name: 'Test Product',
      price: 10.99,
      quantity: 3
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Product');
    createdId = res.body.id;
  });

  it('should update the product', async () => {
    const res = await request(app).put(`/products/${createdId}`).send({
      name: 'Updated Product',
      price: 8.99,
      quantity: 5
    });

    expect(res.statusCode).toBe(200);
    const updatedProduct = res.body.filter((p)=> { return p.id == createdId})[0];
    expect(updatedProduct.name).toBe('Updated Product');
  });

  it('should delete the product', async () => {
    const res = await request(app).delete(`/products/${createdId}`);
    expect(res.statusCode).toBe(200);
  });
});
