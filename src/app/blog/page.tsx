import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제작 사례",
  description: "대창실업 의류샘플제작 포트폴리오. 맨투맨, 후드티, 가디건, 원피스, 트레이닝복 등 다양한 샘플제작 사례. 졸업작품, 브랜드런칭 샘플 전문.",
  keywords: ["의류샘플제작사례", "샘플제작포트폴리오", "맨투맨샘플", "후드티샘플", "가디건샘플"],
  openGraph: {
    title: "제작 사례 | 대창실업",
    description: "40년 장인의 의류샘플제작 포트폴리오. 다양한 제작 사례를 확인하세요.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf8f5" }}>
      {/* Navigation */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-tight"
          >
            <span className="text-shimmer">대창실업</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              홈으로
            </Link>
            <a
              href="tel:010-4336-5498"
              className="btn-gold px-5 py-2 rounded-lg text-sm font-semibold"
            >
              상담 문의
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header
        className="pt-28 pb-16 px-4"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-amber-400/80 font-semibold text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            제작 사례
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-slate-300/80 max-w-md mx-auto">
            대창실업에서 제작한 다양한 의류 샘플 기록입니다
          </p>
        </div>
      </header>

      {/* Filter tabs */}
      <section className="py-6 px-4 bg-white border-b border-slate-100 sticky top-[64px] z-40">
        <div className="max-w-6xl mx-auto flex items-center gap-3 overflow-x-auto pb-1">
          <span className="text-sm text-slate-400 font-medium flex-shrink-0 mr-2">
            카테고리
          </span>
          {["전체", "샘플예시", "대창실업"].map((cat, idx) => (
            <span
              key={cat}
              className={`text-sm font-medium px-4 py-1.5 rounded-full flex-shrink-0 transition-colors ${
                idx === 0
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100"
              >
                {/* Thumbnail */}
                <div className="h-44 bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={`${post.title} 샘플 제작 사례`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold bg-white/90 text-slate-600 px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-slate-400 mb-2">{post.date}</p>
                  <h2 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={post.naverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                  >
                    자세히 보기
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            더 많은 제작 사례가 궁금하신가요?
          </h3>
          <p className="text-slate-500 mb-8">
            네이버 블로그에서 더 자세한 제작 과정을 확인하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://blog.naver.com/daechang1111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all hover:shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              네이버 블로그 방문하기
            </a>
            <a
              href="tel:010-4336-5498"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              전화 상담하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4" style={{ background: "#0d0d1a" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2025 대창실업. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="tel:010-4336-5498"
                className="text-slate-500 hover:text-amber-400 text-sm transition-colors"
              >
                010-4336-5498
              </a>
              <span className="text-slate-700">|</span>
              <span className="text-slate-500 text-sm">
                서울 도봉구 방학로
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
