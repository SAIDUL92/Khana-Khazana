import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
  name: String,
  description: String,
  author: String,
  activeTime: String,
  totalTime: String,
  thumbnail: String,
  image: String,
  category: String,
  serves: Number,
  rating: Number,
  steps: [],
});

export const recipeModel =
  mongoose.models.recipes || mongoose.model("recipes", recipeSchema);
