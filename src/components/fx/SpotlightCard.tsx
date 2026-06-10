import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, type Variants } from 'framer-motion'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  variants?: Variants
}

/**
 * Card whose border-glow follows the cursor (CSS does the painting via the
 * .spotlight-card ::before layer; we just feed it --mx/--my, bypassing React
 * re-renders entirely).
 */
export default function SpotlightCard({ children, className = '', variants }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <motion.div ref={ref} variants={variants} onMouseMove={onMouseMove} className={`spotlight-card ${className}`}>
      {children}
    </motion.div>
  )
}
