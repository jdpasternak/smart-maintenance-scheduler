import { MachineType, MaintenanceIntervalUnit } from '@prisma/client';
import { z } from 'zod';

export const newMachineFormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .max(100, { message: 'Name is too long' }),
    serialNumber: z.string().max(100, 'Serial number is too long').optional(),
    type: z.nativeEnum(MachineType).optional(),
    usageHours: z
      .union([
        z.coerce.number().min(0, { message: 'Usage hours must be a positive number' }),
        z.literal('').transform(() => undefined),
      ])
      .optional(),
    lastServiceDt: z.coerce
      .date()
      .max(new Date(new Date().setDate(new Date().getDate() + 1)), 'Last service date must be today or before'),
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
