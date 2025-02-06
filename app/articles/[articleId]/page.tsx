import ArticleTemplates from "@/components/templates/ArticleTemplates";

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

  return <ArticleTemplates article={article.data} />;
};

export default ArticlePage;
