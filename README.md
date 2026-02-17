# 🎬 Cinema Backend API

A production-ready RESTful Node.js API for cinema applications with
authentication, favorites management, and admin control.

------------------------------------------------------------------------

## 📚 Table of Contents

-   [Tech Stack](#-tech-stack)
-   [Features](#-features)
-   [Installation](#-installation)
-   [Usage](#-usage)
-   [Project Goals](#-project-goals)
-   [Deployment](#-deployment)

------------------------------------------------------------------------

## 🛠 Tech Stack

### 🚀 Core

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

### 🔐 Authentication & Security

-   JSON Web Tokens (JWT)
-   bcrypt
-   nanoid
-   uuid

### 📦 Middleware & Utilities

-   Joi (request validation)
-   CORS
-   Morgan (logging)
-   dotenv
-   http-errors

### 🖼 File & Media Handling

-   Multer (file uploads)
-   Jimp (image processing)
-   Gravatar

### 📧 Email Integration

-   SendGrid (@sendgrid/mail)

### 🧪 Development Tools

-   Nodemon
-   ESLint (Standard Config)
-   cross-env

------------------------------------------------------------------------

## 🚀 Features

-   🔐 Secure JWT Authentication (Access + Refresh Tokens)
-   👤 User Registration & Login
-   🔄 Token Refresh & Logout
-   🔑 Password Reset via Email
-   ❤️ Manage Favorite Movies, Actors, and TV Shows
-   🧑‍💼 Role-Based Access Control (Admin / User)
-   📁 Avatar Upload & Image Processing
-   📧 Email Notifications via SendGrid
-   🗄 MongoDB Database Integration
-   🧩 Modular MVC-like Project Architecture

------------------------------------------------------------------------

## ⚙️ Installation

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/your-username/cinema-backend.git
cd cinema-backend
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Create `.env` file

Create a `.env` file in the root directory:

``` env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
SENDGRID_API_KEY=your_sendgrid_api_key
BASE_URL=http://localhost:5000
```

### 4️⃣ Run the project

#### Development mode

``` bash
npm run start:dev
```

#### Production mode

``` bash
npm start
```

Server will start at:

http://localhost:5000

------------------------------------------------------------------------

## 🧪 Usage

### Base API URL

http://localhost:5000/api

Protected routes require an access token in the header:

Authorization: Bearer `<access_token>`{=html}

Main route groups:

-   /api/auth -- Authentication routes\
-   /api/users -- User profile & favorites\
-   /api/admin -- Admin-only routes

Test using Postman, Thunder Client, or Insomnia.

------------------------------------------------------------------------

## 🎯 Project Goals

-   Build scalable RESTful backend architecture
-   Implement JWT authentication with refresh tokens
-   Apply secure password hashing using bcrypt
-   Design MongoDB schemas with Mongoose
-   Implement request validation with Joi
-   Structure backend using modular MVC principles
-   Integrate third-party email service (SendGrid)
-   Implement file uploads and image processing
-   Prepare production-ready backend for frontend integration
-   Practice role-based access control

------------------------------------------------------------------------

## 🌐 Deployment

This backend can be deployed using:

-   Docker
-   Render
-   Railway
-   Heroku
-   DigitalOcean
-   MongoDB Atlas

### Deployment Checklist

-   Configure production environment variables
-   Secure JWT secrets
-   Use MongoDB Atlas for database hosting
-   Configure CORS for frontend domain
-   Enable HTTPS in production

------------------------------------------------------------------------

## 📌 License

This project is created for educational and portfolio purposes.
