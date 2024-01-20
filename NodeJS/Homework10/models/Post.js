const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Post Schema
const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: {
    type: Date,
    default: () => new Date(),
  }
});

module.exports = mongoose.model("Post", postSchema);