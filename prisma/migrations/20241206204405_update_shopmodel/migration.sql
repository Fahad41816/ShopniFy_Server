/*
  Warnings:

  - Added the required column `about` to the `shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bannerImage` to the `shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shop" ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "bannerImage" TEXT NOT NULL;
