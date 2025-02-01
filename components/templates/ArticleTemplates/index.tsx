"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Header from "@/components/organisms/Header";
import Footer from "../Footer";

interface Props {
  article: { title: string; content: string };
  content: string;
}

const ArticleTemplates = ({ article, content }: Props) => {
  console.log({ content });
  return (
    <>
      <Header />
      <section className="flex flex-col">
        <div className="px-[24px] r-lg:text-left r-lg:px-[100px]">
          <h1 className="mt-[48px] break-keep color-[#222222] text-[34px] font-bold">
            {article.title}
          </h1>
          <div
            className="my-[36px] break-keep prose"
            // dangerouslySetInnerHTML={{ __html: content }}
          >
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
                  <blockquote className="border-l-4 border-gray-500 italic text-gray-600">
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
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ArticleTemplates;
