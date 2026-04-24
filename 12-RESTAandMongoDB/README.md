# 🧪 EXPERIMENT: Build REST API using MongoDB

To build a RESTful API using MongoDB for storing and retrieving data.

🧠 CONCEPT 

✔️ What is REST API?
REST API is used to perform CRUD operations using HTTP methods. 

Method	Work
GET	Fetch data
POST	Insert data
PUT	Update data
DELETE	Delete data

✔️ What is MongoDB?
MongoDB is a NoSQL database that stores data in JSON format. It is flexible and scalable, making it ideal for modern web applications.


⚙️ SOFTWARE REQUIRED
Fedora OS 🐧
Node.js
MongoDB
Postman / Browser


🔧 STEP-BY-STEP PROCEDURE

✅ Step 1: Install MongoDB
sudo dnf install mongodb-server -y

▶️ Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

✔️ Check Status
sudo systemctl status mongod

👉 Should show active (running)

✅ Step 2: Install Node.js
sudo dnf install nodejs -y

Check:
node -v
npm -v

✅ Step 3: Create Project Folder
mkdir restapi
cd restapi

✅ Step 4: Initialize Project
npm init -y

✅ Step 5: Install Packages
npm install express mongoose body-parser

✅ Step 6: Create Server File
nano server.js

✅ Step 7: Write Code

▶️ Step 8: Run Server
node server.js

👉 Output:
MongoDB Connected
Server running on port 3000


✅ TESTING 

🔹 1. GET
Open browser:
http://localhost:3000/students

🔹 2. POST (Use Postman)
Method: POST
URL:
http://localhost:3000/students
Body (JSON):
{
  "name": "Vaishnavi",
  "age": 20
}

🔹 3. PUT
http://localhost:3000/students/<id>

🔹 4. DELETE
http://localhost:3000/students/<id>


🧠 Flow
Client → API → MongoDB → Response → Client


📚 THEORY

A RESTful API is used to perform CRUD operations using HTTP methods.
MongoDB is a NoSQL database used to store data in JSON format.
In this experiment, Express.js is used to create API endpoints and Mongoose is used to interact with MongoDB.


📊 OUTPUT 

The REST API successfully performed CRUD operations on student data stored in MongoDB.


🎤 VIVA QUESTIONS 

❓ What is REST API?
Interface using HTTP methods to access data.

❓ What is MongoDB?
NoSQL database storing JSON data.

❓ What is Mongoose?
Library to interact with MongoDB.

❓ Difference SQL vs MongoDB?
SQL → tables
MongoDB → collections

❓ What is Schema?
Structure of data