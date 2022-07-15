import mongoose from "mongoose";
import { DATABASE_URI } from "./env.js"

export const dbConnect = () => {
    try {
        mongoose.connect(DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 3000,
            socketTimeoutMS: 3000,
        });
    } catch (err) {
        console.error(err);
    }
};
