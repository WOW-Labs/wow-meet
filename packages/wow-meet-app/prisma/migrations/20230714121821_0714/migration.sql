/*
  Warnings:

  - A unique constraint covering the columns `[meetingId]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[meetingId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Schedule_meetingId_key" ON "Schedule"("meetingId");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_meetingId_key" ON "Vote"("meetingId");
