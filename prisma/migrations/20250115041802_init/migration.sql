-- CreateEnum
CREATE TYPE "Title" AS ENUM ('MR', 'MRS', 'MISS');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('ACCOUNTING', 'FINANCE', 'HR', 'IT', 'SALES', 'MARKETING');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "title" "Title" NOT NULL,
    "firstNameTh" TEXT NOT NULL,
    "lastNameTh" TEXT NOT NULL,
    "firstNameEn" TEXT NOT NULL,
    "lastNameEn" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "department" "Department" NOT NULL,
    "email" TEXT NOT NULL,
    "useNas" BOOLEAN NOT NULL DEFAULT false,
    "useInternet" BOOLEAN NOT NULL DEFAULT false,
    "useEcons" BOOLEAN NOT NULL DEFAULT false,
    "useNyc" BOOLEAN NOT NULL DEFAULT false,
    "printerCode" TEXT,
    "printerBrand" TEXT,
    "printerModel" TEXT,
    "printerLocation" TEXT,
    "phoneExt" TEXT,
    "phoneDirect" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_employeeId_key" ON "users"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
