import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Minus } from '@phosphor-icons/react'
import { isPrerendering } from '../lib/prerender'

type BillingCycle = 'weekly' | 'monthly' | 'yearly'

interface TierFeature {
  label: string
  free: string | boolean
  pro: string | boolean
}

const FEATURES: TierFeature[] = [
  { label: 'Wallets tracked',           free: '5',        pro: 'Unlimited' },
  { label: 'Daily push notifications',  free: '20/day',   pro: 'Unlimited' },
  { label: 'Signals (High Conviction)', free: false,      pro: 'Unlimited' },
  { label: 'Suggested whale wallets',   free: false,      pro: 'Full library' },
  { label: 'Ad-free experience',        free: false,      pro: true },
  { label: 'AI Trade Advisor',          free: false,      pro: '~20 queries/day' },
]

const PRO = {
  weekly:  { price: '2.99',  unit: '/wk',  billedLine: null,             trial: null,                 saveBadge: null },
  monthly: { price: '5.99',  unit: '/mo',  billedLine: null,             trial: '7-day free trial',   saveBadge: null },
  yearly:  { price: '3.33',  unit: '/mo',  billedLine: 'billed $39.99/yr', trial: '7-day free trial', saveBadge: 'Save 44%' },
} satisfies Record<BillingCycle, { price: string; unit: string; billedLine: string | null; trial: string | null; saveBadge: string | null }>

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === false) return <Minus size={14} className="text-white/20 mx-auto" />
  if (value === true)  return <Check size={14} weight="bold" className="text-ps-green mx-auto" />
  return <span className="text-xs font-medium text-ps-text">{value}</span>
}

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>('monthly')
  const pro = PRO[billing]

  return (
    <section id="pricing" className="py-24 bg-ps-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={isPrerendering ? false : { opacity: 0, y: 16 }}
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
              Start free, upgrade when you're ready to go all-in.
            </p>
          </div>

          {/* 3-way billing toggle */}
          <div className="self-start sm:self-end flex items-center gap-0.5 p-1 rounded-full bg-white/[0.06] border border-white/[0.08]">
            {(['weekly', 'monthly', 'yearly'] as BillingCycle[]).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBilling(cycle)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  billing === cycle
                    ? 'bg-ps-green text-ps-black shadow-sm'
                    : 'text-ps-muted hover:text-ps-text'
                }`}
              >
                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                {cycle === 'yearly' && billing !== 'yearly' && (
                  <span className="ml-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-ps-green/15 text-ps-green align-middle">
                    −44%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing cards — 2-column centered */}
        <motion.div
          initial={isPrerendering ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto"
        >
          {/* Free card */}
          <div className="relative rounded-2xl p-7 flex flex-col card-lift bg-ps-card border border-white/[0.07]">
            <div className="mb-6">
              <p className="text-sm font-bold text-ps-muted uppercase tracking-widest mb-1">Free</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold font-mono text-ps-text tracking-tight">$0</span>
                <span className="text-sm text-ps-muted mb-1.5">/mo</span>
              </div>
              <p className="text-xs text-ps-muted leading-relaxed">
                Follow up to 5 wallets and start tracking what the whales are doing — no card needed.
              </p>
            </div>
            <a
              href="#download"
              className="mt-auto w-full py-3 rounded-full text-sm font-bold text-center transition-all duration-200 active:scale-[0.97] bg-white/[0.07] text-ps-text hover:bg-white/[0.11] border border-white/[0.09]"
            >
              Get Started Free
            </a>
          </div>

          {/* Pro card */}
          <div className="relative rounded-2xl p-7 flex flex-col conic-border glow-green">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-ps-green text-ps-black whitespace-nowrap">
              Everything Included
            </span>

            <div className="mb-6">
              <p className="text-sm font-bold text-ps-muted uppercase tracking-widest mb-1">Pro</p>
              <div className="flex items-end gap-1 mb-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billing}
                    initial={isPrerendering ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-extrabold font-mono text-ps-text tracking-tight"
                  >
                    ${pro.price}
                  </motion.span>
                </AnimatePresence>
                <span className="text-sm text-ps-muted mb-1.5">{pro.unit}</span>
                {pro.saveBadge && (
                  <span className="ml-2 mb-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-ps-green/15 text-ps-green self-end">
                    {pro.saveBadge}
                  </span>
                )}
              </div>
              {pro.billedLine && (
                <p className="text-xs text-ps-muted mb-1">{pro.billedLine}</p>
              )}
              {pro.trial && (
                <p className="text-xs text-ps-green font-medium mb-2">{pro.trial}</p>
              )}
              <p className="text-xs text-ps-muted leading-relaxed">
                Unlimited wallets, signals, AI advisor, and no ads — everything in one plan.
              </p>
            </div>

            <a
              href="#download"
              className="mt-auto w-full py-3 rounded-full text-sm font-bold text-center transition-all duration-200 active:scale-[0.97] btn-primary bg-ps-green text-ps-black"
            >
              {billing === 'weekly' ? 'Start Weekly' : 'Start 7-Day Trial'}
            </a>
          </div>
        </motion.div>

        {/* Feature comparison table */}
        <motion.div
          initial={isPrerendering ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/[0.07] overflow-hidden bg-ps-card max-w-3xl mx-auto"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
        >
          {/* Table header */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-white/[0.07] px-4 sm:px-6 py-4">
            <span className="text-xs font-semibold text-ps-muted">Feature</span>
            <span className="text-xs font-bold text-center text-ps-text">Free</span>
            <span className="text-xs font-bold text-center text-ps-green">Pro</span>
          </div>

          {FEATURES.map((feat, i) => (
            <div
              key={feat.label}
              className={`grid grid-cols-[1.6fr_1fr_1fr] px-4 sm:px-6 py-3.5 items-center ${
                i < FEATURES.length - 1 ? 'border-b border-white/[0.05]' : ''
              }`}
            >
              <span className="text-xs text-ps-muted pr-4">{feat.label}</span>
              <div className="text-center"><FeatureValue value={feat.free} /></div>
              <div className="text-center"><FeatureValue value={feat.pro} /></div>
            </div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-ps-muted max-w-3xl mx-auto">
          Monthly and yearly plans include a 7-day free trial; trials auto-convert unless cancelled.
          Weekly plans are billed immediately with no trial period.
        </p>
      </div>
    </section>
  )
}
