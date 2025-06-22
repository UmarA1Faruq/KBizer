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

        //  buat variabel object untuk request
        const {judul_value, deskripsi_value, gambar_value, file_value} = await request.json()

        // cek apakah judul sudah pernah dibuat / belum
        const checkJudul = await prisma.tb_course.findMany({
            where:{
                judul: judul_value,
                NOT:{
                    id: Number(params.id)
                }
            }
        })

        // Jika judul ditemukan
        if(checkJudul.length >=1)
            {
                return NextResponse.json({
                    meta_data:{
                        error: 1,
                        message: "Data Course Gagal Disimpan! Judul Sudah Terdaftar!",
                        status: 400
                    },
                },{
                    status: 400
                })
            }

        // proses PUT data
        const edit = await prisma.tb_course.update({
            where: {
                id: Number(params.id),
            },
            data: {
                judul: judul_value,
                deskripsi: deskripsi_value,
                gambar: gambar_value,
                file: file_value
              }
        })


    } catch (error: any) {

    }

}
