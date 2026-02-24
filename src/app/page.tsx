import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl tracking-tight">
            <span className="text-shimmer">대창실업</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              소개
            </a>
            <a
              href="#services"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              서비스
            </a>
            <a
              href="#strengths"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              강점
            </a>
            <a
              href="#portfolio"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              제작사례
            </a>
            <a
              href="tel:010-4336-5498"
              className="btn-gold px-5 py-2 rounded-lg text-sm font-semibold"
            >
              상담 문의
            </a>
          </div>
          {/* Mobile phone button */}
          <a
            href="tel:010-4336-5498"
            className="md:hidden btn-gold px-4 py-2 rounded-lg text-sm font-semibold"
          >
            전화 문의
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[70vh] flex items-center justify-center px-4 py-24">
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-amber-400/80 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6">
              Since 1985 &middot; 패턴 &middot; 샘플 &middot; 소량생산
            </p>
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
            40년 장인의
            <br />
            <span className="text-shimmer">정교한 손끝</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            작업지시서 한 장이면 충분합니다.
            <br className="hidden md:block" />
            패턴 설계부터 샘플 완성까지, 한 땀 한 땀 정성을 담습니다.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-4336-5498"
              className="btn-gold px-10 py-4 rounded-xl text-lg font-bold tracking-wide"
            >
              010-4336-5498
            </a>
            <a
              href="#services"
              className="glass px-10 py-4 rounded-xl text-lg font-semibold text-white hover:bg-white/10 transition-all"
            >
              서비스 알아보기
            </a>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in-up delay-500 mt-20 grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="text-center">
              <div className="stat-number">40+</div>
              <p className="text-slate-400 text-sm mt-1">년 경력</p>
            </div>
            <div className="text-center">
              <div className="stat-number">1장</div>
              <p className="text-slate-400 text-sm mt-1">부터 제작</p>
            </div>
            <div className="text-center">
              <div className="stat-number">100%</div>
              <p className="text-slate-400 text-sm mt-1">손 재단</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              가족이 함께하는 공방
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: description */}
            <div className="space-y-6">
              <div className="gold-border-left pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  대창실업을 소개합니다
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  서울 도봉구 방학로에 위치한 대창실업은{" "}
                  <strong className="text-slate-900">
                    40년 경력의 장인
                  </strong>
                  이 운영하는 패턴 · 샘플 전문 제작소입니다.
                </p>
              </div>
              <div className="gold-border-left pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  다이마루 · 직기 원단 모두 가능
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  다이마루와 직기 원단 모두 작업 가능합니다. 이미지 한 장,
                  말로만 설명해도 구현해드립니다. 1장부터 소량 생산까지 맞춤
                  제작합니다.
                </p>
              </div>
            </div>

            {/* Right: highlight card */}
            <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl p-8 border border-slate-100">
              <div className="space-y-5">
                {[
                  {
                    icon: "scissors",
                    label: "전문 분야",
                    value: "패턴제작 · 샘플제작 · 소량생산",
                  },
                  { icon: "pin", label: "위치", value: "서울 도봉구 방학로" },
                  {
                    icon: "phone",
                    label: "연락처",
                    value: "010-4336-5498",
                  },
                  {
                    icon: "clock",
                    label: "경력",
                    value: "40년+ 장인 기술력",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="icon-circle bg-amber-50 text-amber-700 border border-amber-200">
                      {item.icon === "scissors" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                          />
                        </svg>
                      )}
                      {item.icon === "pin" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                      {item.icon === "phone" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      )}
                      {item.icon === "clock" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-slate-800 font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4" style={{ background: "#faf8f5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              전문 서비스
            </h2>
            <div className="section-divider" />
            <p className="text-slate-500 mt-6 max-w-lg mx-auto">
              작업지시서부터 완성품까지, 원스톱으로 진행합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "패턴제작",
                desc: "작업지시서를 기반으로 정교한 패턴을 설계합니다. mm 단위의 꼼꼼한 배치로 원단 낭비를 최소화합니다.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                ),
                items: ["치수 분석", "패턴 설계", "마카 작업", "원단 배치 최적화"],
              },
              {
                title: "샘플제작",
                desc: "맨투맨, 후드티, 가디건, 원피스 등 다양한 의류 샘플을 제작합니다. 이미지 한 장으로도 구현 가능합니다.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072"
                    />
                  </svg>
                ),
                items: [
                  "맨투맨 · 후드티",
                  "가디건 · 블라우스",
                  "원피스 · 에코백",
                  "트레이닝 셋업",
                ],
              },
              {
                title: "소량생산",
                desc: "1장부터 소량 생산까지 가능합니다. 작업지시서가 없어도, 이미지나 구두 설명만으로 제작해 드립니다.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                ),
                items: [
                  "1장부터 가능",
                  "맞춤 사이즈",
                  "다품종 소량",
                  "빠른 납기",
                ],
              },
            ].map((service, idx) => (
              <div
                key={service.title}
                className="card-hover bg-white rounded-2xl p-8 border border-slate-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              제작 과정
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "상담", desc: "작업지시서 또는 이미지 전달" },
              { step: "02", title: "패턴", desc: "정교한 패턴 설계 및 배치" },
              { step: "03", title: "재단", desc: "숙련된 손 재단 작업" },
              { step: "04", title: "완성", desc: "봉제 및 품질 검수" },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 flex items-center justify-center mb-4 group-hover:border-amber-400 transition-colors">
                  <span className="text-2xl font-extrabold text-amber-700">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section
        id="strengths"
        className="py-24 px-4"
        style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Why Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              대창실업의 강점
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 group hover:bg-white/10 transition-all">
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                ✂️ 손 재단의 정교함
              </h3>
              <p className="text-slate-300 leading-relaxed">
                레이저 재단은 가장자리가 타거나 변색될 수 있습니다.
                <br />
                <span className="text-amber-300/80 font-medium">
                  손으로 직접 컨트롤
                </span>
                하여 원단 본연의 깔끔함을 살립니다.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 group hover:bg-white/10 transition-all">
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                📝 작업지시서 없어도 OK
              </h3>
              <p className="text-slate-300 leading-relaxed">
                <span className="text-amber-300/80 font-medium">
                  이미지 한 장, 말로만 설명해도
                </span>{" "}
                괜찮아요.
                <br />
                디자이너의 의도를 파악해 직접 패턴부터 설계해드립니다.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 group hover:bg-white/10 transition-all">
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                👕 1장부터 제작 가능
              </h3>
              <p className="text-slate-300 leading-relaxed">
                샘플 1장부터 소량 생산까지.
                <br />
                <span className="text-amber-300/80 font-medium">
                  초기 브랜드, 졸업 작품, 굿즈 제작
                </span>{" "}
                모두 환영합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4" style={{ background: "#faf8f5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              제작 사례
            </h2>
            <div className="section-divider" />
            <p className="text-slate-500 mt-6 max-w-lg mx-auto">
              다양한 의류 샘플 제작 기록을 확인하세요
            </p>
          </div>

          {/* Sample preview cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "오버핏 맨투맨",
                tags: ["맨투맨", "오버핏"],
                desc: "드롭숄더와 박시한 핏, 캥거루 포켓이 포인트",
                image: "https://blogthumb.pstatic.net/MjAyNjAyMjNfMTA1/MDAxNzcxODQ2NDYyMDg1.FahsN9__sLjdHe9jfYaVRKuaurnMFRJo4yefa3ZvPdgg.ih7EN8cjLRL2ls7n3w3UfkvT1vOV5ejTNCkaIr4nQKMg.JPEG/output%A3%DF1829560600.jpg?type=s3",
              },
              {
                title: "트레이닝 셋업",
                tags: ["후드집업", "조거팬츠"],
                desc: "편안함과 실루엣을 모두 잡은 셋업",
                image: "https://blogthumb.pstatic.net/MjAyNTExMzBfNzkg/MDAxNzY0NDgzMjUzNzcw.PQiuj-UPxzqF4jUkhWiO07llI9I09oc_WyUBTi1aQXUg.AeAMX-bo0YgHw_s2thKXSLDnR3pYhLUxKSByV2mRbbIg.JPEG/IMG%A3%DF3224.jpg?type=s3",
              },
              {
                title: "V넥 가디건",
                tags: ["니트", "가디건"],
                desc: "깔끔한 핏과 미니멀한 디테일",
                image: "https://blogthumb.pstatic.net/MjAyNTA5MTlfMTg4/MDAxNzU4MjY4NDA1NDg1.kj249ZYeP-e8gxMNJ5DWnRqIMhgr3eZPT2TKAuoHJMcg._xFheRclrigDXX0NmowleVn_1tPS-vCBmIyaPSAkj2Yg.JPEG/KakaoTalk_20250916_100409697_05.jpg?type=s3",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100"
              >
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="btn-gold inline-block px-10 py-4 rounded-xl text-lg font-bold tracking-wide"
            >
              전체 제작 사례 보기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section
        id="contact"
        className="py-24 px-4"
        style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 바로 상담하세요
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-slate-300 mb-12 text-lg leading-relaxed">
            작업지시서가 없어도 괜찮습니다.
            <br />
            이미지 한 장, 전화 한 통이면 시작할 수 있습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:010-4336-5498"
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                <svg
                  className="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                전화
              </p>
              <p className="text-white text-lg font-bold">010-4336-5498</p>
            </a>

            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                위치
              </p>
              <p className="text-white text-lg font-bold">서울 도봉구 방학로</p>
            </div>

            <a
              href="https://blog.naver.com/daechang1111"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                블로그
              </p>
              <p className="text-white text-lg font-bold">네이버 블로그</p>
            </a>
          </div>

          <a
            href="tel:010-4336-5498"
            className="btn-gold inline-block px-12 py-5 rounded-xl text-xl font-bold tracking-wide"
          >
            전화 상담하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4" style={{ background: "#0d0d1a" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                &copy; 2025 대창실업. All rights reserved.
              </p>
            </div>
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
              <span className="text-slate-700">|</span>
              <a
                href="https://blog.naver.com/daechang1111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-green-400 text-sm transition-colors"
              >
                블로그
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
