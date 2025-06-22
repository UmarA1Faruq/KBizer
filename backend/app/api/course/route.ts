/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// buat variabel prisma
const prisma = new PrismaClient();

// Buat fungsi untuk service "GET"
export const GET = async () => {
    const data = await prisma.tb_course.findMany({});

    // proses "GET" tampil data course
    // Kondisi jika data tidak ditemukan
    if(data.length == 0){
    return NextResponse.json({
        meta_data: {
            error: 1,
            message: "Data Course Tidak Ditemukan",
            status: 404
        },
        data_course: data
    }, {
        status: 404
    })
}

    // tampilkan hasil respon
    return NextResponse.json({
        meta_data:{
            error: 0,
            message: "Data Course Berhasil Ditemukan",
            status: 200
        },
        data_course: data
    },{
        status: 200
    })
}

// Buat service "POST" Course
export const POST = async (request: NextRequest) => {
  
    //  buat variabel object untuk request
    const {judul_value, deskripsi_value, gambar_value, file_value} = await request.json()
}

