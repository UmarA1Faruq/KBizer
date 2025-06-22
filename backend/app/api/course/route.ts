import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// buat variabel prisma
const prisma = new PrismaClient();

// Buat fungsi untuk service "GET"
export const GET = async () => {
    const data = await prisma.tb_course.findMany({});

    // proses "GET" tampil data course
    return NextResponse.json({
        meta_data: {
            error: 0,
            message: null,
            status: 200
        },
        data_course: data
    }, {
        status: 200
    });
};
