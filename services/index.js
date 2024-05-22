import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const cached = {};

async function DBConnect() {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    );
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opts = {
      dbName: "khanaKhazana",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: true,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
    console.log("database connected successfully!");
  } catch (e) {
    cached.promise = undefined;
    throw e;
  }
  return cached.connection;
}

export default DBConnect;
