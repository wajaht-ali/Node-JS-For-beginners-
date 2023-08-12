// let a = require('./app.js'); //Common or Old Way to import modules

// import a from './app.js'; // New Way to import modules

// a.average(3,4);

// const http = require('http');
// const fs = require('fs');

// const home = fs.readFileSync('./index.html', 'utf-8');
// const PORT = 4000;
// const hostname = "localhost";

//  http.createServer(function(req, res) {
//         if(req.url === '/') {
//            return res.end(home);
//         }
//         else if(req.url === '/about') {
//             return res.end('<h1> ABOUT </h1>');
//         }
//         else if(req.url === '/contact') {
//             return res.end('<h1> CONTACT </h1>');
//         }
//         else {
//             return res.end("<h1>PAGE NOT FOUND</h1>");
//         }
//         // console.log(req.url);
// }).listen(4000, "localhost");
// console.log(`http://${hostname}:${PORT}`)

//TESTING...
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World');
// }).listen(8000, 'localhost');
// console.log('Server running at http://localhost:8000/');

const http = require('http');
const fs = require('fs');
const home = fs.readFileSync("./index.html");
const PORT = 5000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    if(req.url === "/") {
       return res.end(home);
    }
    else if (req.url === "/about") {
        return res.end("<h1> Wajahat Ali </h1>");
    }
    else {
        return res.end("<h1> Page Not Found. </h1>")
    }
});

server.listen(PORT, hostname);
console.log(`server is working on http://${hostname}:${PORT}`);