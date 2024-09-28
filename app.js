const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index"); // Use "index" as a string
    
});
app.get("/getsername", function(req, res) {

    res.send("sanisare")
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
