/*
  Warnings:

  - You are about to drop the column `marketOne` on the `weekly_prices` table. All the data in the column will be lost.
  - You are about to drop the column `marketThree` on the `weekly_prices` table. All the data in the column will be lost.
  - You are about to drop the column `marketTwo` on the `weekly_prices` table. All the data in the column will be lost.
  - Added the required column `current_weekday` to the `weekly_prices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previous_week_day` to the `weekly_prices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "weekly_prices" DROP COLUMN "marketOne",
DROP COLUMN "marketThree",
DROP COLUMN "marketTwo",
ADD COLUMN     "current_weekday" VARCHAR NOT NULL,
ADD COLUMN     "previous_week_day" VARCHAR NOT NULL;
