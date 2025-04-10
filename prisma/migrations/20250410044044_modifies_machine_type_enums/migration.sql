/*
  Warnings:

  - The values [Conveyor,Press,CNC Machine,RobotArm,Pump,Motor,Compressor,Furnace,Packaging Unit,Inspection Station,Sensor Array,Custom] on the enum `MachineType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MachineType_new" AS ENUM ('CONVEYOR', 'PRESS', 'CNCMACHINE', 'ROBOTARM', 'PUMP', 'MOTOR', 'COMPRESSOR', 'FURNACE', 'PACKAGINGUNIT', 'INSPECTIONSTATION', 'SENSORARRAY', 'CUSTOM');
ALTER TABLE "Machine" ALTER COLUMN "type" TYPE "MachineType_new" USING ("type"::text::"MachineType_new");
ALTER TYPE "MachineType" RENAME TO "MachineType_old";
ALTER TYPE "MachineType_new" RENAME TO "MachineType";
DROP TYPE "MachineType_old";
COMMIT;
