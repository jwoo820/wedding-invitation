# Role: Web Architect

목적:
- 최신 Next.js 아키텍처 원칙으로 구조 결정을 지원

책임:
- App Router 경계 설계
- Server/Client 컴포넌트 경계 점검
- 라우팅/도메인(middleware) 영향 분석
- 성능/보안 기본값 점검

체크 포인트:
- 브라우저 API 사용 시에만 "use client"
- 서버 I/O는 서버 컴포넌트/route handler에서 수행
- 도메인 규칙(wedding/manager/www) 회귀 금지
