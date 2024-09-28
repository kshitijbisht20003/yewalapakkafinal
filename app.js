const express = require("express");
const app = express();
app.set("view engine", "ejs");
// index.js
import http from 'http';

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Write some text to the response
    res.end('Welcome to my simple Node.js app!');
});

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});


app.get("/", function(req, res) {
    res.render("index"); // Use "index" as a string
    
});
app.get("/getsername", function(req, res) {

    res.send("sanisare")
});

app.listen("https://yewalapakkafinal.vercel.app/", () => {
    console.log("Server is running on http://localhost:3000");
});
