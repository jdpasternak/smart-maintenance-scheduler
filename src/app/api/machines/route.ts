import { NextResponse } from 'next/server';
import { logError } from '@/lib/logger';
import { prisma } from '@/lib/prisma';

export const GET = async () => {
  try {
    const machineList = await prisma.machine.findMany();
    return NextResponse.json(machineList);
  } catch (error) {
    logError('GET /api/machines failed', { error });
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
