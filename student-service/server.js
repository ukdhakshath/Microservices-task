const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Anita", age: 21 }
];

// GET students
app.get("/students", (req, res) => {
    res.json(students);
});

// GET student by id
app.get("/students/:id", (req, res) => {

    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// CREATE student
app.post("/students", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

app.listen(3001, () => {
    console.log("Student Service running on port 3001");
});