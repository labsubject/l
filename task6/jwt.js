
const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 6003;
const SECRET_KEY = "mysecretkey";

app.use(express.json());

let stu = require('./students.json');

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "12345") {
        const token = jwt.sign(
            { username: username },
            SECRET_KEY,
            { expiresIn: '1h' }
        );
        res.json({ token });
    } else {
        res.status(401).send("Invalid credentials");
    }
});

// Verify Token
function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token)
        return res.status(403).send("Token missing");

    jwt.verify(token.split(' ')[1], SECRET_KEY, (err, data) => {
        if (err)
            return res.status(403).send("Invalid token");

        req.user = data;
        next();
    });
}

// Home
app.get('/', (req, res) => {
    res.send("JWT Protected REST API");
});

// Get students
app.get('/list', verifyToken, (req, res) => {
    res.json(stu);
});

// Insert student
app.post('/', verifyToken, (req, res) => {
    stu.push(req.body);
    mywrite();
    res.send("Inserted successfully");
});

// Update student
app.put('/', verifyToken, (req, res) => {
    let found = false;

    for (let s of stu) {
        if (s.roll == req.body.roll) {
            s.name = req.body.name;
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
app.delete('/', verifyToken, (req, res) => {
    let oldLength = stu.length;

    stu = stu.filter(s => s.roll != req.body.roll);

    if (stu.length < oldLength) {
        mywrite();
        res.send("Deleted successfully");
    } else {
        res.status(404).send("Student not found");
    }
});

// Save students
function mywrite() {
    fs.writeFileSync(
        './students.json',
        JSON.stringify(stu, null, 2)
    );
}

// Start server
app.listen(port, () => {
    console.log("Server running on port " + port);
});





Operation	Method	URL
Login	POST	http://127.0.0.1:6003/login
Home	GET	http://127.0.0.1:6003/
Display	GET	http://127.0.0.1:6003/list
Insert	POST	http://127.0.0.1:6003/
Update	PUT	http://127.0.0.1:6003/
Delete	DELETE	http://127.0.0.1:6003/


Login Body (JSON):
{"username":"admin","password":"12345"}

Insert Body:
{"roll":3,"name":"Priya"}

Update Body:
{"roll":3,"name":"Anu"}

Delete Body:
{"roll":3}

Important: Copy the login token. For Display, Insert, Update, and Delete, select Authorization → Bearer Token in Postman and paste it.