-- CreateEnum
CREATE TYPE "MachineType" AS ENUM ('Conveyor', 'Press', 'CNC Machine', 'RobotArm', 'Pump', 'Motor', 'Compressor', 'Furnace', 'Packaging Unit', 'Inspection Station', 'Sensor Array', 'Custom');

-- CreateEnum
CREATE TYPE "MaintenanceIntervalUnit" AS ENUM ('HOURS', 'DAYS', 'WEEKS', 'MONTHS', 'YEARS');

-- AlterTable
ALTER TABLE "Machine" ADD COLUMN     "lastService" TIMESTAMP(3),
ADD COLUMN     "maintananceIntervalUnit" "MaintenanceIntervalUnit",
ADD COLUMN     "maintenanceIntervalValue" DOUBLE PRECISION,
ADD COLUMN     "serialNumber" TEXT,
ADD COLUMN     "type" "MachineType",
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "usageHours" DOUBLE PRECISION NOT NULL DEFAULT 0;
