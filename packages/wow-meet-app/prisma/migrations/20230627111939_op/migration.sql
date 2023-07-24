-- AlterTable
ALTER TABLE "Participants" ALTER COLUMN "schelduleList" DROP NOT NULL,
ALTER COLUMN "schelduleList" SET DATA TYPE TEXT;
