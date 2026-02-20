# 🚗 Car Rental System – Backend API

A RESTful backend service for the Car Rental System built with **Node.js, Express, MongoDB Atlas, and JWT Authentication**.

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs (Password Hashing)
* dotenv
* CORS

---

## 📁 Project Structure

```
backend/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   ├── Car.js
│   └── Booking.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── adminRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── server.js
├── package.json
└── .env
```

---

## 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access control (User / Admin)
* Protected routes using middleware
* Token must be sent in header:

```
Authorization: Bearer <token>
```

---

## 📚 API Endpoints

### 🔹 Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/auth/signup` | Register new user |
| POST   | `/api/auth/login`  | Login user        |

---

### 🔹 User Routes (Protected)

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| GET    | `/api/user/cars`     | Get all available cars      |
| POST   | `/api/user/bookings` | Book a car                  |
| GET    | `/api/user/bookings` | Get logged-in user bookings |

---

### 🔹 Admin Routes (Admin Only)

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | `/api/admin/cars`     | Add new car       |
| DELETE | `/api/admin/cars/:id` | Delete car        |
| GET    | `/api/admin/bookings` | View all bookings |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone <repository-url>
cd backend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Create `.env` File

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Development Server

```
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 🗄 Database Models

### User

* name
* email
* password (hashed)
* role

### Car

* name
* model
* category
* pricePerDay
* location
* availability

### Booking

* user (ObjectId → User)
* car (ObjectId → Car)
* startDate
* endDate

---

## ✅ Features Implemented

* JWT Authentication
* Role-based Authorization
* CRUD Operations for Cars
* Booking System with Date Validation
* Admin View for All Bookings
* MongoDB Relationships using `populate()`

---

## 🚀 Deployment

This backend can be deployed on:

* Render
* Railway
* Heroku
* Any Node.js hosting platform

---

## 👩‍💻 Author

Sana Salim
