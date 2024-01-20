const Post = require("../models/Post");

exports.showAboutPage =  (req, res) => {
  res.render("about");
}

exports.showAddPage = (req, res) => {
  res.render("add_post");
}

exports.showEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit_post", { post });
}