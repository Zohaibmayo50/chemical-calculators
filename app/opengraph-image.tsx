import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'ChemSolved - Chemistry Calculators'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 24,
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 30,
              fontSize: 70,
              fontWeight: 'bold',
              color: '#0ea5e9',
            }}
          >
            C
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 100, fontWeight: 'bold' }}>ChemSolved</div>
            <div style={{ fontSize: 40, opacity: 0.9 }}>Chemistry Calculators & Educational Tools</div>
          </div>
        </div>
        <div style={{ fontSize: 32, opacity: 0.8 }}>
          100+ Free, Accurate Chemistry Calculators
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
