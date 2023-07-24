/*
  Warnings:

  - The `schelduleList` column on the `Participants` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Participants" DROP COLUMN "schelduleList",
ADD COLUMN     "schelduleList" JSONB[];
