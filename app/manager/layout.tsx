// app/manager/page.tsx
export default function ManagerDashboard() {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold text-white">대시보드</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-md bg-zinc-900 border border-zinc-800 p-4">
          <div className="text-zinc-400 text-sm">전체 하객 수</div>
          <div className="text-2xl font-bold text-white mt-1">128명</div>
        </div>

        <div className="rounded-md bg-zinc-900 border border-zinc-800 p-4">
          <div className="text-zinc-400 text-sm">참석 확정</div>
          <div className="text-2xl font-bold text-white mt-1">96명</div>
        </div>
      </div>

      <div className="rounded-md bg-zinc-900 border border-zinc-800 p-4 text-sm text-zinc-300">
        최근 RSVP 업데이트 3건
        <ul className="mt-2 list-disc list-inside space-y-1 text-zinc-400">
          <li>박00 님 참석 확정</li>
          <li>최00 님 동반 1인 추가</li>
          <li>김00 님 알레르기(견과류) 표시</li>
        </ul>
      </div>
    </section>
  )
}