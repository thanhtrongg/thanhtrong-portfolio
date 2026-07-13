import { useRef, useCallback, useState } from 'react'

export default function TiltCard({ children, className = '', style = {}, ...props }) {
  const ref = useRef(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 50, y: 50 })
  const [hover, setHover] = useState(false)
  const frame = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      setRotate({ y: dx * 8, x: -dy * 8 })
      setGlow({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    })
    setHover(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 })
    setHover(false)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${hover ? 1.01 : 1}, ${hover ? 1.01 : 1}, 1)`,
        transition: hover
          ? 'transform 0.08s ease-out'
          : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: hover ? 'transform' : 'auto',
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.1), transparent 40%)`,
          opacity: hover ? 1 : 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
