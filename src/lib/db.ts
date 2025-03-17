import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "";


if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is missing in environment variables!");
    process.exit(1);
}

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            
            console.log("✅ Database is already connected!");
            return;
        }

        await mongoose.connect(MONGODB_URI, {
            dbName: "munich"
        });

        console.log("🚀 New Database Connection Established");
    } catch (error) {
        console.error("❌ Database Connection Error:", error);
        process.exit(1); // Exit if connection fails
    }
};
