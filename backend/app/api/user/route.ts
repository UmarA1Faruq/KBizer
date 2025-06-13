/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { genSaltSync, hashSync } from "bcrypt-ts";
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

  // Validasi email unik
  const checkEmail = await prisma.tb_user.findMany({
    where: {
      email: email_value
    }
  });

  if (checkEmail.length >= 1) {
    return NextResponse.json({
      meta_data: {
        error: 1,
        message: "Data User Gagal Disimpan! Email Sudah Terdaftar!",
        status: 400
      }
    }, {
      status: 400
    });
  }

  // Enkripsi password
  const password_salt = genSaltSync(10);
  const password_result = hashSync(password_value, password_salt);

  const save = await prisma.tb_user.create({
    data: {
      nama: nama_value,
      email: email_value,
      password: password_result,
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