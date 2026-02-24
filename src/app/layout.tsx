import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "대창실업 | 패턴제작 · 샘플제작 · 소량의류생산",
  description: "40년 경력의 장인이 만드는 정교한 의류 샘플. 패턴제작, 샘플제작, 소량의류생산 전문. 서울 도봉구 방학로. 010-4336-5498",
  keywords: "패턴제작, 샘플제작, 소량의류생산, 의류샘플, 대창실업, 서울샘플실",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
