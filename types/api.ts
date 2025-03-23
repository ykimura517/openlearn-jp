// 共通の型定義

// コース関連
export interface Course {
  id: string
  title: string
  description: string
  category: string
  categoryName: string
  level: string
  duration: string
  lessons: number
}

export interface CoursesResponse {
  courses: Course[]
  totalCourses: number
  totalPages: number
}

export interface CourseDetail {
  id: string
  title: string
  description: string
  category: string
  categoryName: string
  level: string
  duration: string
  targetAudience: string
  prerequisites: string
  lessons: LessonSummary[]
  content: string
}

export interface LessonSummary {
  id: string
  title: string
  duration: string
}

export interface RelatedCoursesResponse {
  courses: RelatedCourse[]
}

export interface RelatedCourse {
  id: string
  title: string
  level: string
  duration: string
}

// レッスン関連
export interface LessonDetail {
  id: string
  title: string
  content: string
  courseId: string
  courseTitle: string
  duration: string
}

export interface LessonNavigationResponse {
  currentLesson: LessonSummary
  prevLesson: LessonSummary | null
  nextLesson: LessonSummary | null
  currentLessonIndex: number
  totalLessons: number
}

export interface PracticeQuestion {
  id: number
  type: "multiple-choice" | "free-text"
  question: string
  options?: string[]
  correctAnswer: string
}

export interface PracticeQuestionsResponse {
  questions: PracticeQuestion[]
}

export interface Reference {
  title: string
  url: string
  description: string
}

export interface ReferencesResponse {
  references: Reference[]
}

// 試験関連
export interface Exam {
  id: string
  title: string
  description: string
  category: string
  categoryName: string
  level: string
  questions: number
  time: string
}

export interface ExamsResponse {
  exams: Exam[]
  totalExams: number
  totalPages: number
}

export interface ExamDetail {
  id: string
  title: string
  description: string
  category: string
  categoryName: string
  level: string
  questions: ExamQuestion[]
  timeLimit: string
  passingScore: number
}

export interface ExamQuestion {
  id: number
  type: "multiple-choice" | "free-text"
  question: string
  options?: string[]
  correctAnswer: string
}

export interface ExamSubmission {
  examId: string
  answers: Record<number, string>
}

export interface ExamResult {
  score: number
  correctAnswers: number
  totalQuestions: number
  passed: boolean
  passingScore: number
  feedback: Record<number, string>
}

// ユーザー関連
export interface UserProfile {
  id: string
  name: string
  email: string
  occupation: string
  birthDate: string
  joinedDate: string
}

export interface UserExamResult {
  id: string
  examId: string
  title: string
  date: string
  score: number
  passingScore: number
  category: string
  level: string
  passed: boolean
}

export interface UserExamResultsResponse {
  results: UserExamResult[]
}

export interface DeleteAccountRequest {
  reason: string
  confirmation: string
}

export interface DeleteAccountResponse {
  success: boolean
  message: string
}

// AIチャット関連
export interface AIChatRequest {
  message: string
  lessonTitle: string
  history: { role: "user" | "assistant"; content: string }[]
}

export interface AIChatResponse {
  message: string
  timestamp: string
}

