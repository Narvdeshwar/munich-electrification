import { NextRequest } from "next/server";
import { createTSCController, getAllTSCsController } from "./controller";



export async function POST(req: NextRequest) {
    return createTSCController(req)
}

export async function GET() {
    return getAllTSCsController()
}
