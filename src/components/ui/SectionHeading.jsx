import { motion } from 'framer-motion'

export default function SectionHeading({
  badge,
  badgeColor = 'brand',
  title,
  gradientTitle,
  description,
  inView = true,
  className = 'text-center mb-14'
}) {
  const badgeColors = {
    brand: 'bg-brand/10 border-brand/25 text-brand',
    'brand-2': 'bg-brand-2/10 border-brand-2/25 text-brand-2',
    'brand-3': 'bg-brand-3/10 border-brand-3/25 text-brand-3',
    accent: 'bg-accent/10 border-accent/25 text-accent',
  }

  const activeBadgeColor = badgeColors[badgeColor] || badgeColors.brand

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3.5 border ${activeBadgeColor}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
        {title}{' '}
        {gradientTitle && (
          <span className="gradient-text">{gradientTitle}</span>
        )}
      </h2>

      {description && (
        <p className="text-muted max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
