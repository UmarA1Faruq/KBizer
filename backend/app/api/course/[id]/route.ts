/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


// buat variabel prisma
const prisma = new PrismaClient();

export const DELETE = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    try {
        // logic
    } catch (error: any) {
        return NextResponse.json({
            meta_data: {
                error: 1,
                message: "Parameter Slug (ID) Harus Angka!",
                status: 400
            }
        }, {
            status: 400
        })
    }

}
