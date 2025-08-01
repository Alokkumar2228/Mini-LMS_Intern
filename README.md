# Mini-Learning Management System (Mini-LMS)

A modern Learning Management System built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to browse courses, enroll in them, and track their learning progress.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Course Management**: Browse and enroll in available courses
- **Profile Dashboard**: Track enrolled courses and progress
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Real-time Updates**: Instant enrollment status updates
- **Protected Routes**: Secure access to user-specific content

## 🛠️ Tech Stack

### Frontend
- React 19.1.0
- React Router DOM 7.7.1
- React Bootstrap 2.10.10
- Axios for API calls
- React Icons
- Context API for state management

### Backend
- Node.js
- Express.js 5.1.0
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- CORS enabled

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB account and database
- Git

### Setting Up the Project

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/lms-intern.git
cd lms-intern

2 .Set up the backend

cd server
npm install

# Create a .env file in the server directory with:
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

3. Set up the frontend

cd client
npm install


🚀 Running the Application

 1.Start the backend server

 cd server
npm run dev
# Server will start on http://localhost:3000

2.Start the frontend development server

cd client
npm run dev
# Client will start on http://localhost:5173

🔑 Environment Variables

Backend (.env)

MONGO_URL=mongodb+srv:/your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Frontend
The frontend uses environment variables for API endpoints. Create a .env file in the client directory:

VITE_API_URL=http://localhost:3000/api

📁 Project Structure

lms-intern/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── context/       # React Context providers
│   │   ├── pages/        # Page components
│   │   └── assets/       # Static assets
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── controllers/      # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    ├── middleware/      # Custom middleware
    └── package.json


🔒 API Endpoints
Authentication
POST /api/register - Register new user
POST /api/login - User login
Courses
GET /api/course - Get all courses
POST /api/courses - Create new course
Enrollments
GET /api/enrollments/me - Get user's enrollments
POST /api/enrollments - Enroll in a course
GET /api/enrollments/profile - Get user profile with enrollments

🤝 Contact
Alok Kumar Singh - alkhmeist@gmail.com
Project Link: https://github.com/Alokkumar2228

Made with ❤️ by Alok Kumar Singh
