import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { UserPlus, BellRinging, Star } from '@phosphor-icons/react'

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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-ps-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
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

        {/* Steps — asymmetric layout for DESIGN_VARIANCE 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr_2px_1fr] gap-8 lg:gap-0 items-start">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`flex flex-col gap-5 px-0 lg:px-8 ${i === 1 ? 'lg:mt-10' : ''} ${i === 2 ? 'lg:mt-20' : ''}`}
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

                {/* Step indicator dot */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-ps-green" />
                  <span className="text-xs text-ps-green font-medium">Step {i + 1} of 3</span>
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

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '~5s',    label: 'Polymarket poll interval' },
            { value: '50+',    label: 'Whale wallets tracked' },
            { value: '$100k+', label: 'High Conviction threshold' },
            { value: '24/7',   label: 'Fly.io worker uptime' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-3xl font-extrabold font-mono text-ps-text tracking-tight">{value}</span>
              <span className="text-xs text-ps-muted">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
