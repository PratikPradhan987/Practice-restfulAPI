import mongoose from "mongoose";
const MONGO_URL = "mongodb://localhost:27017/test";

export function dbconnect() {
        mongoose.Promise = Promise;
        mongoose.connect(MONGO_URL)
        .then(() => {
                console.log(`MongoDB Connected: ${MONGO_URL} {conn.connection.host}`);
        })
        .catch((error) => {
                mongoose.connection.on('error', (error: Error) => console.log(error));
                console.error("not connected");
                process.exit(1);
        })    
}

// export async function dbconnect() {
//         try {
//                 await mongoose.connect(MONGO_URL);
//         } catch (error) {
//                 console.error("not connected");
//                  process.exit(1);
//         }
// }