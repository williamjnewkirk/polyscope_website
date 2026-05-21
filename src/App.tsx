import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ps-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <Features />
      <HowItWorks />
      <Pricing />
      <DownloadCTA />
      <Footer />
    </div>
  )
}
