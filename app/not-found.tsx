"use client";

import Header from "@/components/organisms/Header";
import Footer from "@/components/templates/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-228px)] bg-[#F9F9F9] text-center px-6">
        <h1 className="text-[80px] font-bold text-[#2A2A2A]">404</h1>
        <p className="text-[24px] text-[#555] mt-4">
          페이지를 찾을 수 없습니다.
        </p>
        <p className="text-[16px] text-[#888] mt-2 break-keep">
          찾으시는 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
        </p>
        <div className="flex flex-col justify-center mt-6 gap-[12px]">
          <Link href="/">
            <button className="bg-[#5a5a5a] text-white px-6 py-3 rounded-lg text-[16px] font-bold shadow-md hover:bg-[#3f3f3f] transition">
              홈으로 이동하기
            </button>
          </Link>
          <Link href="/articles">
            <button className="bg-[#5a5a5a] text-white px-6 py-3 rounded-lg text-[16px] font-bold shadow-md hover:bg-[#3f3f3f] transition">
              아티클 리스트로 이동하기
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
