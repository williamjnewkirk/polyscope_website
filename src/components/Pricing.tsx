import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Minus } from '@phosphor-icons/react'

interface TierFeature {
  label: string
  free: string | boolean
  pro: string | boolean
  premium: string | boolean
}

const FEATURES: TierFeature[] = [
  { label: 'Wallets tracked',           free: '3',          pro: '20',       premium: 'Unlimited' },
  { label: 'Daily push notifications',  free: '20/day',     pro: '50/day',   premium: 'Unlimited' },
  { label: 'Signals (High Conviction)',  free: false,        pro: '10/day',   premium: 'Unlimited' },
  { label: 'Suggested whale wallets',   free: false,        pro: '10',       premium: '50 (full library)' },
  { label: 'Ad-free experience',        free: false,        pro: true,       premium: true },
  { label: 'AI Trade Advisor',          free: false,        pro: false,      premium: true },
]

const TIERS = [
  {
    id: 'free',
    name: 'Free',
    monthlyPrice: '0',
    yearlyPrice:  '0',
    yearlyTotal:  null,
    description: 'Follow up to 3 wallets and see what the whales are doing.',
    cta: 'Get Started',
    highlight: false,
    trialLabel: null,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: '19.99',
    yearlyPrice:  '13',
    yearlyTotal:  '155.99',
    description: 'Expanded tracking, insider alerts, whale suggestions, and no ads.',
    cta: 'Start 7-Day Trial',
    highlight: true,
    trialLabel: '7-day free trial',
  },
  {
    id: 'premium',
    name: 'Premium',
    monthlyPrice: '59.99',
    yearlyPrice:  '38.75',
    yearlyTotal:  '464.99',
    description: 'Unlimited everything plus Claude-powered AI trade analysis.',
    cta: 'Start 3-Day Trial',
    highlight: false,
    trialLabel: '3-day free trial',
  },
] as const

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === false) return <Minus size={14} className="text-white/20 mx-auto" />
  if (value === true)  return <Check size={14} weight="bold" className="text-ps-green mx-auto" />
  return <span className="text-xs font-medium text-ps-text">{value}</span>
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="py-24 bg-ps-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ps-green mb-3">Pricing</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ps-text leading-tight">
              Simple, honest tiers.
            </h2>
            <p className="mt-3 text-ps-muted text-base max-w-[42ch]">
              Start free, upgrade when you need more signal.
            </p>
          </div>

          {/* Monthly / Yearly toggle */}
          <div className="flex items-center gap-3 self-start sm:self-end">
            <span className={`text-sm font-medium transition-colors ${!yearly ? 'text-ps-text' : 'text-ps-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${yearly ? 'bg-ps-green' : 'bg-white/10'}`}
              aria-label="Toggle yearly pricing"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${yearly ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${yearly ? 'text-ps-text' : 'text-ps-muted'}`}>
              Yearly
              <span className="ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-ps-green/15 text-ps-green align-middle">
                Save 35%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                tier.highlight
                  ? 'bg-ps-card border-ps-green/35 glow-green scale-[1.02]'
                  : 'bg-ps-card border-white/[0.07]'
              }`}
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-ps-green text-ps-black">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <p className="text-sm font-bold text-ps-muted uppercase tracking-widest mb-1">{tier.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-extrabold font-mono text-ps-text tracking-tight"
                    >
                      ${yearly ? tier.yearlyPrice : tier.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-ps-muted mb-1.5">/mo</span>
                </div>
                {yearly && tier.yearlyTotal && (
                  <p className="text-xs text-ps-muted -mt-1 mb-1">billed ${tier.yearlyTotal}/yr</p>
                )}
                {tier.trialLabel && (
                  <p className="text-xs text-ps-green font-medium mb-1">{tier.trialLabel}</p>
                )}
                <p className="text-xs text-ps-muted leading-relaxed">{tier.description}</p>
              </div>

              <a
                href="#download"
                className={`w-full py-3 rounded-full text-sm font-bold text-center transition-all duration-200 active:scale-[0.97] ${
                  tier.highlight
                    ? 'bg-ps-green text-ps-black hover:bg-opacity-90'
                    : 'bg-white/[0.07] text-ps-text hover:bg-white/[0.11] border border-white/[0.09]'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </motion.div>

        {/* Feature comparison table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/[0.07] overflow-hidden bg-ps-card"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
        >
          {/* Table header */}
          <div className="grid grid-cols-4 border-b border-white/[0.07] px-6 py-4">
            <span className="text-xs font-semibold text-ps-muted">Feature</span>
            {TIERS.map((t) => (
              <span key={t.id} className={`text-xs font-bold text-center ${t.highlight ? 'text-ps-green' : 'text-ps-text'}`}>
                {t.name}
              </span>
            ))}
          </div>

          {FEATURES.map((feat, i) => (
            <div
              key={feat.label}
              className={`grid grid-cols-4 px-6 py-3.5 items-center ${i < FEATURES.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
            >
              <span className="text-xs text-ps-muted pr-4">{feat.label}</span>
              <div className="text-center"><FeatureValue value={feat.free} /></div>
              <div className="text-center"><FeatureValue value={feat.pro} /></div>
              <div className="text-center"><FeatureValue value={feat.premium} /></div>
            </div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-ps-muted">
          All paid plans require a valid payment method. Trials auto-convert unless cancelled.
          Weekly subscriptions do not include a trial period.
        </p>
      </div>
    </section>
  )
}
