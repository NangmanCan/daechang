export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  naverUrl: string;
  thumbnail: string;
}

const basePath = process.env.NODE_ENV === "production" ? "/daechang" : "";

export const posts: Post[] = [
  {
    id: "oversized-sweatshirt",
    title: "오버핏 맨투맨 샘플제작",
    description: "작업지시서 기반 오버핏맨투맨 샘플제작. 루즈한 실루엣의 드롭숄더와 박시한 핏, 캥거루 포켓이 포인트인 맨투맨입니다.",
    date: "2026-02-23",
    category: "샘플예시",
    tags: ["맨투맨", "오버핏", "샘플제작"],
    naverUrl: "https://blog.naver.com/daechang1111/224193120921",
    thumbnail: `${basePath}/samples/mtm.jpg`
  },
  {
    id: "eco-bag",
    title: "에코백 샘플제작",
    description: "작업지시서 없이도 제작 가능한 에코백 샘플제작. 이미지 한 장, 말로만 설명해도 구현해드립니다.",
    date: "2026-02-09",
    category: "대창실업",
    tags: ["에코백", "소량제작"],
    naverUrl: "https://blog.naver.com/daechang1111/224177123333",
    thumbnail: `${basePath}/samples/ecobag.png`
  },
  {
    id: "training-setup",
    title: "트레이닝 셋업 샘플제작",
    description: "작업지시서 기반 그레이 트레이닝 셋업 샘플 제작. 후드집업 + 조거팬츠, 편안함과 실루엣을 모두 잡은 샘플입니다.",
    date: "2025-11-30",
    category: "샘플예시",
    tags: ["트레이닝복", "셋업", "후드집업"],
    naverUrl: "https://blog.naver.com/daechang1111/224093109862",
    thumbnail: `${basePath}/samples/training.jpg`
  },
  {
    id: "hand-cutting",
    title: "정교한 손 재단의 비밀",
    description: "레이저보다 손이 낫다! 손으로 컨트롤해서 자르는 방식으로 가장자리 변색 없이 깔끔한 마감을 제공합니다.",
    date: "2025-10-23",
    category: "대창실업",
    tags: ["재단", "노하우", "강점"],
    naverUrl: "https://blog.naver.com/daechang1111/224051151323",
    thumbnail: `${basePath}/samples/handcut.jpg`
  },
  {
    id: "cardigan",
    title: "V넥 가디건 샘플제작",
    description: "작업지시서 기반 화이트 V넥 가디건 샘플제작. 깔끔한 핏과 미니멀한 디테일이 특징입니다.",
    date: "2025-09-23",
    category: "샘플예시",
    tags: ["가디건", "니트", "샘플제작"],
    naverUrl: "https://blog.naver.com/daechang1111/224019153963",
    thumbnail: `${basePath}/samples/cardigan.jpg`
  },
  {
    id: "hoodie",
    title: "후드티 샘플제작",
    description: "작업지시서 기반 회색 후드티 샘플 제작. 원단, 포켓 디테일, 지퍼 컬러 등 세심한 작업지시서 분석이 핵심입니다.",
    date: "2025-09-19",
    category: "샘플예시",
    tags: ["후드티", "샘플제작"],
    naverUrl: "https://blog.naver.com/daechang1111/224014368400",
    thumbnail: `${basePath}/samples/hoodie.png`
  },
  {
    id: "hood-zip",
    title: "후드집업 샘플제작",
    description: "작업지시서 기반 후드집업 샘플 제작. 기본에 충실하지만 섬세하게, 깔끔한 핏과 완성도 높은 디테일이 포인트입니다.",
    date: "2025-09-16",
    category: "샘플예시",
    tags: ["후드집업", "샘플제작"],
    naverUrl: "https://blog.naver.com/daechang1111/224009765197",
    thumbnail: `${basePath}/samples/hoodzip.png`
  },
  {
    id: "fabric-saving",
    title: "원단 절약 노하우",
    description: "원단도 비용입니다. mm 단위로 꼼꼼하게 패턴을 배치하여 원단 낭비를 최소화하는 대창실업의 노하우.",
    date: "2025-09-07",
    category: "대창실업",
    tags: ["원단절약", "노하우", "강점"],
    naverUrl: "https://blog.naver.com/daechang1111/223998763852",
    thumbnail: `${basePath}/samples/fabric.jpg`
  },
  {
    id: "sweatshirt",
    title: "맨투맨 샘플제작",
    description: "작업지시서 기반 맨투맨 샘플 제작. 기본이지만 결코 평범하지 않은 실루엣, 레글런 소매로 자연스러운 움직임을 구현합니다.",
    date: "2025-09-05",
    category: "샘플예시",
    tags: ["맨투맨", "샘플제작"],
    naverUrl: "https://blog.naver.com/daechang1111/223996538969",
    thumbnail: `${basePath}/samples/sweatshirt.png`
  },
  {
    id: "stripe-tshirt",
    title: "스트라이프 티셔츠 샘플제작",
    description: "좌우 스트라이프 패턴을 다르게 배치한 긴팔 티셔츠. 패턴 정렬, 중심 봉제, 좌우 밸런스가 완성도를 좌우합니다.",
    date: "2025-08-26",
    category: "샘플예시",
    tags: ["티셔츠", "스트라이프", "샘플제작"],
    naverUrl: "https://blog.naver.com/daechang1111/223983560433",
    thumbnail: `${basePath}/samples/stripe.jpg`
  },
  {
    id: "check-blouse",
    title: "체크 블라우스 샘플제작",
    description: "작업지시서 기반 7부 체크 블라우스st 티셔츠 샘플 제작. 격자 간격과 포인트 단추 위치가 핵심입니다.",
    date: "2025-08-07",
    category: "샘플예시",
    tags: ["블라우스", "체크", "샘플제작"],
    naverUrl: "https://blog.naver.com/daechang1111/223962928742",
    thumbnail: `${basePath}/samples/check.jpg`
  },
  {
    id: "dress",
    title: "포인트 원피스 샘플제작",
    description: "작업지시서 기반 뒷모습 포인트가 살아있는 원피스 샘플 제작. 컬러 배색과 실루엣 조율이 핵심입니다.",
    date: "2025-08-04",
    category: "샘플예시",
    tags: ["원피스", "샘플제작"],
    naverUrl: "https://blog.naver.com/daechang1111/223958663818",
    thumbnail: `${basePath}/samples/dress.jpg`
  }
];
