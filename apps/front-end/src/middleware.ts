import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('GymDay.accessToken')?.value

  const SignInURL = new URL('/auth/entrar', req.url)
  const HomePageURL = new URL('/app/inicio', req.url)

  if (!token) {
    if (
      req.nextUrl.pathname === '/auth/entrar' ||
      req.nextUrl.pathname === '/auth/registrar'
    ) {
      return NextResponse.next()
    }

    return NextResponse.redirect(SignInURL)
  }

  if (
    req.nextUrl.pathname === '/auth/entrar' ||
    req.nextUrl.pathname === '/auth/registrar'
  ) {
    return NextResponse.redirect(HomePageURL)
  }
}

export const config = {
  matcher: ['/auth/:path*', '/app/:path*'],
}
