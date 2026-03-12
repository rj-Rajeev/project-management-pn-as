# Project Management API

A secure RESTful API built with **Node.js, Express, and MongoDB** for managing projects in a **multi-tenant environment**.
The system allows users to create, view, update, and delete projects while ensuring **company-level data isolation and owner-level access control**.

---

# Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **bcryptjs**
* **express-validator**

---

# Features

* JWT-based authentication
* Secure password hashing
* Project CRUD operations
* Multi-tenant data isolation (company-based)
* Owner-level authorization (only project owner can modify)
* Input validation
* Modular architecture (Controllers, Services, Routes)

---

# Folder Structure

```
project-api
│
├── controllers
│     projectController.js
│     authController.js
│
├── services
│     projectService.js
│     authService.js
│
├── routes
│     projectRoutes.js
│     authRoutes.js
│
├── middleware
│     authMiddleware.js
│
├── models
│     projectModel.js
│     userModel.js
│
├── config
│     db.js
│
├── index.js
├── server.js
├── .env
└── README.md
```

---

# Installation

Clone the repository:

```
git clone https://github.com/rj-Rajeev/project-management-pn-as.git
```

Go into the project folder:

```
cd project-management
```

Install dependencies:

```
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# Run the Application

Start the server:

```
npm run dev
```

or

```
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

# API Endpoints

## Authentication

### Register

```
POST /auth/register
```

Request body:

```
{
  "name": "Rajeev",
  "email": "rajeev@email.com",
  "password": "123456",
  "companyId" : "comp-1"
}
```

---

### Login

```
POST /auth/login
```

Response:

```
{
  "token": "JWT_TOKEN"
}
```

---

# Project Endpoints

All project routes require authentication.

Header:

```
Authorization: Bearer JWT_TOKEN
```

---

### Create Project

```
POST /projects
```

Example request:

```
{
  "title": "Backend API",
  "description": "Project management system",
  "status": "active"
}
```

---

### Get All Projects

```
GET /projects
```

Returns projects belonging to the user's company.

---

### Get Single Project

```
GET /projects/:id
```

---

### Update Project

```
PUT /projects/:id
```

Only the project owner can update.

---

### Delete Project

```
DELETE /projects/:id
```

Only the project owner can delete.

---

# Security

The API enforces the following security rules:

* JWT authentication for protected routes
* Password hashing using bcrypt
* Multi-tenant isolation using `companyId`
* Owner-based authorization for updates and deletions

---

# Health Check

```
GET /health
```

Response:

```
Working...
```

---

# Deployment

```
<!-- // depolyed:link -->

```

---

# Author

Rajeev Bhardwaj
Node.js Developer
