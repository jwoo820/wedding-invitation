# Harness Execution Log (2026-04-02)

## A. Context
- 요청 요약: 남은 프로세스를 하네스 기반으로 단위 개발/테스트 후 이상 없으면 커밋
- 가정: 범위는 `wedding-invitation` 프로젝트, 기존 기능 회귀 없이 개선
- 영향 파일: `next.config.js`, `package.json`, `package-lock.json`, `docs/*`, `.eslintrc.json`

## B. Design
- 선택 설계:
  1) 테스트 문서 체계 추가
  2) 전역 CORS 헤더 제거 및 설정 정리
  3) lint/build/runtime 순 통합 검증
- 변경 제외 범위: 도메인 기능 로직 자체(청첩장/관리자 UI 로직)는 수정하지 않음

## C. Implementation (Unit)
1. Unit-1: 테스트/하네스 문서 추가
- `docs/TESTING.md`
- `docs/HARNESS_RUNBOOK.md`

2. Unit-2: 설정 리스크 정리
- `next.config.js` 전역 CORS 헤더 제거
- `package.json`에 `test:harness` 스크립트 추가
- `.eslintrc.json` 추가
- ESLint 의존성 정렬 (`eslint@8`, `eslint-config-next@14.2.33`)

3. Unit-3: 검증 실행
- `npm run test:harness` 실행
- dev 서버 기동 후 `/`, `/wedding`, `/manager`, `/docs/housing-market-outlook` 응답 확인

## D. Verification
- lint: PASS (경고 3건: `<img>` 사용 권고)
- build: PASS
- runtime route check: PASS (모든 주요 경로 200)
- 미실행 항목: 없음

## E. Delivery
- 결과 요약: 테스트 표준화 + 설정 리스크 완화 + 통합 검증 완료
- 잔여 리스크:
  - `next.config.js`의 `ignoreDuringBuilds`, `ignoreBuildErrors`는 현재 파이프라인 호환을 위해 유지
  - 이미지 최적화 권고 경고(`next/image`)는 추후 개선 가능
- 후속 작업:
  1) 이미지 컴포넌트를 `next/image`로 점진 전환
  2) 타입/린트 무시 정책 단계적 제거

