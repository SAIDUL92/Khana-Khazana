import mongoose from "mongoose";

export async function DBConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("contented");
  } catch (error) {
    console.log(error);
  }
}
