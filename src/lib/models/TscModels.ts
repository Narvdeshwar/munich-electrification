import mongoose, { Schema, Document, Model } from "mongoose";

// ✅ Step 1: Define ITSC Interface (Do NOT extend Document here)
interface ITSC {
    name: string;
    id: string;
    models: string;
    make: string;
    createTime: Date;
    status: "Online" | "Offline";
    group: string;
    actions: {
        edit: boolean;
        delete: boolean;
        view: boolean;
    };
}

// ✅ Step 2: Define Mongoose Schema
const TSCSchema = new Schema<ITSC & Document>({
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    models: { type: String, required: true },
    make: { type: String, required: true },
    createTime: { type: Date, default: Date.now },
    status: { type: String, enum: ["Online", "Offline"], default: "Offline" },
    group: { type: String, required: true },
    actions: {
        edit: { type: Boolean, default: true },
        delete: { type: Boolean, default: false },
        view: { type: Boolean, default: true },
    },
});

// ✅ Step 3: Define & Export Model
const TSC: Model<ITSC & Document> = mongoose.models.TSC || mongoose.model<ITSC & Document>("TSC", TSCSchema);

export default TSC;
