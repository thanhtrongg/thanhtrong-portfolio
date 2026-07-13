import { useState } from 'react'

function BackgroundVideo() {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {!hasError ? (
        <video
          src="/video/1.mp4"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          onError={() => setHasError(true)}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(0,0,0,0.7) 100%)',
        }}
      />
    </div>
  )
}

export default BackgroundVideo
