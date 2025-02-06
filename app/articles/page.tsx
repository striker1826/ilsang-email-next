import ArticleListTemplates from "@/components/templates/ArticleListTemplates";

const ArticleListPage = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[publishedAt][$notNull]=true&sort[createdAt]=desc`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const articleList = await result.json();

  articleList.data.map((el) => console.log(el.title));
  return <ArticleListTemplates articleList={articleList?.data} />;
};

export default ArticleListPage;
