# Commit Convention

이 프로젝트는 협업 표준으로 아래 규칙을 사용합니다.

## 1) 제목 형식

Conventional Commits 1.0.0 형식 사용:

`<type>(optional-scope): <description>`

예시:
- `feat(wedding): add share button state`
- `fix(manager): handle empty guest list`
- `docs(agents): add harness checklist`

허용 type:
- `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

## 2) 길이/문장 규칙

Git 공식 권장 규칙을 따릅니다.
- 제목은 72자 이내 (권장 50자)
- 제목 끝에 마침표(`.`) 금지
- 제목은 명령형 동사로 작성
- 본문을 쓰는 경우 제목과 본문 사이 빈 줄 1개

## 3) 본문/푸터 규칙

- 본문: 무엇(what) + 왜(why) 중심
- 푸터: 이슈/참조를 trailer 형식으로 기록
  - 예: `Refs: #123`, `Reviewed-by: name`
- 브레이킹 변경은 아래 중 하나 필수
  - `type(scope)!: description`
  - `BREAKING CHANGE: ...` 푸터

## 4) 이 프로젝트 scope 가이드

- `www`: 메인 랜딩
- `wedding`: 청첩장 도메인
- `manager`: 관리자 도메인
- `docs`: markdown 문서 뷰
- `api`: route handler
- `agents`: 에이전트 운영 파일

## 5) 예시 템플릿

```text
feat(wedding): add map fallback UI

Improve map rendering resilience when external map SDK fails to load.

Refs: #42
```

## References

- Conventional Commits 1.0.0
  - https://www.conventionalcommits.org/en/v1.0.0/
- Git commit docs (subject/body 권장)
  - https://git-scm.com/docs/git-commit
- Chris Beams - How to Write a Git Commit Message
  - https://chris.beams.io/posts/git-commit/
