// types/api.ts
// APIの返却・受領値の型定義

// コース関連
export interface CategoryWithRepresentativeCourse {
  categoryId: string;
  title: string;
  description: string;
  courses: {
    id: string;
    title: string;
    level: string;
    duration: string;
  }[];
}

export interface User {
  id: string;
  displayId: string;
  name: string;
  occupation: string;
  birthDate: string;
  joinedDate: string;
}

export interface OkResponse {
  ok: boolean;
}

export interface ExamResult {
  subMissionId: string;
  examId: string;
  examTitle: string;
  score: number;
  passingScore: number;
  examCategoryName: string;
  examLevel: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

// 試験関連
export interface ExamOutline {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  categoryName: string;
  level: string;
  questions: number;
  time: string;
}
export interface ExamsResponse {
  exams: ExamOutline[];
  totalExams: number;
  totalPages: number; //イチページに10 exam を表示する想定
}

export interface ExamQuestion {
  id: number;
  questionType: 'SELECTION' | 'TEXT';
  question: string;
  options?: string[];
  // correctAnswer: string; // これはサーバー側で計算するので、クライアント側では必要ない
}

export interface ExamDetail {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  categoryName: string;
  level: string;
  questions: ExamQuestion[];
  timeLimitMin: number;
  passingScore: number;
}

export interface ExamSubmission {
  examId: string;
  MapQuestionIdToAnswer: Record<string, string>;
}

export interface ExamResult {
  score: number;
  correctAnswers: number; //正解数
  totalQuestions: number;
  passed: boolean;
  passingScore: number;
  percentile: number;
  MapQuestionIdToCorrectAnswerValue: Record<string, string>;
}

export interface Course {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  categoryName: string;
  level: string;
  durationMin: number;
  articleCount: number;
}

export interface CoursesResponse {
  courses: Course[];
  totalCourses: number;
  totalPages: number;
}

export interface CourseDetail {
  id: string;
  title: string;
  summary: string;
  description: string;
  categoryId: string;
  categoryName: string;
  level: string;
  durationMin: number;
  targetAudience: string;
  prerequisites: string;
  articleSummaries: CourseArticleSummary[];
}
export interface CourseArticleSummary {
  id: string;
  sequence: number;
  title: string;
  durationMin: number;
}
export interface RelatedCoursesResponse {
  courses: RelatedCourse[];
}

export interface RelatedCourse {
  id: string;
  title: string;
  level: string;
  durationMin: number;
}
// レッスン(=Article)関連
export interface CourseArticleDetail {
  id: string;
  title: string;
  content: string;
  courseId: string;
  courseTitle: string;
  durationMin: number;
}

export interface CourseArticleNavigationResponse {
  currentCourseArticle: CourseArticleSummary;
  prevCourseArticle: CourseArticleSummary | null;
  nextCourseArticle: CourseArticleSummary | null;
  currentCourseArticleIndex: number;
  totalCourseArticles: number;
}

export interface ArticleExercise {
  id: number;
  type: 'multiple-choice' | 'free-text';
  question: string;
  options?: string[];
  correctAnswer: string;
}

export interface ExerciseQuestionsResponse {
  questions: ArticleExercise[];
}

export interface Reference {
  title: string;
  url: string;
  description: string;
}

export interface ReferencesResponse {
  references: Reference[];
}

export interface AIChatRequest {
  message: string;
  articleTitle: string;
  history: { role: 'user' | 'assistant'; content: string }[];
}

export interface DeleteAccountRequest {
  reason: string;
  confirmation: string;
}

export interface AIChatResponse {
  message: string;
  timestamp: string;
}
