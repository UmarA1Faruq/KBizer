/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// buat variabel prisma
const prisma = new PrismaClient();

// Buat service "DELETE" (hapus data) tb_user
export const DELETE = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    try {
        // cek apakah "id" tersedia/tidak
        const checkId = await prisma.tb_user.findUnique({
            where: {
                id: Number(params.id),
            }
        })

        //Kondisi jika data tidak ditemukan
        if (!checkId) {
            return NextResponse.json({
                meta_data: {
                    error: 1,
                    message: "Data User Tidak Ditemukan",
                    status: 404
                },
            }, {
                status: 404
            })
        }

        // Buat proses "DELETE"
        const deleteData = await prisma.tb_user.delete({
            where: {
                id: Number(params.id),
            }
        })

        // tampilkan hasil respon
        return NextResponse.json({
            meta_data: {
                error: 0,
                message: "Data User Berhasil Dihapus",
                status: 200
            },
        }, {
            status: 200
        })
    }
    catch (error: any) {
        // tampilkan hasil respon
        return NextResponse.json({
            meta_data: {
                error: 1,
                message: "Parameter Slug (ID) Harus Angka!",
                status: 400
            },

        }, {
            status: 400
        })
    }
}

// buat service "GET" (detail data) tb_user
export const GET = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    try {
        // cek apakah "id" tersedia/tidak
        const checkId = await prisma.tb_user.findUnique({
            where: {
                id: Number(params.id),
            }
        })

        //Kondisi jika data tidak ditemukan
        if (!checkId) {
            return NextResponse.json({
                meta_data: {
                    error: 1,
                    message: "Data User Tidak Ditemukan",
                    status: 404
                },
            }, {
                status: 404
            })
        }

        // tampilkan hasil respon
        return NextResponse.json({
            meta_data: {
                error: 0,
                message: null,
                status: 200
            },
            data_user: checkId
        }, {
            status: 200
        })
    }
    catch (error: any) {
        // tampilkan hasil respon
        return NextResponse.json({
            meta_data: {
                error: 1,
                message: "Parameter Slug (ID) Harus Angka!",
                status: 400
            },

        }, {
            status: 400
        })
    }
}

// Buat service "PUT" (ubah data) user
export const PUT = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;

    try {
        // cek apakah "id" tersedia/tidak
        const checkId = await prisma.tb_user.findUnique({
            where: {
                id: Number(params.id),
            }
        })

        //Kondisi jika data tidak ditemukan
        if (!checkId) {
            return NextResponse.json({
                meta_data: {
                    error: 1,
                    message: "Data User Tidak Ditemukan",
                    status: 404
                },
            }, {
                status: 404
            })
        }

    const { nama_value, email_value, password_value, peran_value } = await request.json();

    // proses "PUT" data
    const edit = await prisma.tb_user.update({
        where: {
            id: Number(params.id),
        },
        data: {
            nama: nama_value,
            email: email_value,
            password: password_value,
            peran: peran_value
        }
    });

    // tampilkan hasil respon
    return NextResponse.json({
        meta_data: {
            error: 0,
            message: "Data User Berhasil Diubah",
            status: 200
        }
    }, {
        status: 200
    });
}
catch (error: any) {
        return NextResponse.json({
            meta_data: {
                error: 1,
                message: "Parameter Slug (ID) Harus Angka!",
                status: 400
            }
        }, {
            status: 400
        });
    }
}