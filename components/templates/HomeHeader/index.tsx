const HomeHeader = () => {
  return (
    <header className="flex r-lg:px-[100px] justify-between items-center py-[16px] px-[24px] bg-[#fff] z-20 sticky">
      <div className="text-[40px] font-[800] font-brush">일상백과</div>
      <div className="flex items-center gap-[20px]">
        {/* <Link href={""} className="text-[16px] font-[800] text-[#2A2A2A]">
          서비스 소개
        </Link> */}
        <button className="bg-[#bdbfbe] text-[14px] text-[#F3FBFE] p-[10px] rounded-[8px]">
          무료 구독하기
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
