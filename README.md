# Employee Data Management App
This project is a full-stack Employee Data Management application built with React for the frontend, Express for the backend, and MongoDB for data storage. The application allows users to perform basic CRUD operations (Create, Read, Update, Delete) on employee records.


# Features
Add New Employee: Users can add employees by filling out a form with fields such as name, employee ID, designation, department, and phone number.

Update Employee: Modify the details of an existing employee.

Delete Employee: Remove an employee from the system.

Responsive UI: Fully responsive UI design using TailwindCSS, adaptable to various screen sizes.

Success/Error Notifications: User-friendly notifications are shown for actions like adding, updating, or deleting employees, powered by react-toastify.

REST API Integration: Communicates with a backend API for managing employee data, using Express and Mongoose.

# Installation
To get this project up and running on your local machine, follow the steps below:

Prerequisites

Node.js (v16 or higher)

MongoDB (local instance or cloud service like MongoDB Atlas)

Clone the Repository

# git clone https://github.com/your-username/employee-data-management-app.git

cd employee-data-management-app

Frontend Setup

Navigate to the frontend directory:

cd frontend
Install frontend dependencies:

npm install

Create a .env file in the frontend folder and add the following variable:
# .env

# VITE_URL=http://localhost:5000

Run the frontend in development mode:

npm run dev
The frontend will be running at http://localhost:5173.

Backend Setup
Navigate to the backend directory:

cd backend
Install backend dependencies:

npm install
Set up environment variables by creating a .env file in the backend folder:

# .env

MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the backend server:

npm run dev
The backend will be running at http://localhost:5000.

# Technologies Used

# Frontend

React: For building user interfaces.

React Router DOM: For routing.

React Icons: For iconography.

React Toastify: For notification alerts.

TailwindCSS: For responsive and modern styling.

Vite: For development tooling and build.

# Backend

Express.js: A minimal Node.js framework for building REST APIs.

Mongoose: For interacting with MongoDB databases.

Nodemon: For auto-reloading the server during development.

CORS: To enable Cross-Origin Resource Sharing.


# Screenshots of App


![App Screenshot 1](public/Images/DataTable.png)
*Example of the Employee Data Management dashboard.*

![App Screenshot 2](public/Images/AddEmployee.png)
*Form to Add a New Employee.*

![App Screenshot 3](public/Images/UdateEmployee.png)
*Update and Delete options for Employee records.*