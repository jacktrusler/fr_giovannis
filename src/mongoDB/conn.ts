import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGODB_URI as string)
    if(connection.readyState == 1) {
      console.log("Database Connected!")
    }
  } catch(err) {
    return Promise.reject(err)
  }
}
