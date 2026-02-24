import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nangmancan.github.io/daechang";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "대창실업 | 의류샘플제작 · 패턴제작 · 소량생산 전문",
    template: "%s | 대창실업"
  },
  description:
    "40년 경력 장인의 의류샘플제작 전문. 패턴제작, 샘플제작, 소량의류생산. 작업지시서 없이도 OK, 1장부터 제작 가능. 졸업작품, 브랜드런칭, 굿즈제작 상담. 숨고·크몽 인기 업체. 서울 도봉구. ☎ 010-4336-5498",
  keywords: [
    // 핵심 키워드
    "의류샘플제작", "샘플제작", "패턴제작", "소량제작", "소량의류제작",
    "의류제작업체", "샘플실", "패턴실", "봉제의뢰",
    // 특징 키워드
    "1장제작", "1장제작가능", "작업지시서없이", "수작업의류",
    // 타겟 키워드
    "졸업작품제작", "졸업작품의뢰", "의상디자인졸작", "패션디자인과",
    "브랜드런칭", "신생브랜드", "1인브랜드", "디자이너샘플",
    "굿즈의류제작", "에코백제작",
    // 지역 키워드
    "서울샘플실", "서울의류제작", "도봉구샘플실",
    // 플랫폼 키워드
    "숨고의류제작", "크몽의류제작", "숨고샘플제작", "크몽샘플제작",
    // 아이템 키워드
    "맨투맨제작", "후드티제작", "가디건제작", "트레이닝복제작",
    // 브랜드
    "대창실업"
  ],
  authors: [{ name: "대창실업" }],
  creator: "대창실업",
  publisher: "대창실업",
  formatDetection: {
    telephone: true,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "대창실업",
    title: "대창실업 | 의류샘플제작 · 패턴제작 · 소량생산 전문",
    description: "40년 경력 장인의 의류샘플제작. 1장부터 제작 가능, 작업지시서 없이도 OK. 졸업작품·브랜드런칭 상담 환영. ☎ 010-4336-5498",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "대창실업 - 의류샘플제작 전문",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "대창실업 | 의류샘플제작 전문",
    description: "40년 경력 장인의 의류샘플제작. 1장부터 OK. ☎ 010-4336-5498",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "otT4fcpy8XceWzxXNzH5rPfglrqlFuU5yD3OtWNVQO8",
    // naver: "네이버서치어드바이저인증코드",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD 구조화 데이터
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "대창실업",
  alternateName: "대창실업 샘플실",
  description: "40년 경력 장인의 의류샘플제작 전문. 패턴제작, 샘플제작, 소량의류생산.",
  url: siteUrl,
  telephone: "+82-10-4336-5498",
  address: {
    "@type": "PostalAddress",
    streetAddress: "방학로",
    addressLocality: "도봉구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.6658,
    longitude: 127.0340,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  image: `${siteUrl}/og-image.jpg`,
  sameAs: [
    "https://blog.naver.com/daechang1111",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "의류샘플제작 서비스",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "패턴제작",
          description: "의류 패턴 설계 및 제작",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "샘플제작",
          description: "의류 샘플 1장부터 제작",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "소량생산",
          description: "소량 의류 생산 (다이마루, 직기)",
        },
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
