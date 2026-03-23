-- CreateTable
CREATE TABLE "EyeRecoveryTemplate" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "key" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "enabled" BOOLEAN NOT NULL DEFAULT true,
  "note" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "EyeRecoveryTemplateImage" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "templateId" TEXT NOT NULL,
  "day" INTEGER NOT NULL,
  "imageUrl" TEXT NOT NULL,
  "width" INTEGER,
  "height" INTEGER,
  "mimeType" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "EyeRecoveryTemplateImage_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "EyeRecoveryTemplate" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "EyeRecoveryTemplate_key_key" ON "EyeRecoveryTemplate"("key");

-- CreateIndex
CREATE INDEX "EyeRecoveryTemplateImage_templateId_day_idx" ON "EyeRecoveryTemplateImage"("templateId", "day");
