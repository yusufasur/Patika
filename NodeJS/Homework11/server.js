const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController");

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
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));

// Routes
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/add-post", postController.createPost);
app.put("/update-post/:id", postController.updatePost);
app.delete("/delete-post/:id", postController.deletePost);

app.get("/about", pageController.showAboutPage);
app.get("/add_post", pageController.showAddPage);
app.get("/edit-post/:id", pageController.showEditPage);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
