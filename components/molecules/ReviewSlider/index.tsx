"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="flex flex-col items-center">
          <p className="text-[18px] font-[600] text-center">김OO님</p>
          <p className="text-center text-[16px] text-[#838584] mt-[10px]">
            “친구들과 대화할 때 몰랐던 사실을 꺼내면 모두 놀라더라고요! 이
            서비스 덕분에 항상 새로운 정보로 분위기를 이끌 수 있어서 기분이
            좋습니다. ‘나만 알고 있던’ 사실들을 공유하는 재미가 쏠쏠해요.”
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[18px] font-[600] text-center">이OO님</p>
          <p className="text-center text-[16px] text-[#838584] mt-[10px]">
            “매일 받아보는 작은 사실들이 너무 유익하고 재미있어요! 일상에서
            놓치기 쉬운 정보들을 알게 돼서 정말 좋습니다. 친구들에게도
            추천했어요!”
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[18px] font-[600] text-center">박OO님</p>
          <p className="text-center text-[16px] text-[#838584] mt-[10px]">
            “정말 간단하게 시작할 수 있어서 좋고, 매일 복잡한 절차 없이 정보가
            바로바로 오니까 편리해요. 재미있는 사실들 덕분에 기분이 좋아집니다.”
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default ReviewSlider;
