import { NextResponse } from "next/server";

interface successResponse {
    status: number;
    message: String;
    data?: any
}


/**
 * @param {successResponse} options - The success response options
 * @returns {NextResponse} - The formatted success response
 */

export function apiSuccessResponse({ status = 200, message = "Respose Send successfully", data = null }: successResponse) {
    return NextResponse.json({ success: true, message, data, status })
}

interface errorResponse {
    status: number;
    message: String
    error?: any
}

/**
 * @param {errorResponse} options - The error response options
 * @returns {NextResponse} - The formatted error response
 */

export function apiErrorResponse({ status = 500, message = "Internal Server error!", error = "" }: errorResponse) {
    return NextResponse.json({ success: false, message, error })
}