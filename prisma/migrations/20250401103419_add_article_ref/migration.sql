-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_chatRoomId_fkey";

-- DropForeignKey
ALTER TABLE "ChatRoom" DROP CONSTRAINT "ChatRoom_userId_fkey";

-- DropForeignKey
ALTER TABLE "MasterCourseArticleExercise" DROP CONSTRAINT "MasterCourseArticleExercise_courseArticleId_fkey";

-- DropForeignKey
ALTER TABLE "MasterCourseArticleFAQ" DROP CONSTRAINT "MasterCourseArticleFAQ_courseArticleId_fkey";

-- DropForeignKey
ALTER TABLE "MasterExamQuestion" DROP CONSTRAINT "MasterExamQuestion_examId_fkey";

-- CreateTable
CREATE TABLE "MasterCourseArticleReference" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "detailedDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MasterCourseArticleReference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterCourseArticleMasterCourseArticleReferenceRelation" (
    "id" TEXT NOT NULL,
    "masterCourseArticleId" TEXT NOT NULL,
    "referenceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MasterCourseArticleMasterCourseArticleReferenceRelation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MasterCourseArticleExercise" ADD CONSTRAINT "MasterCourseArticleExercise_courseArticleId_fkey" FOREIGN KEY ("courseArticleId") REFERENCES "MasterCourseArticle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterCourseArticleFAQ" ADD CONSTRAINT "MasterCourseArticleFAQ_courseArticleId_fkey" FOREIGN KEY ("courseArticleId") REFERENCES "MasterCourseArticle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterExamQuestion" ADD CONSTRAINT "MasterExamQuestion_examId_fkey" FOREIGN KEY ("examId") REFERENCES "MasterExam"("id") ON DELETE CASCADE ON UPDATE CASCADE;
