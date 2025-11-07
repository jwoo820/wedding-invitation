// app/layout.tsx
import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Flosmeeting',
  description: '메인 랜딩 / 브랜드 페이지',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-background text-foreground font-sans">
        <header className="px-6 py-4 border-b border-border">
          <div className="text-lg font-semibold">flosmeeting</div>
        </header>

        <main className="px-6 py-10 max-w-screen-md mx-auto">
          {children}
        </main>

        <footer className="text-xs text-muted-foreground text-center py-10">
          © {new Date().getFullYear()} flosmeeting
        </footer>
      </body>
    </html>
  )
}