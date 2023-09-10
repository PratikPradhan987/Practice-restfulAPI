import mongoose from "mongoose";
const MONGO_URL = "mongodb://localhost:27017/test";

export function dbconnect() {
        mongoose.Promise = Promise;
        mongoose.connect(MONGO_URL);
        mongoose.connection.on('error', (error: Error) => console.log(error));
        console.log(`MongoDB Connected: {conn.connection.host}`);
}
