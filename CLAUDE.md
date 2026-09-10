# 프로젝트 개요

개인 소개 페이지 (1페이지). 자기소개, 관심사, 링크를 보여주는 간단한 랜딩 페이지.

# 기술 스택

- Next.js
- TypeScript
- Tailwind CSS

# 범위

- 한 페이지(단일 라우트)로 구성. 별도 페이지 라우팅 불필요.
- 섹션: 소개 글, 관심사, 링크 — 이 세 가지면 충분함. 추가 섹션(방명록, 블로그 등) 넣지 말 것.
- 데이터는 로컬 JSON 파일에서 읽어온다 (예: `data/profile.json`). DB 연동은 지금 하지 않음 — 나중에 붙일 예정이니 DB 스키마나 ORM 설정을 미리 준비하지 말 것.

# 하지 말 것

- Vercel 배포 설정/명령 실행 금지
- Supabase 등 백엔드/DB 연동 금지
- 위 두 가지는 이후 별도로 요청할 때만 진행

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
