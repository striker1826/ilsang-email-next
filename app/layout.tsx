import { Nanum_Brush_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const nanumBrushScript = Nanum_Brush_Script({
  weight: "400",
  variable: "--font-nanum-brush-script",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumBrushScript.variable}`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
