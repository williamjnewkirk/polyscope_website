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
        <title>Polyscope | Copy Score & Trader Analytics for Polymarket</title>
        <meta name="description" content="Every Polymarket wallet rated 0–100 on price-adjusted edge. See trader analytics, get smart money cluster alerts, and rank traders by ROI and Copy Score on iOS and Android." />
        <link rel="canonical" href="https://polyscopeapp.com/" />
        <meta property="og:title" content="Polyscope | Copy Score & Trader Analytics for Polymarket" />
        <meta property="og:description" content="Every Polymarket wallet rated 0–100 on price-adjusted edge. See trader analytics, get smart money cluster alerts, and rank traders by ROI and Copy Score on iOS and Android." />
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
