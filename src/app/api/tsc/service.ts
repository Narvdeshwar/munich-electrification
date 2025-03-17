import { connectDB } from "@/lib/db";
import TSC from "@/lib/models/TscModels";

export const createTSCService = async (data: any) => {
    await connectDB();
    return await TSC.create(data);
}

export const getAllTSCsService = async () => {
    await connectDB();
    try {
        return await TSC.find();
    } catch (error) {
        throw new Error("Error fetching TSCs data")
    }
}