# AGENTS.md

## 목적
이 파일은 `wedding-invitation` 프로젝트에서 AI 에이전트가 일관된 방식으로 작업하도록 돕는 운영 기준입니다.

핵심 목표:
- 변경 범위 최소화
- 기능 단위 책임 분리
- 안전한 배포
- 검증 가능한 작업 로그

---

## 프로젝트 구조 파악 (현 상태 기준)

### 1) 라우팅 계층 (Next.js App Router)
- `app/layout.tsx`: 루트 공통 레이아웃
- `app/page.tsx`: 메인 랜딩 (www)
- `app/wedding/*`: 청첩장 도메인 뷰
- `app/manager/*`: 관리자 도메인 뷰
- `app/docs/[slug]/page.tsx`: 로컬 MD 문서 뷰
- `app/api/*`: Route Handler API

### 2) 도메인 라우팅
- `middleware.ts`에서 host 기반 rewrite 수행
  - `wedding.*` -> `/wedding/*`
  - `manager.*` -> `/manager/*`
  - 그 외 -> 기본 라우트

### 3) UI 계층
- `components/wedding/*`: 웨딩 도메인 섹션 컴포넌트
- `components/ui/*`: 재사용 UI(shadcn 계열)
- `hooks/*`: 스크롤/리빌/토스트 등 클라이언트 훅

### 4) 컨텐츠 계층
- `wedding-invitaion/docs/*.md`: 문서 원본
- `app/docs/[slug]/page.tsx`: md 파일을 렌더링해 제공

### 5) 운영/설정
- `next.config.js`: dev origin, 이미지, 빌드 옵션
- `package.json`: 실행 스크립트 및 의존성

---

## 하네스 엔지니어링 기반 에이전트 운영 모델

에이전트는 항상 아래 단계를 순서대로 수행합니다.

1. Context Harness
- 관련 파일만 스캔
- 영향 경로(라우팅/컴포넌트/API/스타일) 기록
- 불명확한 요구사항을 명시적 가정으로 고정

2. Design Harness
- 최소 변경 설계 1안 제시
- 파일 분리 기준과 영향 범위 선명화
- Server/Client 경계 확인

3. Implementation Harness
- 작은 단위로 편집
- 기존 UX/도메인 규칙(`middleware`) 불변 유지
- 타입/비동기/예외 처리 점검

4. Verification Harness
- 최소 검증 세트 실행
  - `npm run dev` (기동)
  - 주요 라우트 수동 확인 (`/`, `/wedding`, `/manager`, `/docs/[slug]`)
  - API 엔드포인트 응답 확인(해당 시)
- 확인 불가 항목은 "검증 미실행"으로 명시

5. Delivery Harness
- 변경 요약 + 파일 레퍼런스 + 리스크 + 다음 단계 전달
- 커밋 단위는 기능 중심으로 분리

---

## 최신 웹 아키텍처 규칙 (이 프로젝트 적용)

1. App Router 우선
- 페이지는 Server Component 기본
- 브라우저 API가 필요한 경우에만 `"use client"`

2. 도메인 경계 유지
- `wedding` UI와 `manager` UI를 혼합하지 않음
- 공통 로직은 `components/ui`, `lib`, `hooks`로 승격

3. 데이터 접근 규칙
- 파일/서버 I/O는 서버 계층에서만 수행
- 클라이언트 컴포넌트는 데이터 표현/상호작용에 집중

4. 안전성 규칙
- 슬러그/입력값 sanitize
- 외부 링크는 `noopener,noreferrer`
- 민감한 설정은 `.env.local` 사용

5. 품질 규칙
- 타입 안정성 유지 (`strict`)
- 큰 리팩터링 금지, 기능 단위 패치
- 기존 동작 회귀 방지

---

## 표준 작업 체크리스트

- [ ] 요구사항/가정 정리
- [ ] 영향 파일 목록 도출
- [ ] Server/Client 경계 검증
- [ ] 예외/빈 상태 처리
- [ ] 최소 검증 수행
- [ ] 변경 요약 + 리스크 기록

