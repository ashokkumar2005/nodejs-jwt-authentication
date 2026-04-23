# 🔐 Node.js Authentication API (JWT + bcrypt)

A secure and scalable **authentication system** built using **Node.js** and **Express.js**.
This project demonstrates real-world backend authentication using **JWT (JSON Web Tokens)** and **bcrypt for password hashing**.

---

## 🚀 Features

* ✅ User Signup & Login
* 🔐 Secure Password Hashing using bcrypt
* 🎫 JWT Token Generation & Verification
* 🛡️ Authentication Middleware
* 🔒 Protected Routes
* 🧩 Clean MVC Architecture
* ⚡ Async/Await for better performance

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* bcrypt
* JSON Web Token (JWT)

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

```bash
git clone https://github.com/yourusername/authentication-JWT.git
```

### 2️⃣ Navigate into the project

```bash
cd authentication-JWT
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the server

```bash
node server.js
```

👉 Server runs on:
`http://localhost:3000`

---

## 🔐 Authentication Flow

```
User Signup
   ↓
Password hashed (bcrypt)
   ↓
Stored securely in database
   ↓
User Login
   ↓
Password verified
   ↓
JWT token generated
   ↓
Client stores token
   ↓
Token sent in Authorization header
   ↓
Server verifies token
   ↓
Access granted to protected routes
```

---

## 🔗 API Endpoints

### 📌 Signup

**POST** `/signup`

**Request Body**

```json
{
  "username": "ashok",
  "password": "123456"
}
```

**Response**

```
User registered successfully
```

---

### 📌 Login

**POST** `/login`

**Request Body**

```json
{
  "username": "ashok",
  "password": "123456"
}
```

**Response**

```json
{
  "message": "Login success",
  "token": "JWT_TOKEN"
}
```

---

### 📌 Protected Route

**GET** `/profile`

**Headers**

```
Authorization: Bearer JWT_TOKEN
```

**Response**

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

### 🎫 JWT Token Generation

```javascript
const token = jwt.sign(
  { username: user.username },
  process.env.SECRET_KEY,
  { expiresIn: "1h" }
);
```

---

## 📚 Concepts Covered

* REST API Development
* MVC Architecture
* Middleware in Express
* Authentication & Authorization
* Password Security Best Practices
* Async Programming

---

## 🚀 Future Improvements

* 🔄 MongoDB / Database Integration
* 🔐 Refresh Tokens & Token Rotation
* 👥 Role-Based Access Control (RBAC)
* 🚪 Logout & Token Blacklisting
* ✅ Request Validation (Joi / Zod)
* 📄 API Documentation (Swagger)

---

## 👨‍💻 Author

**Ashok Sam**
Backend Developer (Node.js & Express)

* 🔗 GitHub: https://github.com/ashokkumar2005
* 🌐 Portfolio: https://onepiece-portfolio-sam.vercel.app/

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
