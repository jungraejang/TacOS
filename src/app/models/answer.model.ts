import mongoose from "mongoose";

const Answer = mongoose.model(
  "Answer",
  new mongoose.Schema({
    answer: String,
    postedBy: String,
    postedAt: Date,
    image: String,
  })
);

module.exports = Answer;
