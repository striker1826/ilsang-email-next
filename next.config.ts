import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ilsang-baekgwa.com", // 변경할 도메인 (www. 없이 접속하는 경우)
          },
        ],
        destination: "https://www.ilsang-baekgwa.com/:path*", // www.가 포함된 URL
        permanent: true, // 301 리다이렉트 (영구 리다이렉트)
      },
    ];
  },
};

export default nextConfig;
