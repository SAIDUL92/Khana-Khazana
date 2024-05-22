"use server";

import { createUser, findUserByCredentials, updateFavourite } from "@/queries";
import { replaceMongoIdInObject } from "@/utils";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredentials(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

async function addFavourite(recipeId, authId, currentPath) {
  try {
    const updateFavouriteData = await updateFavourite(recipeId, authId);
    return replaceMongoIdInObject(
      JSON.parse(JSON.stringify(updateFavouriteData))
    );
  } catch (error) {
    throw error;
  }
}

export { registerUser, performLogin, addFavourite };
