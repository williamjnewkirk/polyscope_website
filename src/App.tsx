import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Eula from './pages/Eula'

// During react-snap prerendering, disable Framer Motion animations so all
// content renders at its final visible state (opacity:1) in the static HTML.
const isPrerendering = typeof window !== 'undefined' && navigator.userAgent === 'ReactSnap'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <MotionConfig reducedMotion={isPrerendering ? 'always' : 'user'}>
        <div className="min-h-screen bg-ps-black overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Navigate to="/support" replace />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/eula" element={<Eula />} />
          </Routes>
          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  )
}
