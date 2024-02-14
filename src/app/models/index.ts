import mongoose from "mongoose";

interface Db {
  mongoose: typeof mongoose;
  question: any; // Replace 'any' with the actual type of your question model
  answer: any; // Replace 'any' with the actual type of your answer model
  defaultQuestion: any; // Replace 'any' with the actual type of your defaultQuestion model
}

const db: Db = {
  mongoose: mongoose,
  question: require("./question.model"),
  answer: require("./answer.model"),
  defaultQuestion: require("./defaultquestion.model"),
};

mongoose.Promise = global.Promise;

export default db;
