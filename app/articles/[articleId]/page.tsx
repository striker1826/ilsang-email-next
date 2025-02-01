import ArticleTemplates from "@/components/templates/ArticleTemplates";
import markdownToHtml from "@/lib/markdownToHtml";

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

  const content = await markdownToHtml(article?.data?.content);

  return <ArticleTemplates article={article.data} content={content} />;
};

export default ArticlePage;
