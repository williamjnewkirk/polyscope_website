import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import MarqueeTicker from '../components/MarqueeTicker'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import DownloadCTA from '../components/DownloadCTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Polyscope | Polymarket Whale Intelligence App</title>
        <meta name="description" content="Real-time Polymarket whale alerts on iOS. Track high-conviction trades, follow top performers, and get AI-powered market signals the moment they happen." />
        <link rel="canonical" href="https://polyscopeapp.com/" />
        <meta property="og:title" content="Polyscope | Polymarket Whale Intelligence App" />
        <meta property="og:description" content="Real-time Polymarket whale alerts on iOS. Track high-conviction trades, follow top performers, and get AI-powered market signals the moment they happen." />
        <meta property="og:url" content="https://polyscopeapp.com/" />
      </Helmet>
      <Hero />
      <MarqueeTicker />
      <Features />
      <HowItWorks />
      <Pricing />
      <DownloadCTA />
    </>
  )
}
