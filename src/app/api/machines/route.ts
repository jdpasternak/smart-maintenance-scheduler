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
