/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


// buat variabel prisma
const prisma = new PrismaClient();

export const DELETE = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
  
};
