import { MachineType } from '@prisma/client';

export const MachineTypeLabels: Record<MachineType, string> = {
  CONVEYOR: 'Conveyor',
  PRESS: 'Press',
  CNCMACHINE: 'CNC Machine',
  ROBOTARM: 'Robot Arm',
  PUMP: 'Pump',
  MOTOR: 'Motor',
  COMPRESSOR: 'Compressor',
  FURNACE: 'Furnace',
  PACKAGINGUNIT: 'Packaging Unit',
  INSPECTIONSTATION: 'Inspection Station',
  SENSORARRAY: 'Sensor Array',
  CUSTOM: 'Custom',
};
