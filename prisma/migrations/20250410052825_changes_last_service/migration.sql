/*
  Warnings:

  - You are about to drop the column `lastService` on the `Machine` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Machine" DROP COLUMN "lastService",
ADD COLUMN     "lastServiceDt" TIMESTAMP(3);
