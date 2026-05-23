import { useEffect } from 'react'
import Hero from '../components/Hero'
import MarqueeTicker from '../components/MarqueeTicker'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import DownloadCTA from '../components/DownloadCTA'

export default function Home() {
  useEffect(() => {
    document.title = 'Polyscope | Polymarket Whale Intelligence App'
  }, [])

  return (
    <>
      <Hero />
      <MarqueeTicker />
      <Features />
      <HowItWorks />
      <Pricing />
      <DownloadCTA />
    </>
  )
}
