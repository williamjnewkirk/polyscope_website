import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import { isPrerendering } from '../../lib/prerender'

interface CountUpProps {
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

/**
 * Animates a number from 0 to `to` the first time it scrolls into view.
 * Renders the final value immediately during prerendering.
 */
export default function CountUp({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.5,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(isPrerendering ? to : 0)

  useEffect(() => {
    if (!inView || isPrerendering) return
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
