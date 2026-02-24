import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            대창실업
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            패턴제작 · 샘플제작 · 소량의류생산
          </p>
          <p className="text-slate-400 mb-8">
            40년 경력의 장인이 만드는 정교한 샘플
          </p>
          <a 
            href="tel:010-4336-5498"
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition"
          >
            📞 010-4336-5498
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">소개</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">👨‍👩‍👧 가족이 함께하는 공방</h3>
              <p className="text-slate-600">
                서울 도봉구 방학로에 위치한 대창실업은 40년 경력의 재단사 아빠와 
                봉제 장인 엄마가 함께 운영하는 패턴·샘플 전문 제작소입니다.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">✂️ 다이마루 · 직기</h3>
              <p className="text-slate-600">
                다이마루와 직기 원단 모두 작업 가능합니다.
                1장부터 소량 생산까지, 맞춤 제작해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">서비스</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-lg font-semibold mb-2">패턴제작</h3>
              <p className="text-slate-600 text-sm">
                작업지시서 기반 정교한 패턴 설계
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-lg font-semibold mb-2">샘플제작</h3>
              <p className="text-slate-600 text-sm">
                맨투맨, 후드티, 가디건, 원피스 등
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-semibold mb-2">소량생산</h3>
              <p className="text-slate-600 text-sm">
                1장부터 소량 생산까지 가능
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">대창실업의 강점</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-amber-100 p-3 rounded-full">💰</div>
              <div>
                <h3 className="text-lg font-semibold">원단 절약 기술</h3>
                <p className="text-slate-600">
                  mm 단위로 꼼꼼하게 패턴을 배치하여 원단 낭비를 최소화합니다.
                  원단도 비용입니다. 한 장도 허투루 쓰지 않습니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-full">✋</div>
              <div>
                <h3 className="text-lg font-semibold">손 재단의 정교함</h3>
                <p className="text-slate-600">
                  레이저 재단은 가장자리가 타거나 변색될 수 있습니다.
                  손으로 컨트롤하여 자르는 방식으로 더 정교한 마감을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">제작 사례</h2>
          <p className="text-center text-slate-600 mb-8">
            다양한 의류 샘플 제작 기록을 확인하세요
          </p>
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition"
            >
              제작 사례 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">문의하기</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-2xl mb-2">📞</div>
              <p className="text-slate-400 text-sm mb-1">전화번호</p>
              <a href="tel:010-4336-5498" className="text-xl font-semibold hover:text-slate-300">
                010-4336-5498
              </a>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-2xl mb-2">📍</div>
              <p className="text-slate-400 text-sm mb-1">위치</p>
              <p className="text-lg">서울 도봉구 방학로</p>
            </div>
          </div>
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
      <footer className="py-6 px-4 bg-slate-950 text-slate-400 text-center text-sm">
        <p>© 2025 대창실업. All rights reserved.</p>
      </footer>
    </main>
  );
}
