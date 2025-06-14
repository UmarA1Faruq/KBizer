/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// buat variabel prisma
const prisma = new PrismaClient();

// Buat service "DELETE" (hapus data) tb_user
export const DELETE = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;

  // Buat proses "DELETE"
  const deleteData = await prisma.tb_user.delete({
    where: {
      id: Number(params.id),
    }
  });

  // tampilkan hasil respon
  return NextResponse.json({
    meta_data: {
      error: 0,
      message: "Data User Berhasil Dihapus",
      status: 200
    }
  }, {
    status: 200
  });
};
