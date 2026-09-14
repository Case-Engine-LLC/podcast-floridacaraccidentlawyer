import { NextResponse, type NextRequest } from 'next/server'

/**
 * Episode slugs that are live. Everything else under /episode/ redirects home.
 *
 * INTENTIONAL, NOT A BUG. Jonathan Eberst did not like his podcast episodes,
 * so Case Engine took the show down at his request (Sept 2026). The takedown
 * still stands for the whole season EXCEPT Episode 1: the client approved
 * Episode 1 and asked for it to go back on the site (Connor, 2026-09-14), and
 * every other episode is being refilmed.
 *
 * Do NOT widen this list, remove the redirect, republish transcripts, or
 * re-register episodes without Connor's explicit say-so — the blanket redirect
 * has already been mistakenly "fixed" once (2026-09-09, PRs #19/#20) and had to
 * be reverted back same-day.
 */
const LIVE_EPISODE_SLUGS = new Set([
  'what-every-florida-driver-needs-to-know-in-the-first-72-hours-after-a-crash',
])

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
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/episode/')) {
    const slug = pathname.slice('/episode/'.length).replace(/\/+$/, '')
    if (!LIVE_EPISODE_SLUGS.has(slug)) {
      return NextResponse.redirect(new URL('/', req.url), 308)
    }
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
