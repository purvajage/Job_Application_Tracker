# Job Application Tracker

The **Job Application Tracker** is a full-stack application built with **Node.js**, **Express**, and **MongoDB** (or SQL/NoSQL). This system enables users to track their job applications, apply for jobs, view application status, and receive notifications. It supports user authentication, role-based access control, and advanced filtering for managing job applications efficiently.

---

## Requirements

- **Node.js** (v14 or higher)
- **MongoDB** (local or MongoDB Atlas for cloud database)
- **Postman** or similar tool for API testing
- **JWT Authentication** for user authorization

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/purvajage/Job_Application_Tracker.git
   cd job-application-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   DB_URI=mongodb://localhost:27017/jobtracker  # or MongoDB Atlas URI
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The application will start on port 5000 by default. You can now access the API at `http://localhost:5000`.

---

## Testing

You can test the endpoints using Postman by sending appropriate HTTP requests with the required headers and body.

### Example Postman Setup:

- Use **POST** for authentication and job applications.
- Use **GET** for retrieving data (applications, roles, etc.).
- Provide JWT token in the Authorization header.

