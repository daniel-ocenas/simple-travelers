import { NextRequest, NextResponse } from 'next/server';

import { SESSION_COOKIE, verifySession } from '@/lib/auth/session';

const PUBLIC_ADMIN_PATHS = ['/admin/login'];

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    if (PUBLIC_ADMIN_PATHS.includes(pathname)) {
      return NextResponse.next();
    }
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    if (!(await verifySession(token))) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
