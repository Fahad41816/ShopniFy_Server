-- AlterTable
ALTER TABLE "shop" ALTER COLUMN "followers" DROP NOT NULL,
ALTER COLUMN "followers" SET DATA TYPE TEXT;