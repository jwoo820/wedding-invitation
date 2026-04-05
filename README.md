# wedding-invitation

멀티 도메인(`www`, `wedding`, `manager`) 기반 Next.js 프로젝트입니다.

## Quick Start

### 1) 환경 준비

```bash
npm install
npm run hooks:install
```

### 2) 로컬 실행

```bash
npm run dev -- -H 127.0.0.1 -p 3000
```

기본 확인 경로:
- `/` (메인 랜딩)
- `/wedding` (청첩장)
- `/manager` (관리자)
- `/docs/housing-market-outlook` (MD 문서 뷰)

### 3) 하네스 검증

```bash
npm run test:harness
```

검증 구성:
- `lint`
- `typecheck`
- `build`

## Commit Rule

커밋 메시지는 Conventional Commits를 사용합니다.

예시:
- `feat(wedding): add map fallback ui`
- `fix(manager): normalize layout boundaries`
- `chore(testing): update harness runbook`

상세 규칙:
- `docs/COMMIT_CONVENTION.md`

## Harness Docs

- `AGENTS.md`: 프로젝트 에이전트 운영 규칙
- `.agents/harness-checklist.md`: 작업 단계별 체크리스트
- `docs/TESTING.md`: 테스트 표준 가이드
- `docs/HARNESS_RUNBOOK.md`: 실행 로그 템플릿

## Domain Routing

`middleware.ts`에서 host 기반으로 rewrite합니다.
- `wedding.*` -> `/wedding/*`
- `manager.*` -> `/manager/*`
- 그 외 -> 기본(`www`) 라우트
