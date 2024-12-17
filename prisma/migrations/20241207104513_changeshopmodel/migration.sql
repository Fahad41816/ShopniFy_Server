-- CreateEnum
CREATE TYPE "ShopStatus" AS ENUM ('blackList', 'Progress', 'Pending');

-- AlterTable
ALTER TABLE "shop" ADD COLUMN     "status" "ShopStatus",
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "about" DROP NOT NULL,
ALTER COLUMN "bannerImage" DROP NOT NULL;
