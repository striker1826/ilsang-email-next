"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Header from "@/components/organisms/Header";
import Footer from "../Footer";
import { useRouter } from "next/navigation";

interface Props {
  article: { title: string; content: string };
}

const ArticleTemplates = ({ article }: Props) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY); // 위로 스크롤하면 버튼 표시
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const goToArticleList = () => {
    router.push("/articles");
  };

  return (
    <div className="flex justify-center bg-[#F9F9F9]">
      <div className="r-lg:max-w-[900px]">
        <Header />
        <section className="flex flex-col justify-center items-center bg-[#fff]">
          <div className="px-[24px] r-lg:text-left r-lg:px-[100px]">
            <h1 className="mt-[48px] break-keep text-[#222222] text-[34px] font-bold">
              {article.title}
            </h1>
            <div className="my-[36px] break-keep prose">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-gray-700">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside pl-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 pl-2">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 pl-2 border-[#04A76B] font-[600] text-[#C2C7CA]">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-2 py-1 rounded text-red-600 font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                      {children}
                    </pre>
                  ),
                  a: ({ children, href }) => (
                    <a href={href} className="text-blue-600 hover:underline">
                      {children}
                    </a>
                  ),
                  table: ({ children }) => (
                    <table className="border-collapse border border-gray-300 w-full">
                      {children}
                    </table>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-gray-200 text-gray-900 font-semibold">
                      {children}
                    </thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="text-gray-800">{children}</tbody>
                  ),
                  tr: ({ children }) => (
                    <tr className="border border-gray-300">{children}</tr>
                  ),
                  th: ({ children }) => (
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-gray-300 px-4 py-2">
                      {children}
                    </td>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>

            {/* Mobile */}
            <div
              className={`fixed bottom-10 right-10 r-lg:hidden transition-all duration-500 ease-in-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button
                onClick={goToArticleList}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-lg shadow-md"
              >
                전체 아티클 리스트 보기
              </button>
            </div>

            {/* Desktop*/}
            <div
              className={`fixed bottom-10 right-10 transition-transform duration-300 ease-in-out hidden r-lg:block translate-y-0 opacity-100`}
            >
              <button
                onClick={goToArticleList}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-lg shadow-md"
              >
                전체 아티클 리스트 보기
              </button>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default ArticleTemplates;
