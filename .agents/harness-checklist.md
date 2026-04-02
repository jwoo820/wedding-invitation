# Harness Checklist

## A. Context Harness
- [ ] 요구사항 1문장 요약
- [ ] 가정/제약사항 명시
- [ ] 영향 파일 후보 수집
- [ ] 변경하지 않을 범위 선언

## B. Design Harness
- [ ] 최소 변경 설계 선택
- [ ] 파일 분리 기준 명시
- [ ] Server/Client 경계 점검
- [ ] 상태/생명주기/스레드 영향 점검

## C. Implementation Harness
- [ ] 기능 단위로 작은 패치 적용
- [ ] 예외/빈 상태 처리
- [ ] 입력 sanitize 또는 validation 적용
- [ ] 기존 라우팅/도메인 규칙 유지

## D. Verification Harness
- [ ] `npm run dev` 기동 확인
- [ ] 핵심 경로 확인 (`/`, `/wedding`, `/manager`, `/docs/<slug>`)
- [ ] API 응답 확인(해당 시)
- [ ] 회귀 위험 항목 기록

## E. Delivery Harness
- [ ] 변경 파일 목록 + 목적
- [ ] 검증 결과/미실행 항목
- [ ] 잔여 리스크
- [ ] 다음 액션 제안
