import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-brand via-brand-2 to-brand-3 origin-left shadow-[0_0_12px_rgba(79,140,255,0.7)]"
        style={{ scaleX }}
      />
    </div>
  )
}
