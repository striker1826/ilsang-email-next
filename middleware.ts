// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const url = req.nextUrl;
//   const pathname = url.pathname;

//   // API 요청, Next.js 내부 리소스 요청, 정적 파일 요청 제외
//   if (
//     pathname.startsWith("/api") || // API 요청 제외
//     pathname.startsWith("/_next") || // Next.js 내부 리소스 제외
//     pathname.startsWith("/static") // 정적 파일 요청 제외
//   ) {
//     return NextResponse.next();
//   }

//   // www.이 없는 경우 www. 추가하여 리다이렉트
//   if (!url.host.startsWith("www") && process.env.NODE_ENV === "development") {
//     url.host = `www.${url.host}`;
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// // 미들웨어 적용 경로 설정 (모든 페이지 요청에 적용)
// export const config = {
//   matcher: "/:path*",
// };
