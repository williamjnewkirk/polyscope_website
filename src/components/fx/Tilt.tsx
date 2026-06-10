import { useRef, type ReactNode, type PointerEvent } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion'

interface TiltProps {
  children: ReactNode
  /** Max rotation in degrees. */
  max?: number
  className?: string
  /** Border radius of the glare overlay, should match the child's. */
  glareRadius?: string
}

/**
 * Pointer-tracked 3D tilt with a moving glare highlight. The child rotates
 * around its center following the cursor and springs back on leave.
 * Mouse pointers only — touch devices get the static layout.
 */
export default function Tilt({ children, max = 9, className, glareRadius = '42px' }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Normalized cursor position within the element (0..1), resting at center.
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const spring = { stiffness: 140, damping: 18, mass: 0.5 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring)

  const glareX = useTransform(px, [0, 1], ['18%', '82%'])
  const glareY = useTransform(py, [0, 1], ['12%', '88%'])
  const glare = useMotionTemplate`radial-gradient(380px circle at ${glareX} ${glareY}, rgba(255,255,255,0.09), transparent 60%)`

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse') return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }

  function onLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} style={{ perspective: 1100 }} className={className}>
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative">
        {children}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: glare, borderRadius: glareRadius }}
        />
      </motion.div>
    </div>
  )
}
