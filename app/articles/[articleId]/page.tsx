import ArticleTemplates from "@/components/templates/ArticleTemplates";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const articleId = (await params).articleId;

  const result = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/articles/${articleId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const article = await result.json();

  return {
    title: `일상백과 | ${article.data.title}`,
    description: article.data.title,
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
      article.data.title,
    ],
  };
};

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) => {
  const articleId = (await params).articleId;

  const result = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/articles/${articleId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const article = await result.json();

  if (!article?.data) {
    redirect("/404");
  }
  return <ArticleTemplates article={article.data} />;
};

export default ArticlePage;
