import { Metadata } from "next";
import HomeTemplates from "@/components/templates/HomeTemplates";

export const metadata: Metadata = {
  title: "일상백과",
  description: "생활에서 스쳐지나갔던 신기한 정보들을 보내드립니다!",
  keywords: [
    "구독",
    "아티클",
    "알쓸신잡",
    "일상백과",
    "일상생활",
    "신기한 지식",
    "신기한 정보",
    "알지못했던 지식",
    "알지못했던 정보",
  ],
};

export default function Home() {
  return <HomeTemplates />;
}
