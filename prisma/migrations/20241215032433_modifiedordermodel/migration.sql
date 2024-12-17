/*
  Warnings:

  - Added the required column `status` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "orderStatus" AS ENUM ('Pending', 'Complete', 'Cancle');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "orderStatus" NOT NULL;
