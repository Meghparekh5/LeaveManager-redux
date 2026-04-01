📋 Leave Manager (Redux Toolkit)

A simple Leave Management System built using React, Redux Toolkit, and JSON Server.
This project allows users to add, view, filter, and search employee leave requests with a clean UI.

🚀 Features

✅ Add new leave requests

✅ View all leave records

✅ Search employees by name

✅ Filter leave type (Sick / Casual / Paid)

✅ Redux Toolkit state management

✅ JSON Server as a fake REST API

✅ Responsive UI

🛠️ Technologies Used
⚛️ React JS
📦 Redux Toolkit
🔄 React Redux
🌐 JSON Server (Fake API)
🎨 CSS

LeaveManager

├── src

│ ├── components

│ │ ├── AddLeave.jsx

│ │ ├── Filter.jsx

│ │ └── LeaveList.jsx

│ ├── features

│ │ └── leaveSlice.js

│ ├── App.jsx

│ ├── main.jsx

│ └── index.css

├── db.json

├── package.json

└── README.md

Clone the repository:

git clone https://github.com/yourusername/leave-manager.git

Go to project folder:

cd leave-manager

Install dependencies:

npm install
▶️ Run the Project

Start React development server:

npm run dev
🗄️ Run JSON Server (Important)

This project uses JSON Server as a backend API.

Install JSON server:

npm install -g json-server

Run the server:

json-server --watch db.json --port 3000

API will run at:

http://localhost:3000/leaves
📌 API Endpoints
Method	Endpoint	Description
GET	/leaves	Get all leave requests
POST	/leaves	Add new leave
DELETE	/leaves/:id	Delete leave
🖼️ Project UI

Main sections of the application:

Add Leave Form
Leave List
Search Employee
Filter Leave Type
📚 Learning Purpose

This project demonstrates:

Redux Toolkit usage
Async Thunks
API integration
State management in React
<img width="1365" height="919" alt="Screenshot" src="https://github.com/user-attachments/assets/e26f4222-174c-4426-9550-33b331ab35f0" />
