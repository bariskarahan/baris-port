import { NextResponse, type NextRequest } from 'next/server';
import { languageCookie, stripLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname === '/' && request.cookies.get(languageCookie)?.value === 'tr') {
    return NextResponse.redirect(new URL(`/tr${request.nextUrl.search}`, request.url));
  }
  const locale = pathname === '/tr' || pathname.startsWith('/tr/') ? 'tr' : 'en';
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-notebook-locale', locale);
  if (locale === 'tr') {
    const url = request.nextUrl.clone();
    url.pathname = stripLocale(pathname);
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!api(?:/|$)|_next(?:/|$)|images(?:/|$)|favicon.ico$|robots.txt$|sitemap.xml$).*)'],
};
