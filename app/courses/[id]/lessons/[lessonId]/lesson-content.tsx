import MarkdownContent from "@/components/markdown-content"

interface LessonContentProps {
  content: string
}

// Server Component for rendering lesson content
export default function LessonContent({ content }: LessonContentProps) {
  return <MarkdownContent content={content} />
}

