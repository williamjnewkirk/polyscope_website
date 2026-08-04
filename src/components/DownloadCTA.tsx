import { motion } from 'framer-motion'
import Magnetic from './fx/Magnetic'
import { isPrerendering } from '../lib/prerender'
import { APP_STORE_URL } from '../lib/links'

function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.06] hover:bg-white/[0.10] hover:border-white/20 transition-all duration-200 select-none active:scale-[0.97]"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-ps-text" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="flex flex-col items-start">
        <span className="text-[10px] font-medium text-ps-muted leading-none">Download on the</span>
        <span className="text-lg font-bold text-ps-text leading-tight">App Store</span>
      </div>
    </a>
  )
}

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 bg-ps-surface relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(24,185,116,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={isPrerendering ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-ps-green mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ps-green animate-pulse-dot" />
            Version 1.4 out now
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ps-text leading-tight mb-4">
            Polyscope is live.
          </h2>
          <p className="text-ps-muted text-base leading-relaxed max-w-[42ch] mx-auto mb-10">
            Graded markets, million-dollar open positions, and cluster alerts with teeth.
            Free to download &mdash; onboarding sets up your feed in under a minute.
          </p>

          {/* App Store download */}
          <div className="flex items-center justify-center mb-6">
            <Magnetic strength={0.25}>
              <AppStoreBadge />
            </Magnetic>
          </div>

          <p className="text-[11px] text-ps-muted/60">
            iOS · Free to download · Pro plan available
          </p>
        </motion.div>
      </div>
    </section>
  )
}
