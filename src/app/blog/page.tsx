import Link from 'next/link';
import { posts } from '@/data/posts';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-slate-400 hover:text-white text-sm mb-2 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-3xl font-bold">제작 사례</h1>
          <p className="text-slate-400 mt-2">대창실업의 샘플 제작 기록</p>
        </div>
      </header>

      {/* Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 hover:text-slate-600">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={post.naverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    자세히 보기 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 mb-4">
            더 많은 제작 사례는 네이버 블로그에서 확인하세요
          </p>
          <a 
            href="https://blog.naver.com/daechang1111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            네이버 블로그 방문하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-slate-900 text-slate-400 text-center text-sm">
        <p>© 2025 대창실업. All rights reserved.</p>
        <p className="mt-1">📞 010-4336-5498 | 서울 도봉구 방학로</p>
      </footer>
    </main>
  );
}
