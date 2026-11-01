const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 9000;

let stu = require('./students.json');

const server = http.createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.end('Welcome to REST API Server');
    }
    else if (req.method == 'GET' && req.url == '/list') {
        res.end(JSON.stringify(stu));
    }
    else if (req.method == 'POST') {
        let s = url.parse(req.url, true).query;
        stu.push(s);
        mywrite();
        res.end('Student Inserted');
    }
    else if (req.method == 'PUT') {
        let s = url.parse(req.url, true).query;
        for (let i in stu) {
            if (stu[i].roll == s.roll) {
                stu[i] = s;
            }
        }
        mywrite();
        res.end('Updated Successfully');
    }
    else if (req.method == 'DELETE') {0
        let s = url.parse(req.url, true).query;
        stu = stu.filter(x => x.roll != s.roll);
        mywrite();
        res.end('Deleted Successfully');
    }
});

function mywrite() {
    fs.writeFileSync('students.json', JSON.stringify(stu));
}

server.listen(port, () => {
    console.log('Server Started on port ' + port);
});
