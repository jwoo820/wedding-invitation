# Testing Guide

이 문서는 `wedding-invitation` 프로젝트의 표준 검증 절차를 정의합니다.

## 1. 사전 조건

- Node 20+
- 의존성 설치: `npm install`
- 커밋 훅 설치: `npm run hooks:install`

## 2. 표준 검증 순서 (Harness Verification)

1) 정적 검증
- `npm run lint`
- `npm run build`

2) 런타임 검증
- `npm run dev -- -H 127.0.0.1 -p 3000`
- 확인 경로:
  - `/` (메인 랜딩)
  - `/wedding`
  - `/manager`
  - `/docs/housing-market-outlook`

3) 최소 HTTP 체크 예시
- `curl -I http://127.0.0.1:3000/`
- `curl -I http://127.0.0.1:3000/wedding`
- `curl -I http://127.0.0.1:3000/manager`
- `curl -I http://127.0.0.1:3000/docs/housing-market-outlook`

## 3. 변경 유형별 추가 확인

### 라우팅/미들웨어 변경
- host 기반 rewrite 회귀 확인
- 잘못된 도메인에서 경로 충돌 여부 확인

### 문서(MD) 렌더링 변경
- 제목/목록/표/코드블록 렌더 확인
- 존재하지 않는 slug의 빈 상태 메시지 확인

### UI 변경
- 데스크톱/모바일 레이아웃 깨짐 여부
- hover/focus 접근성 확인

## 4. 실패 시 기록 규칙

- 실패 명령
- 재현 경로
- 예상 결과 vs 실제 결과
- 임시 우회 여부

