import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { isPrerendering } from '../../lib/prerender'

interface TypeTextProps {
  text: string
  /** ms per character */
  speed?: number
  startDelay?: number
  className?: string
}

/**
 * Typewriter reveal that starts when scrolled into view, with a blinking
 * caret while typing. Shows the full text during prerendering.
 */
export default function TypeText({ text, speed = 12, startDelay = 500, className }: TypeTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(isPrerendering ? text.length : 0)

  useEffect(() => {
    if (!inView || isPrerendering) return
    let interval: ReturnType<typeof setInterval> | undefined
    const timeout = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length && interval) clearInterval(interval)
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [inView, text, speed, startDelay])

  const typing = count < text.length
  return (
    <span ref={ref} className={className}>
      {text.slice(0, count)}
      {typing && (
        <span className="inline-block w-[3px] h-[1em] bg-ps-green/80 ml-0.5 align-text-bottom animate-pulse" />
      )}
    </span>
  )
}
