import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(79, 140, 255, 0.12)',
  borderColor = 'rgba(79, 140, 255, 0.3)',
  ...props
}) {
  const cardRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl overflow-hidden bg-panel border border-border transition-colors duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />

      {/* Dynamic Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          border: `1px solid ${borderColor}`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  )
}
