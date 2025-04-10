import { MachineType, MaintenanceIntervalUnit } from '@prisma/client';
import { z } from 'zod';

export const newMachineFormSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required' }),
    serialNumber: z.string().optional(),
    type: z.nativeEnum(MachineType).optional(),
    usageHours: z
      .union([
        z.coerce.number().min(0, { message: 'Usage hours must be a positive number' }),
        z.literal('').transform(() => undefined),
      ])
      .optional(),
    lastService: z.coerce.date().optional(),
    maintenanceIntervalValue: z
      .union([
        z.coerce.number().min(1, { message: 'Maintenance interval must be at least 1' }),
        z.literal('').transform(() => undefined),
      ])
      .optional(),
    maintenanceIntervalUnit: z.nativeEnum(MaintenanceIntervalUnit).optional(),
  })
  .refine(
    data =>
      (data.maintenanceIntervalValue === undefined && data.maintenanceIntervalUnit === undefined) ||
      (data.maintenanceIntervalValue !== undefined && data.maintenanceIntervalUnit !== undefined),
    {
      message: 'Both interval value and unit are required when setting a maintenance interval',
      path: ['maintenanceIntervalValue'],
    },
  );
