/*
  Warnings:

  - A unique constraint covering the columns `[tranId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Order_tranId_key" ON "Order"("tranId");
