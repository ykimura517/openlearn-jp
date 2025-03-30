import MarkdownContent from '@/components/markdown-content';

interface ArticleContentProps {
  content: string;
}

// Server Component for rendering article content
export default function ArticleContent({ content }: ArticleContentProps) {
  return <MarkdownContent content={content} />;
}
