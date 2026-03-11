# 🔐 Node.js Authentication Project (JWT + bcrypt)

This project demonstrates a **simple authentication system** built using **Node.js and Express**.
It includes **Signup, Login, Password Hashing, JWT Authentication, and Protected Routes**.

This project is useful for learning how **modern backend authentication works in real applications**.

---

# 🚀 Features

* User Signup
* Password Hashing using **bcrypt**
* User Login
* **JWT Token Generation**
* **Authentication Middleware**
* **Protected Routes**
* MVC Folder Structure
* Uses **Promises, async/await**

---

# 📂 Project Structure

```
authentication-JWT
│
├── controller
│   └── controller.js
│
├── middleware
│   └── authmiddleware.js
│
├── model
│   └── model.js
│
├── routes
│   └── authroutes.js
│
├── server.js
│
├── package.json
└── package-lock.json
```

---

# ⚙️ Installation

Clone the repository:

```
git clone https://github.com/yourusername/authentication-JWT.git
```

Go to project folder:

```
cd authentication-JWT
```

Install dependencies:

```
npm install
```

Start the server:

```
node server.js
```

Server runs on:

```
http://localhost:3000
```

---

# 📌 Authentication Flow

```
Signup
   ↓
Password hashed using bcrypt
   ↓
Saved in database
   ↓
Login
   ↓
bcrypt compares password
   ↓
JWT token generated
   ↓
Client stores token
   ↓
Client sends token in request header
   ↓
Server verifies JWT
   ↓
Access protected routes
```

---

# 🔑 API Endpoints

## 1️⃣ Signup

**POST**

```
/signup
```

Request Body:

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

## 2️⃣ Login

**POST**

```
/login
```

Request Body:

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

## 3️⃣ Protected Route

**GET**

```
/profile
```

Headers:

```
Authorization: JWT_TOKEN
```

Response:

```
Welcome username
```

---

# 🔒 Technologies Used

* Node.js
* Express.js
* bcrypt (Password Hashing)
* jsonwebtoken (JWT Authentication)

---

# 📖 Important Concepts Used

### Password Hashing

Passwords are secured using **bcrypt hashing**.

Example:

```javascript
const hashPassword = await bcrypt.hash(password, 10);
```

---

### Password Verification

```javascript
const match = await bcrypt.compare(password, user.password);
```

---

### JWT Token Generation

```javascript
const token = jwt.sign(
 { username: user.username },
 SECRET,
 { expiresIn: "1h" }
);
```

---

### Authentication Middleware

Middleware verifies the token before accessing protected routes.

```
Client Request
      ↓
Auth Middleware
      ↓
JWT Verify
      ↓
Access Route
```

---

# 🧠 Concepts Learned

* REST API
* Express Routing
* MVC Structure
* Middleware
* JWT Authentication
* Password Security
* Async / Await
* Promises

---

# 📌 Future Improvements

* Add MongoDB database
* Add Refresh Tokens
* Role-Based Authentication
* Logout functionality
* User validation

---

# 👨‍💻 Author

Ashok Sam

Backend Developer (Node.js & Express)

