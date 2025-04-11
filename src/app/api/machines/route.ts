import { Machine } from '@prisma/client';
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { filter } from '@/lib/filter-request';
import { handleApiError } from '@/lib/handle-api-error';
import { prisma } from '@/lib/prisma';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (req: Request) => {
  try {
    const session = await auth();
    filter(session);
    const machineList: Machine[] = await prisma.machine.findMany();
    return NextResponse.json(machineList, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
};

export const POST = async (req: Request) => {
  try {
    const session = await auth();
    filter(session);
    const body = await req.json();
    console.log(body);
    const newMachine: Machine = await prisma.machine.create({
      data: body,
    });
    return NextResponse.json(newMachine, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
};

export const PUT = async (req: Request) => {
  try {
    const session = await auth();
    filter(session);
    const body = await req.json();
    const updatedMachine: Machine = await prisma.machine.update({
      where: { id: body.id },
      data: body,
    });
    return NextResponse.json(updatedMachine, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
};

export const DELETE = async (req: Request) => {
  try {
    const session = await auth();
    filter(session);
    const body = await req.json();
    const deletedMachine: Machine = await prisma.machine.delete({
      where: { id: body.id },
    });
    return NextResponse.json(deletedMachine, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
};
