import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import MarqueeTicker from '../components/MarqueeTicker'
import Features from '../components/Features'
import AppShowcase from '../components/AppShowcase'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import DownloadCTA from '../components/DownloadCTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Polyscope | See Where the Smart Money Sits on Polymarket</title>
        <meta name="description" content="Every busy Polymarket market graded out of 100 on how much proven-trader money backs one outcome — with the full evidence breakdown, $1M+ open whale positions, smart money cluster alerts, and a 0–100 Copy Score for every wallet." />
        <link rel="canonical" href="https://polyscopeapp.com/" />
        <meta property="og:title" content="Polyscope | See Where the Smart Money Sits on Polymarket" />
        <meta property="og:description" content="Every busy Polymarket market graded out of 100 on how much proven-trader money backs one outcome. Plus $1M+ open whale positions, cluster alerts, and a 0–100 Copy Score per wallet." />
        <meta property="og:url" content="https://polyscopeapp.com/" />
      </Helmet>
      <main>
        <Hero />
        <MarqueeTicker />
        <Features />
        <HowItWorks />
        <AppShowcase />
        <Pricing />
        <DownloadCTA />
      </main>
    </>
  )
}
