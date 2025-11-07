'use client'

const isProd = process.env.NODE_ENV === 'production'
const BASE_DOMAIN = isProd ? 'flosmeeting.com' : 'flosmeeting.local:3000'
const PROTOCOL = isProd ? 'https' : 'http'

export default function HomePage() {
  const goWedding = () => {
    window.location.href = `${PROTOCOL}://wedding.${BASE_DOMAIN}`
  }

  const goManager = () => {
    window.location.href = `${PROTOCOL}://manager.${BASE_DOMAIN}`
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">당신의 순간을 기록합니다</h1>
      <p className="text-muted-foreground text-sm leading-relaxed">
        flosmeeting은 모바일 청첩장과 하객 관리 도구를 제공하는 플랫폼입니다.
        wedding으로 초대장을 만들고, manager에서 편하게 관리하세요.
      </p>

      <div className="grid gap-4 text-sm">
        <button
          onClick={goWedding}
          className="rounded-lg border border-border p-4 hover:bg-accent hover:text-accent-foreground transition text-left"
        >
          💍 모바일 청첩장 보러가기
        </button>

        <button
          onClick={goManager}
          className="rounded-lg border border-border p-4 hover:bg-accent hover:text-accent-foreground transition text-left"
        >
          📊 하객 / 참석 관리 대시보드
        </button>
      </div>
    </section>
  )
}