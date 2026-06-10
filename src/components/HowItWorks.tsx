import { Fragment, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { UserPlus, BellRinging, Star } from '@phosphor-icons/react'
import CountUp from './fx/CountUp'
import { isPrerendering } from '../lib/prerender'

const steps = [
  {
    number: '01',
    Icon: UserPlus,
    title: 'Follow the whales.',
    description:
      'Choose from our up to date leaderboard of the top Polymarket wallets, or paste any wallet address directly. Track as many as your tier allows.',
  },
  {
    number: '02',
    Icon: BellRinging,
    title: 'Get instant alerts.',
    description:
      'The moment a tracked wallet executes a qualifying trade, you get a push notification with the market, side, size, and implied probability — before the crowd catches up.',
  },
  {
    number: '03',
    Icon: Star,
    title: 'Act on AI signals.',
    description:
      'Premium users get a Claude-powered AI advisor — ask it anything about Polymarket activity, specific markets, or whale patterns and get instant, plain-English answers.',
  },
]

const stats = [
  { prefix: '~', to: 5, suffix: 's', label: 'Trade detection speed' },
  { prefix: '', to: 50, suffix: '+', label: 'Whale wallets tracked' },
  { prefix: '$', to: 100, suffix: 'k+', label: 'High Conviction threshold' },
  { prefix: '', to: 24, suffix: '/7', label: 'Always-on monitoring' },
]

export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 0.85', 'end 0.45'],
  })
  const pathProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 })

  return (
    <section id="how-it-works" className="py-24 bg-ps-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={isPrerendering ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ps-green mb-3">How it works</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ps-text max-w-lg leading-tight">
            From Polymarket to your pocket in seconds.
          </h2>
        </motion.div>

        {/* Steps — staggered three-column layout with a scroll-drawn path */}
        <div ref={stepsRef} className="relative">
          {/* The connecting path draws in as the section scrolls into view */}
          <svg
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
          >
            <motion.path
              d="M 7 14 C 24 14, 28 26, 44 28 S 70 38, 88 46"
              fill="none"
              stroke="rgba(24,185,116,0.30)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="0.5 2.5"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: isPrerendering ? 1 : pathProgress }}
            />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr_2px_1fr] gap-8 lg:gap-0 items-start">
            {steps.map((step, i) => (
              <Fragment key={step.number}>
                <motion.div
                  initial={isPrerendering ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col gap-5 px-0 lg:px-8 ${i === 1 ? 'lg:mt-10' : ''} ${i === 2 ? 'lg:mt-20' : ''}`}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-extrabold font-mono text-white/[0.07] leading-none select-none">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-ps-card border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                      <step.Icon size={20} weight="duotone" className="text-ps-green" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-ps-text mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-ps-muted leading-relaxed max-w-[34ch]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Vertical divider between steps */}
                {i < 2 && (
                  <div
                    className="hidden lg:block self-stretch w-px"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)' }}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Bottom stats bar with animated counters */}
        <motion.div
          initial={isPrerendering ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map(({ prefix, to, suffix, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <CountUp
                to={to}
                prefix={prefix}
                suffix={suffix}
                className="text-3xl font-extrabold font-mono text-ps-text tracking-tight"
              />
              <span className="text-xs text-ps-muted">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
