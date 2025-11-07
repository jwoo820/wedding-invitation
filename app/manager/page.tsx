// app/manager/layout.tsx
import React from 'react'

export const metadata = {
  title: 'flosmeeting manager',
  description: '하객 / 참석 / 좌석 관리 대시보드',
}

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-zinc-950 text-zinc-100 font-sans">
        <div className="flex min-h-screen">
          <aside className="w-56 bg-zinc-900 border-r border-zinc-800 p-4 text-sm">
            <div className="font-semibold mb-4">관리자 콘솔</div>
            <nav className="space-y-2">
              <a href="/manager" className="block text-zinc-300 hover:text-white">대시보드</a>
              <a href="/manager/guests" className="block text-zinc-300 hover:text-white">하객 관리</a>
              <a href="/manager/settings" className="block text-zinc-300 hover:text-white">환경 설정</a>
            </nav>
          </aside>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}