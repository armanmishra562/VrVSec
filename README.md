# Role-Based Access Control (RBAC) System

This project implements a **Role-Based Access Control (RBAC)** system with authentication and authorization.
---

## **Testing the API**

**Using Postman**
- Visit `https://documenter.getpostman.com/view/39805087/2sAYBVjCg7` to View the Postman Collection testing of all endpoints.

**Using Swagger UI**
- Visit `http://localhost:3000/api-docs` to use the Swagger UI for testing all endpoints.
- Provide input as required and see real-time responses.

---

## **Features**

- **User Authentication**  
  - Secure user registration with password hashing.
  - User login with JWT-based authentication.
  
- **Role-Based Access Control**  
  - Define and manage roles (e.g., `Admin`, `User`, `Moderator`).
  - Restrict access to endpoints based on assigned roles.
  
- **Protected Routes**  
  - Only authorized users can access protected endpoints.
  - Flexible role-based access rules.

- **Admin Features**  
  - Create new roles with specific permissions.
  - Retrieve all roles.

- **API Documentation**  
  - Swagger UI integration for testing endpoints.

---

## **Technologies Used**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Logging**: Winston
- **API Documentation**: Swagger UI

---

## **Project Structure**

```
backend/
├── controllers/
│   ├── authController.js       # Handles user authentication
│   ├── roleController.js       # Manages role creation and retrieval
├── middlewares/
│   ├── authMiddleware.js       # Authentication and authorization middlewares
├── models/
│   ├── User.js                 # User model schema
│   ├── Role.js                 # Role model schema
├── routes/
│   ├── authRoutes.js           # Routes for authentication (register, login)
│   ├── protectedRoutes.js      # Routes protected by roles
│   └── adminRoutes.js          # Routes for managing roles
├── utils/
│   └── logger.js               # Custom logging using Winston
├── config/
│   └── database.js             # MongoDB connection
├── swagger.json                # Swagger API documentation
├── .env                        # Environment variables
├── server.js                   # Application entry point
└── package.json                # Dependencies and scripts
```

---

## **Setup and Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/armanmishra562/VrVSec.git
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory and add the following:
   ```
   PORT
   MONGO_URI
   JWT_SECRET
   ```

5. **Run the server**  
   ```bash
   npm run dev
   ```

6. **Access the API Documentation**  
   Navigate to `http://localhost:3000/api-docs` to view and test the endpoints using Swagger UI.

---

## **Usage**

### **1. Register a User**
- Endpoint: `POST /api/auth/register`  
- Body:
  ```json
  {
    "username": "testuser",
    "password": "password123",
    "roles": ["User"]
  }
  ```

### **2. Log in a User**
- Endpoint: `POST /api/auth/login`  
- Body:
  ```json
  {
    "username": "testuser",
    "password": "password123"
  }
  ```
- Response:
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### **3. Access Protected Routes**
- Use the JWT token in the `Authorization` header:  
  ```
  Authorization: Bearer your_jwt_token
  ```
- Examples:
  - `GET /api/protected/admin` (Only for Admins)
  - `GET /api/protected/user` (For Users and Admins)

### **4. Manage Roles (Admin Only)**
- **Create a Role**: `POST /api/admin/roles`  
  - Body:
    ```json
    {
      "role": "Moderator",
      "permissions": ["read", "write", "delete"]
    }
    ```
- **Get All Roles**: `GET /api/admin/roles`

---


## **License**

This project is licensed under the MIT License.

---
