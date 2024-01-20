const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Post");

const app = express();
const port = 3000;

// Mongo DB Connection
mongoose
  .connect("mongodb://127.0.0.1/cleanblog-test-db")
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Template Engine
app.set("view engine", "ejs");

// Static Files - Middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  const posts = await Post.find()
  res.render("index", {posts});
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.post("/add-post", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
