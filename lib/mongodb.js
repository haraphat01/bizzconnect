import mongoose from "mongoose";
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_KEY )
        console.log("connected to mongoose")
    } catch (error) {
        console.log("Error connecting to the database")
    }
}
