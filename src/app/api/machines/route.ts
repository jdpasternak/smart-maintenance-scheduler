import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { NextAuthRequest } from '@/lib/interfaces';
import { filterRequest } from '@/lib/filter-request';
import { handleApiError } from '@/lib/handle-api-error';

export const GET = auth(async (request: NextAuthRequest): Promise<NextResponse> => {
  try {
    filterRequest(request);
    const machineList = await prisma.machine.findMany();
    return NextResponse.json(machineList);
  } catch (error) {
    return handleApiError(error);
  }
});
