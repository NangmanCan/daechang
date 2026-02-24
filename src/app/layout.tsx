import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대창실업 | 패턴제작 · 샘플제작 · 소량의류생산",
  description:
    "40년 경력의 장인이 만드는 정교한 의류 샘플. 패턴제작, 샘플제작, 소량의류생산 전문. 서울 도봉구 방학로. 010-4336-5498",
  keywords: "패턴제작, 샘플제작, 소량의류생산, 의류샘플, 대창실업, 서울샘플실",
  openGraph: {
    title: "대창실업 | 40년 장인의 의류 샘플 전문",
    description:
      "패턴제작 · 샘플제작 · 소량의류생산. 40년 경력의 장인이 만드는 정교한 샘플.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
