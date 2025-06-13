/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


// buat variabel prisma
const prisma = new PrismaClient

// buat fungsi untuk service "GET"
export const GET = async (respon: NextRequest) => {
    // proses "GET" (tampil data) tb_user
    const data = await prisma.tb_user.findMany({})

    //Kondisi jika data tidak ditemukan
    if(data.length == 0)
    {
        return NextResponse.json({
            meta_data:{
                error: 1,
                message: "Data User Tidak Ditemukan",
                status: 404
            },
        },{
            status: 404
        })
    }
    // tampilkan hasil respon
    return NextResponse.json({
        meta_data:{
            error: 0,
            message: null,
            status: 200
        },
        data_user: data
    },{
        status: 200
    })
}

// Buat Service "POST" tb_user
export const POST = async (request: NextRequest) => {
  const { nama_value, email_value, password_value, peran_value } = await request.json();

  const save = await prisma.tb_user.create({
    data: {
      nama: nama_value,
      email: email_value,
      password: password_value,
      peran: peran_value || "USER"
    }
  });

  return NextResponse.json({
    meta_data: {
      error: 0,
      message: "Data User Berhasil Ditambah",
      status: 201
    }
  }, {
    status: 201
  });
};