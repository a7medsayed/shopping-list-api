# 🛒 Shopping List API

A simple RESTful API for managing products, shopping lists, and promo codes using **Node.js** and **Express**. This project is built to demonstrate clean code practices, RESTful architecture, and full backend test coverage with Jest.

---

## 🚀 Live Demo

**Base URL:**  
[https://shopping-list-api-d20c.onrender.com](https://shopping-list-api-d20c.onrender.com)

---

## ✅ Features

- 📦 **Products**
  - Add, update, delete, and view all products.
- 🛒 **Shopping List**
  - Add/remove products from the shopping list.
  - Get current shopping list with real-time total.
- 🎟️ **Promo Codes**
  - Apply valid promo codes for a percentage discount.
- 🧪 **Testing**
  - All API routes are covered with unit & integration tests.

---

## 📬 Postman Collection

Test the API using this public Postman collection:  
🔗 [Click here to open in Postman](https://www.postman.com/teams/new-team-workspace/workspace/new-team-workspace/collection/30527112-b5f571e9-76ef-425d-b730-d644eea3a2ac?action=share&creator=30527112)

> ⚠️ **Tip:** Update the collection's base URL to:  
> `https://shopping-list-api-d20c.onrender.com`

---

## 🛠️ API Endpoints

### 🔹 Products

| Method | Route              | Description                    |
|--------|--------------------|--------------------------------|
| GET    | `/products`        | Retrieve all products          |
| POST   | `/products`        | Create a new product           |
| PUT    | `/products/:id`    | Update an existing product     |
| DELETE | `/products/:id`    | Delete a product               |

---

### 🔹 Shopping List

| Method | Route                                | Description                          |
|--------|--------------------------------------|--------------------------------------|
| POST   | `/shopping-list/add/:productId`      | Add a product to the shopping list   |
| DELETE | `/shopping-list/remove/:productId`   | Remove a product from the list       |
| GET    | `/shopping-list`                     | Get all items in your shopping list  |
| POST   | `/shopping-list/apply-promo/:name`   | Apply a promo code to the total      |

---

### 🔹 Promo Codes

| Method | Route                 | Description                      |
|--------|-----------------------|----------------------------------|
| GET    | `/promo-codes`        | Get all available promo codes    |
| POST   | `/promo-codes`        | Add a new promo code             |
| DELETE | `/promo-codes/:id`    | Remove a promo code              |

---

## 🧪 Running Tests

This project uses **Jest** and **Supertest** to test all API routes.

### Run tests:

```bash
npm install
npm test
