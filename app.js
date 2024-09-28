const express = require("express");
const http = require("http");

const app = express();


app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("index"); 
});


app.get("/getsername", function(req, res) {
    res.send("sanisare");
});


const port = 4000; // Change to a different port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
