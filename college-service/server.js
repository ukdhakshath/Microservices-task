const express = require("express");

const app = express();

app.use(express.json());

let colleges = [
    { id: 1, name: "MIT Mysore" },
    { id: 2, name: "SJCE Mysore" }
];

// GET colleges
app.get("/colleges", (req, res) => {
    res.json(colleges);
});

// ADD college
app.post("/colleges", (req, res) => {

    const newCollege = {
        id: colleges.length + 1,
        name: req.body.name
    };

    colleges.push(newCollege);

    res.status(201).json(newCollege);
});

app.listen(3003, () => {
    console.log("College Service running on port 3003");
});