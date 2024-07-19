/*
  Warnings:

  - You are about to drop the `Audit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Audit";

-- CreateTable
CREATE TABLE "AuditTrail" (
    "id" SERIAL NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "details" JSONB NOT NULL DEFAULT '{}',
    "userId" INTEGER NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditTrail_pkey" PRIMARY KEY ("id")
);
