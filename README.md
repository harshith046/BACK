# BACK – Backend API for User Management & Preferences

**A robust RESTful API** built with Node.js and Express.js, providing secure user authentication, profile management, preference settings, and dashboard summary endpoints. BACK leverages JWT-based auth, Joi validation, and MongoDB for a flexible, scalable data layer.

---

## 🚀 Tech Stack

- **Runtime & Framework**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose ODM  
- **Authentication**: JWT via `jsonwebtoken`, password hashing with `bcryptjs`  
- **Validation**: Joi schemas for request payloads   
- **Dev Tools**: `nodemon` for development  

---

### ✨ Key Features

1. **User Registration & Login**  
   - `POST /api/register` to create a new user (name, email, password)  
   - `POST /api/login` to authenticate and receive a JWT token  

2. **Protected Profile Endpoints**  
   - `GET /api/profile` – Retrieve authenticated user’s profile (excludes password)  
   - `PATCH /api/profile` – Update name and/or email  

3. **User Preferences Management**  
   - `POST /api/preferences` – Save or update theme (light/dark) and layout settings  
   - `GET /api/preferences` – Fetch current user’s preferences  

4. **Dashboard Summary**  
   - `GET /api/dashboard-summary` – Returns sample summary data (projects, tasks, notifications)  

5. **Middleware & Validation**  
   - JWT‐based auth middleware for securing routes  
   - Joi schemas for request validation with detailed error messages  
   - Centralized error‐handling middleware

---

## 🛠️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/harshith046/BACK.git
   cd BACK ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root with:

   ```env
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   PORT=5000
   ```

4. **Start the server**

   ```bash
   node server.js
   ```

---

## 📡 API Endpoints

| Method | Endpoint                 | Description                              | Auth Required |
| ------ | ------------------------ | ---------------------------------------- | ------------- |
| POST   | `/api/register`          | Register a new user (name, email, pwd)   | No            |
| POST   | `/api/login`             | Authenticate and receive JWT             | No            |
| GET    | `/api/profile`           | Get current user profile                 | Yes           |
| PATCH  | `/api/profile`           | Update user name/email                   | Yes           |
| POST   | `/api/preferences`       | Save or update user theme & layout prefs | Yes           |
| GET    | `/api/preferences`       | Retrieve user preferences                | Yes           |
| GET    | `/api/dashboard-summary` | Get sample dashboard summary data        | Yes           |


### Demo
💻 [Watch a 1–2 min walkthrough on Loom](https://www.loom.com/share/6712cbadab8f4e8c992aaf6f47852407?sid=e80d1d05-31e3-47a3-b3b1-6cb30528d1d3)


## My Environment Variables

| Variable     | Description                   | Example                               |
| ------------ | ----------------------------- | ------------------------------------- |
| `MONGO_URI`  | MongoDB connection string     | `mongodb://localhost:27017/projectnat`|
| `JWT_SECRET` | Secret key for signing JWTs   | `supersecretkey123`                   |
| `PORT`       | Port on which the server runs | `5000`                                |

---

## Contact

| Name           | Email                                                   | GitHub                                        |
| -------------- | ------------------------------------------------------- | --------------------------------------------- |
| Harshith Madda | [harshithm046@gmail.com](mailto:harshithm046@gmail.com) | [harshith046](https://github.com/harshith046) |


