import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 48,
  height: 48,
}
 
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20%',
        }}
      >
        C
      </div>
    ),
    {
      ...size,
    }
  )
}
