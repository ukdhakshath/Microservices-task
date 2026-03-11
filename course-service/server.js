const express = require("express");

const app = express();

app.use(express.json());

let courses = [
    { id: 1, title: "Node.js" },
    { id: 2, title: "React" }
];

// GET courses
app.get("/courses", (req, res) => {
    res.json(courses);
});

// CREATE course
app.post("/courses", (req, res) => {

    const newCourse = {
        id: courses.length + 1,
        title: req.body.title
    };

    courses.push(newCourse);

    res.status(201).json(newCourse);
});

app.listen(3002, () => {
    console.log("Course Service running on port 3002");
});