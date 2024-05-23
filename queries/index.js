import mongoose from "mongoose";
import { userModel } from "@/models/userModel";
import { recipeModel } from "@/models/recipesModel";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";
import DBConnect from "@/services";

async function getAllRecipes() {
  await DBConnect();
  const allRecipes = await recipeModel.find().lean();

  return replaceMongoIdInArray(allRecipes);
}

async function getRecipestById(recipeId) {
  await DBConnect();
  const recipe = await recipeModel.findById(recipeId).lean();
  return replaceMongoIdInObject(recipe);
}

async function getRecipestByCategory(recipeCategory) {
  await DBConnect();
  const recipe = await recipeModel.find({ category: recipeCategory }).lean();
  return replaceMongoIdInArray(recipe);
}

async function createUser(user) {
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function updateFavourite(recipeId, authId) {
  const user = await userModel.findById(authId);

  if (user) {
    const foundRecipe = user.favourites.find(
      (id) => id.toString() === recipeId
    );

    if (foundRecipe) {
      user.favourites.pull(new mongoose.Types.ObjectId(recipeId));
    } else {
      user.favourites.push(new mongoose.Types.ObjectId(recipeId));
    }
    return user.save();
  }
}

export {
  getAllRecipes,
  getRecipestById,
  createUser,
  findUserByCredentials,
  getRecipestByCategory,
  updateFavourite,
};
