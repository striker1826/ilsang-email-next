import ArticleListTemplates from "@/components/templates/ArticleListTemplates";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[publishedAt][$notNull]=true&sort[createdAt]=desc`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );

  const articleList = await result.json();

  const articleTitles = articleList.data.map(
    (article: { title: string }) => article.title
  );

  return {
    title: "일상백과 | 아티클",
    description:
      "생활에서 스쳐지나갔던 신기한 정보들을 보내드립니다! 일상백과의 아티클이 궁금하시다면?",
    keywords: [
      "구독",
      "아티클",
      "알쓸신잡",
      "일상백과",
      "일상생활",
      "신기한 지식",
      "신기한 정보",
      "알지못했던 지식",
      "알지못했던 정보",
      ...articleTitles,
    ],
  };
};

const ArticleListPage = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[publishedAt][$notNull]=true&sort[createdAt]=desc`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );

  const articleList = await result.json();

  return <ArticleListTemplates articleList={articleList?.data} />;
};

export default ArticleListPage;
