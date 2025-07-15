
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

- Use **Postman** to test the endpoints.
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

