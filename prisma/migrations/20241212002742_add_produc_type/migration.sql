-- CreateEnum
CREATE TYPE "productTypes" AS ENUM ('special', 'latest', 'newbie', 'normal');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "productType" "productTypes" NOT NULL DEFAULT 'normal';
