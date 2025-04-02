import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { filterRequest } from '@/lib/filter-request';
import { handleApiError } from '@/lib/handle-api-error';
import { NextAuthRequest } from '@/lib/interfaces';
import { prisma } from '@/lib/prisma';

export const GET = auth(async (request: NextAuthRequest): Promise<NextResponse> => {
  try {
    filterRequest(request);
    const machineList = await prisma.machine.findMany();
    return NextResponse.json(machineList);
  } catch (error) {
    return handleApiError(error);
  }
});
