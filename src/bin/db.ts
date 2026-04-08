import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const MONGO_URI = process.env.MONGO_URI as string;

        if (!MONGO_URI) {
            throw new Error("MongoDB URI is missing");
        }

        await mongoose.connect(MONGO_URI);

        console.log("MongoDB connected");
    } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
    }


};

export default connectDB;

