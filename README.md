
# Job Application Tracker

A comprehensive Node.js-based backend system designed to manage and track job applications efficiently. This system provides authentication, user management, application tracking, and notification services, all built with a microservices architecture and containerized using Docker.

---

## Features

- **User Management**:
  - User registration and login with JWT-based authentication.
  - Password hashing and secure login.
- **Job Application Tracking**:
  - CRUD operations for job applications.
  - Advanced filtering based on role, company, status, and dates.
- **Notifications**:
  - in-app notifications for application updates.
- **Microservices Architecture**:
  - Separate services for authentication, applications, and notifications.
- **Database**:
  - MongoDB for data storage (connected via MongoDB Atlas).
- **Docker Support**:
  - Fully containerized application with multi-service setup using Docker Compose.

---

## Project Structure

```
job-application-tracker/
├── src/
│   ├── config/
│   │   ├── database.js        # Database connection setup
│   │   ├── env.js             # Environment variable setup
│   │   
│   │
│   ├── controllers/
│   │   ├── applicationController.js   # Handles application-related requests
│   │   ├── authController.js          # Handles user authentication
│   │   └── notificationController.js  # Handles notification-related tasks
|   |   └── dashboardController.js     # Handles dashboard-related tasks
│   │
│   ├── models/
│   │   ├── applicationModel.js        # Application schema
│   │   ├── userModel.js               # User schema
│   │   └── notificationModel.js       # Notification schema
|   |   └── dashboardModel.js          # dashboard schema
|   |   
│   │
│   ├── routes/
│   │   ├── applicationRoutes.js       # Routes for application endpoints
│   │   ├── authRoutes.js              # Routes for authentication endpoints
│   │   └── notificationRoutes.js      # Routes for notifications
|   |   └── dashboardRoutes.js         # Routes for dashboard
│   │
│   ├── services/
│   │   ├── applicationService.js      # Business logic for applications
│   │   ├── authService.js             # Business logic for authentication
│   │   └── notificationService.js     # Business logic for notifications
|   |   └── dashboardService.js        # Business logic for dashboard
│   │
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js          # Middleware for authentication
│   │
│   ├── app.js                         # Main app configuration
│   ├── server.js                      # Entry point for the application
│   └── swagger.js                     # Swagger/OpenAPI setup for API documentation
│
├── .env                               # Environment variables
├── Dockerfile                         # Dockerfile for containerization
├── docker-compose.yml                 # Docker Compose for multi-service setup
├── package.json                       # Node.js dependencies and scripts
├── README.md                          # Project documentation
└── LICENSE                            # License file
```

---

## Installation and Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB Atlas** or local MongoDB instance
- **Docker** and **Docker Compose**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/purvajage/job-application-tracker.git
   cd job-application-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-atlas-uri>
   JWT_SECRET=<your-secret-key>
   ```

4. Run the application locally:
   ```bash
   npm start
   ```

5. Alternatively, run using Docker Compose:
   ```bash
   docker-compose up --build
   ```
---

## Testing

- Use **Postman** or **curl** to test the endpoints.
- Example Postman collection is included in the `tests/` directory.

---

## Docker Setup

### Building the Image

```bash
docker build -t job-tracker-app .
```

### Running the Container

```bash
docker run -p 3000:3000 --env-file .env job-tracker-app
```

### Using Docker Compose

```bash
docker-compose up --build
```

---



---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

