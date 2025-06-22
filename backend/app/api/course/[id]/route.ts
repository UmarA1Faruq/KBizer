/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


// buat variabel prisma
const prisma = new PrismaClient();

export const DELETE = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    try {
        // cek apakah "id" tersedia/tidak
        const checkId = await prisma.tb_course.findUnique({
            where: {
                id: Number(params.id),
            }
        })

        //Kondisi jika data tidak ditemukan
        if (!checkId) {
            return NextResponse.json({
                meta_data: {
                    error: 1,
                    message: "Data Course Tidak Ditemukan",
                    status: 404
                },
            }, {
                status: 404
            })
        }

        // Buat proses "DELETE"
        const deleteData = await prisma.tb_course.delete({
            where: {
                id: Number(params.id),
            }
        })

        // tampilkan hasil respon
        return NextResponse.json({
            meta_data: {
                error: 0,
                message: "Data Course Berhasil Dihapus",
                status: 200
            },

        }, {
            status: 200
        })

    } catch (error: any) {
        // tampilkan hasil respon
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

// buat service "GET" (detail data) Course
export const GET = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;

    try {
        // cek apakah "id" tersedia/tidak
        const checkId = await prisma.tb_course.findUnique({
            where: {
                id: Number(params.id),
            }
        })

        //Kondisi jika data tidak ditemukan
        if (!checkId) {
            return NextResponse.json({
                meta_data: {
                    error: 1,
                    message: "Data Course Tidak Ditemukan",
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
                message: "Data Course Berhasil Ditemukan",
                status: 200
            },
            data_course: checkId
        }, {
            status: 200
        })

    } catch (error: any) {
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

// Buat service "PUT" (ubah data) Course
export const PUT = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;

}
