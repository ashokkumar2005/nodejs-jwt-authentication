# 🔐 Node.js Authentication API (JWT + bcrypt)

A secure and scalable authentication system built using **Node.js** and **Express.js**.
This project demonstrates how modern backend authentication works using **JWT (JSON Web Tokens)** and **bcrypt for password hashing**.

---

## 🚀 Features

* ✅ User Signup & Login
* 🔐 Password Hashing using bcrypt
* 🎫 JWT Token Generation
* 🛡️ Authentication Middleware
* 🔒 Protected Routes
* 🧩 MVC Architecture
* ⚡ Async/Await & Promises

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* bcrypt
* jsonwebtoken (JWT)

---

## 📂 Project Structure

```
authentication-JWT
│
├── controller/
│   └── controller.js
├── middleware/
│   └── authmiddleware.js
├── model/
│   └── model.js
├── routes/
│   └── authroutes.js
├── server.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash id="9jqf8c"
git clone https://github.com/yourusername/authentication-JWT.git
```

### 2️⃣ Navigate to the project

```bash id="h1kz4a"
cd authentication-JWT
```

### 3️⃣ Install dependencies

```bash id="n12vyo"
npm install
```

### 4️⃣ Start the server

```bash id="3k9p4m"
node server.js
```

👉 Server will run on:
http://localhost:3000

---

## 🔐 Authentication Flow

```
User Signup
   ↓
Password hashed (bcrypt)
   ↓
Stored securely
   ↓
User Login
   ↓
Password verified
   ↓
JWT token generated
   ↓
Client stores token
   ↓
Token sent in headers
   ↓
Server verifies token
   ↓
Access protected routes
```

---

## 🔗 API Endpoints

### 📌 Signup

**POST** `/signup`

Request:

```json
{
  "username": "ashok",
  "password": "123456"
}
```

Response:

```
User registered successfully
```

---

### 📌 Login

**POST** `/login`

Request:

```json
{
  "username": "ashok",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login success",
  "token": "JWT_TOKEN"
}
```

---

### 📌 Protected Route

**GET** `/profile`

Headers:

```
Authorization: Bearer JWT_TOKEN
```

Response:

```
Welcome username
```

---

## 🔑 Core Concepts

### 🔐 Password Hashing

```javascript
const hashPassword = await bcrypt.hash(password, 10);
```

### 🔍 Password Verification

```javascript
const match = await bcrypt.compare(password, user.password);
```

### 🎫 JWT Token

```javascript
const token = jwt.sign(
  { username: user.username },
  SECRET,
  { expiresIn: "1h" }
);
```

---

## 📚 Concepts Covered

* REST API Development
* MVC Architecture
* Middleware
* Authentication & Authorization
* Password Security
* Async Programming

---

## 🚀 Future Improvements

* 🔄 MongoDB Integration
* 🔐 Refresh Tokens
* 👥 Role-Based Access Control
* 🚪 Logout Feature
* ✅ Input Validation

---

## 👨‍💻 Author

**Ashok Sam**
Backend Developer (Node.js & Express)

* GitHub: https://github.com/ashokkumar2005
* Portfolio: https://onepiece-portfolio-sam.vercel.app/

---
