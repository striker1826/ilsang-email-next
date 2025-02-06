"use client";

import ReviewSlider from "@/components/molecules/ReviewSlider";
import Link from "next/link";

interface Props {
  setSubscriptionModal: (bool: boolean) => void;
}

const HomeContent = ({ setSubscriptionModal }: Props) => {
  return (
    <>
      <section
        className="px-[16px] flex flex-col justify-center items-center mt-[150px] pb-[100px]"
        style={{
          background: "linear-gradient(to bottom, #ffffff 20%, #b8b6b6 100%)",
        }}
      >
        <p className="text-[35px] font-[700] text-center">
          세상에 흔하지만 <br />
          당신이 몰랐던 사실들
        </p>
        <p className="text-center text-[20px] text-[#838584] mt-[20px]">
          월, 수, 금 오전 7시마다
          <br /> 일상에서 흥미를 더할 새로운 지식을
          <br /> 메일로 받아보세요.
        </p>
        <button
          onClick={() => setSubscriptionModal(true)}
          className="mt-[48px] bg-[#757373] rounded-[8px] py-[16px] px-[28px] font-[700] text-[#F3FBFE] text-[16px]"
        >
          무료로 구독하기
        </button>
      </section>

      <section className="px-[16px] flex flex-col justify-center items-center py-[100px] border-b-[2px]">
        <p className="text-[30px] font-[700] text-center">
          왜 일상백과를
          <br />
          구독해야 할까요?
        </p>
        <div className="mt-[40px] flex flex-col items-center justify-center r-lg:flex-row gap-[40px]">
          <div className="flex flex-col items-center">
            <span className="text-[80px]">📬</span>
            <p className="text-[28px] font-[800] text-center">
              쉽고 간단한 구독
            </p>
            <p className="text-center text-[#838584] mt-[10px] text-[20px]">
              매일 복잡한 절차 없이 <br />
              간편하게 받아보세요.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[80px]">📅</span>
            <p className="text-[28px] font-[800] text-center">
              정기적인 정보 제공
            </p>
            <p className="text-center text-[20px] text-[#838584] mt-[10px]">
              3일에 한 번 새로운 정보가
              <br /> 당신의 이메일로 도착합니다.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[80px]">💡</span>
            <p className="text-[28px] font-[800] text-center">
              일상에서 유용한 정보
            </p>
            <p className="text-center text-[20px] text-[#838584] mt-[10px]">
              알지 못했던 사실들로
              <br /> 일상에 재미와 유익함을 더하세요.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[24px] flex flex-col justify-center items-center py-[100px] border-b-[2px]">
        <p className="text-[30px] font-[700] text-center">최근 아티클 보기</p>
        <p className="text-center text-[20px] text-[#838584] mt-[20px]">
          흥미로운 아티클을 확인하고 더 많은 정보를 얻어보세요.
        </p>
        <Link href="/articles" target="_blank">
          <button className="mt-[48px] bg-[#5a5a5a] rounded-[8px] py-[16px] px-[28px] font-[700] text-[#F3FBFE] text-[16px]">
            아티클 리스트 보기
          </button>
        </Link>
      </section>

      <section className="px-[24px] flex flex-col justify-center items-center py-[100px]">
        <p className="text-[30px] font-[700] text-center">
          구독 방법은 정말 간단해요!
        </p>
        <p className="text-center text-[20px] text-[#838584] mt-[20px]">
          아래 버튼을 클릭하고, 이메일을 입력하면
          <br /> 매일 새로운 사실들이 <br />
          여러분의 메일로 전송됩니다.
        </p>
        <button
          onClick={() => setSubscriptionModal(true)}
          className="mt-[48px] bg-[#5a5a5a] rounded-[8px] py-[16px] px-[28px] font-[700] text-[#F3FBFE] text-[16px]"
        >
          지금 구독하기
        </button>
      </section>

      <section
        className="px-[16px] flex flex-col justify-center items-center py-[100px]"
        style={{
          background: "linear-gradient(to bottom, #f4f4f4 20%, #e0e0e0 100%);",
        }}
      >
        <p className="text-[30px] font-[700] text-center">사용자들의 소감</p>
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px]"></div>
        <ReviewSlider />
      </section>
    </>
  );
};

export default HomeContent;
