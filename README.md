# 🚗 Car Rental System – Backend API

A RESTful backend service for the **Car Rental System** built with **Node.js, Express, MongoDB Atlas, and JWT Authentication**.

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

```bash
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
* Role-based access control (**User / Admin / Seller**)
* Protected routes using middleware
* Token must be sent in request header:

```http
Authorization: Bearer <token>
```

---

# 📚 API Endpoints

---

## 🔹 Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/auth/signup` | Register new user |
| POST   | `/api/auth/login`  | Login user        |
| POST   | `/api/auth/logout` | Logout user       |

---

## 🔹 User Routes (Protected)

| Method | Endpoint             | Description                   |
| ------ | -------------------- | ----------------------------- |
| GET    | `/api/user/cars`     | Get all available cars        |
| POST   | `/api/user/bookings` | Create a new booking          |
| GET    | `/api/user/bookings` | Get logged-in user's bookings |

---

## 🔹 Admin Routes (Admin Only)

| Method | Endpoint                  | Description                     |
| ------ | ------------------------- | ------------------------------- |
| GET    | `/api/admin/check-admin`  | Verify admin access             |
| GET    | `/api/admin/users`        | Get all users (optional search) |
| POST   | `/api/admin/cars`         | Add new car                     |
| PUT    | `/api/admin/cars/:id`     | Update car details              |
| DELETE | `/api/admin/cars/:id`     | Delete car                      |
| GET    | `/api/admin/bookings`     | View all bookings               |
| PUT    | `/api/admin/bookings/:id` | Update booking status           |

---


## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <repository-url>
cd backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

# 🗄 Database Models

## 👤 User

* `name` (String)
* `email` (String, unique)
* `password` (Hashed)
* `role` (user | admin | seller)

---

## 🚘 Car

* `name`
* `model`
* `category`
* `pricePerDay`
* `location`
* `availability`

---

## 📅 Booking

* `user` (ObjectId → User)
* `car` (ObjectId → Car)
* `startDate`
* `endDate`
* `status` (pending | approved | rejected)

---

# ✅ Features Implemented

* JWT Authentication
* Role-based Authorization
* CRUD Operations for Cars (Admin)
* Booking System with Date Validation
* Admin View for All Bookings
* Update Booking Status
* MongoDB Relationships using `populate()`
* User Search (Admin Panel)

---

# 🚀 Deployment

This backend can be deployed on:

* Render
* Railway
* Heroku
* Any Node.js hosting platform

---

# 👩‍💻 Author

**Sana Salim**
