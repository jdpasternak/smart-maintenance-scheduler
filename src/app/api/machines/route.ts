import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";

export const GET = async () => {
    const machineList = await prisma.machine.findMany();
    return NextResponse.json(machineList);
}