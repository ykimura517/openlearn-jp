"use client"

import { useState, useEffect } from "react"
import { Brain, Code, BookOpen } from "lucide-react"
import { PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination"
import type { ExamsResponse } from "@/types/api"

export default function ExamsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [examsData, setExamsData] = useState<ExamsResponse>({
    exams: [],
    totalExams: 0,
    totalPages: 0,
  });
  //最終的にフロントのマップで、カテゴリーのアイコンを指定する想定
  const mapCategoryIdToIcon: Record<string, JSX.Element> = {
    ai: <Brain className="h-8 w-8 text-orange-500" />,
    programming: <Code className="h-8 w-8 text-orange-500" />,
    "web-development": <BookOpen className="h-8 w-8 text-orange-500" />,
  };
  // カテゴリー一覧（ベタ書き）
  const categories = [
    {
      id: "ai",
      title: "生成AI",
      description: "生成AIの基礎知識や応用についての試験です。ChatGPT、Stable Diffusionなどの理解度を測定します。",
      icon: <Brain className="h-8 w-8 text-orange-500" />,
    },
    {
      id: "programming",
      title: "プログラミング",
      description: "JavaScript、Python、Reactなどのプログラミング言語やフレームワークの知識を測定します。",
      icon: <Code className="h-8 w-8 text-orange-500" />,
    },
    {
      id: "web-development",
      title: "Web開発",
      description: "HTML、CSS、レスポンシブデザイン、Webアクセシビリティなどの知識を測定します。",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
    },
  ];

  // APIから試験一覧を取得
  const fetchExams = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/v1/exams?page=${currentPage}&pageSize=${pageSize}&search=${searchQuery}&category=${categoryFilter}&level=${levelFilter}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch exams');
      }
      
      const data: ExamsResponse = await response.json();
      setExamsData(data);
    } catch (error) {
      console.error("Error fetching exams:", error);
      // エラー処理
    } finally {
      setIsLoading(false);
    }
  };

  // フィルターやページネーションが変更されたときに試験を再取得
  useEffect(() => {
    fetchExams();
  }, [searchQuery, categoryFilter, levelFilter, currentPage, pageSize]);

  // ページ変更ハンドラー
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ページネーションアイテムの生成
  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (examsData.totalPages <= maxVisiblePages) {
      // 全ページ数が表示可能な最大数以下の場合、すべてのページを表示
      for (let i = 1; i <= examsData.totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={currentPage === i} onClick={() => handlePageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // 最初のページを表示
      items.push(
        <PaginationItem key={1}>
          <PaginationLink isActive={currentPage === 1} onClick={() => handlePageChange(1)}>
            1
          </PaginationLink>
        </PaginationItem>
      );

      // 現在のページが最初のページから離れている場合、省略記号を表示
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // 現在のページの周辺のページを表示
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(examsData.totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={currentPage === i} onClick={() => handlePageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // 現在のページが最後のページから離れている場合、省略記号を表示
      if (currentPage < examsData.totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // 最後のページを表示
      items.push(
        <PaginationItem key={examsData.totalPages}>
          <PaginationLink
            isActive={currentPage === examsData.totalPages}
            onClick={() => handlePageChange(examsData.totalPages)}
          >
            {examsData.totalPages}
          </P

