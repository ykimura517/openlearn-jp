-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "displayId" TEXT NOT NULL,
    "firebaseUserId" TEXT NOT NULL,
    "stripeUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "plan" TEXT NOT NULL DEFAULT 'FREE',
    "name" TEXT,
    "occupation" TEXT,
    "birthDate" TEXT,
    "deletedAt" TIMESTAMP(3),
    "deleteReason" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MasterCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterTag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MasterTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterCourse" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "summary" TEXT,
    "description" TEXT,
    "targetAudience" TEXT,
    "level" TEXT NOT NULL,
    "difficulty" INTEGER,
    "durationMin" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "MasterCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterCourseRelation" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "relatedCourseId" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MasterCourseRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterCourseArticle" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "durationMin" INTEGER,

    CONSTRAINT "MasterCourseArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterCourseArticleExercise" (
    "id" TEXT NOT NULL,
    "courseArticleId" TEXT NOT NULL,
    "exerciseType" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "options" TEXT,
    "correctAnswer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MasterCourseArticleExercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseArticleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "chatRoomId" TEXT NOT NULL,
    "userId" TEXT,
    "role" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "masterCourseArticleId" TEXT,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterCourseArticleFAQ" (
    "id" TEXT NOT NULL,
    "courseArticleId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MasterCourseArticleFAQ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterExam" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "level" INTEGER NOT NULL,
    "timeLimitMin" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,
    "passingScore" INTEGER NOT NULL,

    CONSTRAINT "MasterExam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterExamQuestion" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "questionType" TEXT NOT NULL,
    "options" TEXT,
    "correctAnswer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MasterExamQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSubmission" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" INTEGER NOT NULL,
    "percentile" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ExamSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAnswer" (
    "id" TEXT NOT NULL,
    "examSubmissionId" TEXT NOT NULL,
    "examQuestionId" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,

    CONSTRAINT "ExamAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CourseTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_displayId_key" ON "User"("displayId");

-- CreateIndex
CREATE UNIQUE INDEX "User_firebaseUserId_key" ON "User"("firebaseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "MasterTag_name_key" ON "MasterTag"("name");

-- CreateIndex
CREATE INDEX "MasterCourseRelation_courseId_idx" ON "MasterCourseRelation"("courseId");

-- CreateIndex
CREATE INDEX "MasterCourseRelation_relatedCourseId_idx" ON "MasterCourseRelation"("relatedCourseId");

-- CreateIndex
CREATE INDEX "ChatRoom_courseArticleId_idx" ON "ChatRoom"("courseArticleId");

-- CreateIndex
CREATE INDEX "idx_chatroom_createdAt" ON "ChatMessage"("chatRoomId", "createdAt");

-- CreateIndex
CREATE INDEX "MasterCourseArticleFAQ_courseArticleId_idx" ON "MasterCourseArticleFAQ"("courseArticleId");

-- CreateIndex
CREATE INDEX "MasterExamQuestion_examId_idx" ON "MasterExamQuestion"("examId");

-- CreateIndex
CREATE INDEX "ExamSubmission_userId_idx" ON "ExamSubmission"("userId");

-- CreateIndex
CREATE INDEX "ExamSubmission_examId_idx" ON "ExamSubmission"("examId");

-- CreateIndex
CREATE INDEX "ExamAnswer_examSubmissionId_idx" ON "ExamAnswer"("examSubmissionId");

-- CreateIndex
CREATE INDEX "_CourseTags_B_index" ON "_CourseTags"("B");

-- AddForeignKey
ALTER TABLE "MasterCourse" ADD CONSTRAINT "MasterCourse_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MasterCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterCourseArticle" ADD CONSTRAINT "MasterCourseArticle_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "MasterCourse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterCourseArticleExercise" ADD CONSTRAINT "MasterCourseArticleExercise_courseArticleId_fkey" FOREIGN KEY ("courseArticleId") REFERENCES "MasterCourseArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_courseArticleId_fkey" FOREIGN KEY ("courseArticleId") REFERENCES "MasterCourseArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterCourseArticleFAQ" ADD CONSTRAINT "MasterCourseArticleFAQ_courseArticleId_fkey" FOREIGN KEY ("courseArticleId") REFERENCES "MasterCourseArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterExam" ADD CONSTRAINT "MasterExam_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MasterCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterExamQuestion" ADD CONSTRAINT "MasterExamQuestion_examId_fkey" FOREIGN KEY ("examId") REFERENCES "MasterExam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmission" ADD CONSTRAINT "ExamSubmission_examId_fkey" FOREIGN KEY ("examId") REFERENCES "MasterExam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSubmission" ADD CONSTRAINT "ExamSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswer" ADD CONSTRAINT "ExamAnswer_examSubmissionId_fkey" FOREIGN KEY ("examSubmissionId") REFERENCES "ExamSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswer" ADD CONSTRAINT "ExamAnswer_examQuestionId_fkey" FOREIGN KEY ("examQuestionId") REFERENCES "MasterExamQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseTags" ADD CONSTRAINT "_CourseTags_A_fkey" FOREIGN KEY ("A") REFERENCES "MasterCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseTags" ADD CONSTRAINT "_CourseTags_B_fkey" FOREIGN KEY ("B") REFERENCES "MasterTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
