# 🧺 Mini Laundry Order Management System (MERN)

## 🚀 Overview

This is a full-stack **Laundry Order Management System** built using the MERN stack.
It allows a dry cleaning store to efficiently manage customer orders, track status, calculate billing, and view business insights through a dashboard.

The system is designed to be **simple, fast, and practical**, focusing on core functionality rather than unnecessary complexity.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

---

## ✨ Features

### 🔹 Core Features

* Create new laundry orders
* Automatic billing calculation
* Unique Order ID generation
* Order status tracking:

  * RECEIVED
  * PROCESSING
  * READY
  * DELIVERED
* Update order status
* View all orders
* Search orders by name or phone
* Filter orders by status

---

### 🔹 Dashboard

* Total number of orders
* Total revenue
* Orders grouped by status

---

### 🔹 Additional Features (Bonus)

* Full CRUD operations (Create, Read, Update, Delete)
* Delete order with confirmation
* Responsive UI with Tailwind CSS
* Loading states and empty states
* Clean card-based UI design
* Estimated delivery date (optional enhancement)

---

## 📁 Project Structure

```
laundry-system/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

---

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Create Order

```
POST /api/orders/create
```

### Get Orders (with filters)

```
GET /api/orders?search=&status=
```

### Update Status

```
PUT /api/orders/update/:orderId
```

### Delete Order

```
DELETE /api/orders/delete/:orderId
```

### Dashboard

```
GET /api/orders/dashboard
```

---

## 🧪 Sample Request

### Create Order

```json
{
  "customerName": "Karan",
  "phone": "9999999999",
  "garments": ["Shirt", "Pants"],
  "quantities": [2, 3],
  "pricePerItem": 50
}
```

---

## 🤖 AI Usage Report (Important)

### Tools Used

* ChatGPT (primary development assistant)
* GitHub Copilot (optional)

---

### Where AI Helped

* Backend scaffolding (Express setup, routes, controllers)
* MongoDB schema design
* React component generation
* Tailwind styling
* Debugging API issues
* Structuring the project

---

### Sample Prompts Used

* "Build a MERN order management system"
* "Create MongoDB schema for laundry orders"
* "Fix MongoDB Atlas connection error"
* "Implement search and filter in Express API"
* "Create React UI for CRUD operations"

---

### What AI Got Wrong

* Initially used MongoDB `_id` instead of custom `orderId`
* Route handler errors (`handler must be a function`)
* UI refresh issues after API calls
* Search triggering on every keystroke

---

### Improvements Made

* Switched to custom `orderId` for better usability
* Fixed route/controller mismatches
* Implemented controlled search (button-based)
* Added proper error handling and validation
* Improved UI layout and UX

---

## ⚖️ Tradeoffs

* Focused on functionality over complex UI
* No authentication implemented (time constraint)
* Basic styling instead of advanced UI framework

---

## 🔮 Future Improvements

* User authentication (Admin login)
* Payment integration
* Notifications (SMS/Email)
* Advanced analytics dashboard
* Mobile responsiveness improvements
* Deployment (Render / Vercel / AWS)

---

## 📸 Demo

You can test using:

* Frontend UI
* Postman collection

---

## 🎥 Demo Walkthrough (Suggested)

1. Create a new order
2. View order list
3. Search/filter orders
4. Update status
5. Delete order
6. View dashboard

---

## 🎯 Key Learnings

* Full-stack MERN architecture
* REST API design
* MongoDB aggregation
* State management in React
* Debugging real-world issues
* Effective use of AI tools in development

---

## 🙌 Conclusion

This project demonstrates the ability to:

* Build a complete full-stack application
* Use AI tools effectively
* Debug and improve generated code
* Deliver a working system within time constraints

---
