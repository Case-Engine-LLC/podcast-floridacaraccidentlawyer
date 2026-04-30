import { ImageResponse } from 'next/og'
import { siteConfig, attorney } from '@/data/siteData'

export const runtime = 'edge'
export const alt = `${siteConfig.podcastName} — hosted by ${attorney.name}, ${attorney.firm}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#050505',
          color: '#ffffff',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 520,
            height: 520,
            background:
              'radial-gradient(circle at 70% 30%, rgba(245,158,11,0.32) 0%, rgba(5,5,5,0) 60%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 56,
          }}
        >
          <div
            style={{
              width: 48,
              height: 2,
              background: '#F59E0B',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#F59E0B',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            EBERST LAW FIRM
          </div>
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex' }}>Jonathon Eberst</div>
        </div>

        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.35,
            maxWidth: 960,
            display: 'flex',
            marginBottom: 40,
          }}
        >
          {attorney.title} — host of {siteConfig.podcastName}.
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 64,
            left: 80,
            right: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.18)',
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex' }}>Florida</span>
            <span style={{ display: 'flex', color: '#F59E0B' }}>·</span>
            <span style={{ display: 'flex' }}>Stuart</span>
            <span style={{ display: 'flex', color: '#F59E0B' }}>·</span>
            <span style={{ display: 'flex' }}>Daytona Beach</span>
            <span style={{ display: 'flex', color: '#F59E0B' }}>·</span>
            <span style={{ display: 'flex' }}>Gainesville</span>
          </div>
          <div style={{ display: 'flex', color: '#F59E0B', fontWeight: 600 }}>
            eberstlaw.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
