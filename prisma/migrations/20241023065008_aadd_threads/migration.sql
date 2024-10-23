-- CreateTable
CREATE TABLE "Threads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT,
    "file" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Threads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
