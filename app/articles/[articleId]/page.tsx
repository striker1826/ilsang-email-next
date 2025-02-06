import ArticleTemplates from "@/components/templates/ArticleTemplates";
import { redirect } from "next/navigation";

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
