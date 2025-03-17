import { NextResponse, NextRequest } from "next/server";
import { createTSCService, getAllTSCsService } from "./service";
import { apiErrorResponse, apiSuccessResponse } from "@/lib/utils/responseHandler";



export async function createTSCController(req: NextRequest) {
    try {
        const data = await req.json();
        const tsc = await createTSCService(data);
        return apiSuccessResponse({ status: 201, message: "Data uploaded successfully", data: tsc })
    } catch (error) {
        console.error("Error in createTSCController:", error);
        return apiErrorResponse({ status: 500, message: "Some Error occurred in uploading the data", error: error })
    }
}
export async function getAllTSCsController() {
    try {
        const tscs = await getAllTSCsService();
        return apiSuccessResponse({ status: 201, message: "Data fetched Successfully", data: tscs })
    } catch (error) {
        return apiErrorResponse({ status: 500, message: "Unable to fetched the data from the server", error: error });
    }
}
