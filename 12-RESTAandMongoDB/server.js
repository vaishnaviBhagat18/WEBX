const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model('Student', studentSchema);

// 🔹 GET
app.get('/students', async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

// 🔹 POST
app.post('/students', async (req, res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.send("Student Added");
});

// 🔹 PUT
app.put('/students/:id', async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send("Student Updated");
});

// 🔹 DELETE
app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student Deleted");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
