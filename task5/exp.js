
const express = require('express');
const fs = require('fs');
const bp = require('body-parser');

const app = express();
const port = 6000;

let stu = require('./students.json');

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// Home
app.get('/', (req, res) => {
    res.send("Welcome to Express REST API SERVER");
});

// Get all students
app.get('/list', (req, res) => {
    res.json(stu);
});

// Insert student
app.post('/', (req, res) => {
    if (!req.body || !req.body.roll || !req.body.name) {
        return res.status(400).send("Invalid student data");
    }

    stu = stu.filter(x => x !== null);
    stu.push(req.body);

    mywrite();
    res.send("Inserted successfully");
});

// Update student
app.put('/', (req, res) => {
    let s = req.body;

    if (!s || !s.roll || !s.name) {
        return res.status(400).send("Invalid student data");
    }

    let found = false;

    for (let i in stu) {
        if (stu[i] && stu[i].roll == s.roll) {
            stu[i].name = s.name;
            found = true;
            break;
        }
    }

    if (found) {
        mywrite();
        res.send("Updated successfully");
    } else {
        res.status(404).send("Student not found");
    }
});

// Delete student
app.delete('/', (req, res) => {
    let s = req.body;

    if (!s || !s.roll) {
        return res.status(400).send("Invalid roll number");
    }

    let oldLength = stu.length;

    stu = stu.filter(x => x && x.roll != s.roll);

    if (stu.length === oldLength) {
        return res.status(404).send("Student not found");
    }

    mywrite();
    res.send("Deleted successfully");
});

// Write data to students.json
function mywrite() {
    fs.writeFileSync(
        './students.json',
        JSON.stringify(stu, null, 2)
    );
}

// Start server
app.listen(port, () => {
    console.log("Server started on port " + port);
});



npm install express
npm init express