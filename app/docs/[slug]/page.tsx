import { promises as fs } from "node:fs"
import path from "node:path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const DOCS_DIR = path.join(process.cwd(), "wedding-invitaion", "docs")

type Props = {
  params: Promise<{
    slug: string
  }>
}

function sanitizeSlug(slug: string): string {
  const allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_"
  let result = ""

  for (const ch of slug) {
    if (allowed.includes(ch)) {
      result += ch
    }
  }

  return result
}

async function readMarkdown(slug: string): Promise<string | null> {
  const safeSlug = sanitizeSlug(slug)
  const filePath = path.join(DOCS_DIR, safeSlug + ".md")

  try {
    return await fs.readFile(filePath, "utf-8")
  } catch {
    return null
  }
}

export default async function DocsPage({ params }: Props) {
  const { slug } = await params
  const markdown = await readMarkdown(slug)

  if (markdown == null) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">문서를 찾을 수 없습니다</h1>
        <p className="text-sm text-muted-foreground">
          wedding-invitaion/docs/{slug}.md 파일을 추가하면 표시됩니다.
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">문서 보기</h1>
      <article className="markdown-view rounded-lg border border-border bg-card p-5">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </section>
  )
}
