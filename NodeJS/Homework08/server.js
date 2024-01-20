const express = require("express");
const app = express();
const port = 3000;

// Template Engine
app.set("view engine", "ejs");

// Static Files
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
