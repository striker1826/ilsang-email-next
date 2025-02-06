import type { Metadata } from "next";
import { Nanum_Brush_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "@/components/ErrorBoundary";

const nanumBrushScript = Nanum_Brush_Script({
  weight: "400",
  variable: "--font-nanum-brush-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "일상 백과",
  description: "3일에 한번씩 신기한 정보들!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumBrushScript.variable}`}>
        <ErrorBoundary>
          <Toaster position="top-center" />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
