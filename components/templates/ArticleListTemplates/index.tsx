"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";

interface Props {
  articleList: [
    {
      id: number;
      documentId: string;
      title: string;
      subTitle: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }
  ];
}

const ArticleListTemplates = ({ articleList }: Props) => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📚 일상백과의 아티클 목록</h1>
      <div className="grid gap-4 cursor-pointer">
        {articleList.map((article) => (
          <div
            key={article?.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
            onClick={() => router.push(`/articles/${article.documentId}`)}
          >
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600 mt-1">{article?.subTitle}</p>
            <div className="mt-2 text-sm text-gray-500 flex justify-between">
              <span>📅 {dayjs(article?.createdAt).format("YYYY/MM/DD")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleListTemplates;
