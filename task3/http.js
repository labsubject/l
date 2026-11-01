const hp = require('http');
const port = 9000;

const server = hp.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});

    if (request.url == "/home") {
        response.write("<h1 style='color:red'>Welcome to home page of my website</h1>");
        response.write("<h2>Home page</h2>");
        response.end();
    }

else if (request.url == "/login") {
        response.write("<h1 style='color:red'>Welcome to Login page of my website</h1>");
        response.write("<h2>Login page</h2>");
        response.end();
    }
});

server.listen(port, function() {
    console.log("Server Started...");
    console.log("Server is listening on " + port);
});