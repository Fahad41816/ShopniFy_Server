-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('IN_STOCK', 'OUT_OF_STOCK');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "Availability" "Availability" NOT NULL DEFAULT 'IN_STOCK';
