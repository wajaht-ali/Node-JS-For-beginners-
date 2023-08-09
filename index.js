// let a = require('./app.js'); //Common or Old Way to import modules

// import a from './app.js'; // New Way to import modules

// a.average(3,4);

const http = require('http');

const server = http.createServer((request, response) => {

});

server.listen(4000, "localhost", ()=>{
    console.log("server is working!!")
});

