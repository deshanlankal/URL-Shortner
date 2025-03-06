import mongoose from "mongoose";

const dbConfig = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Connected to database: ", connect.connection.name); 
  } catch (error: any) {
    console.log("Error connecting to database: ", error);
    process.exit(1);
  }
};

export default dbConfig;