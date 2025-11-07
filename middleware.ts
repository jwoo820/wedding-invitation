import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const DOMAIN_RULES = {
  wedding: ['wedding.flosmeeting.com', 'wedding.flosmeeting.local:3000', 'wedding.flosmeeting.local'],
  manager: ['manager.flosmeeting.com', 'manager.flosmeeting.local:3000', 'manager.flosmeeting.local'],
  www:     ['www.flosmeeting.com', 'www.flosmeeting.local:3000', 'www.flosmeeting.local', 'flosmeeting.com', 'flosmeeting.local:3000', 'flosmeeting.local'],
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const host = req.headers.get('host') || ''

  // wedding 도메인 (배포/로컬 둘 다 허용)
  if (DOMAIN_RULES.wedding.includes(host)) {
    if (url.pathname.startsWith('/wedding')) {
      return NextResponse.next()
    }
    url.pathname = `/wedding${url.pathname === '/' ? '' : url.pathname}`
    return NextResponse.rewrite(url)
  }

  // manager 도메인
  if (DOMAIN_RULES.manager.includes(host)) {
    if (url.pathname.startsWith('/manager')) {
      return NextResponse.next()
    }
    url.pathname = `/manager${url.pathname === '/' ? '' : url.pathname}`
    return NextResponse.rewrite(url)
  }

  // 기본 (www / root)
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}