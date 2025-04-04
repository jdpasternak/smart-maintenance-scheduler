import { Machine } from '@prisma/client';
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { filterRequest } from '@/lib/filter-request';
import { handleApiError } from '@/lib/handle-api-error';
import { prisma } from '@/lib/prisma';

export const GET = auth(async (req: Request) => {
  try {
    filterRequest(req);
    const machineList: Machine[] = await prisma.machine.findMany();
    return NextResponse.json(machineList, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
});
