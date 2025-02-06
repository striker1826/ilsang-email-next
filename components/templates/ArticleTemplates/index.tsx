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
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
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
