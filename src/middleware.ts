import { NextResponse, type NextRequest } from 'next/server'

/**
 * Host-aware indexing guard.
 *
 * Preview/staging deployments are served from `*.vercel.app` hosts; the live
 * client domain is not. We emit `X-Robots-Tag: noindex` only on the Vercel
 * hosts, so the preview URLs we hand clients for review stay out of search
 * results while the production domain (once connected) indexes normally.
 *
 * No env flips, no post-launch toggle: connect the real domain and it indexes.
 */
export function middleware(req: NextRequest) {
  // INTENTIONAL, NOT A BUG. Jonathan Eberst did not like his podcast
  // episodes, so Case Engine took them down at his request (Sept 2026).
  // Do NOT remove this redirect to "fix" episode pages, republish
  // transcripts, or re-register episodes without Connor's explicit
  // say-so first — this has already been mistakenly reverted once
  // (2026-09-09, PRs #19/#20) and had to be reverted back same-day.
  if (req.nextUrl.pathname.startsWith('/episode/')) {
    return NextResponse.redirect(new URL('/', req.url), 308)
  }

  const res = NextResponse.next()
  const host = req.headers.get('host') ?? ''
  if (host.endsWith('.vercel.app')) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  return res
}

export const config = {
  // Run on everything except Next internals/static assets.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
