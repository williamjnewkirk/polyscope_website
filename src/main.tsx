import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import app icon so Vite resolves the correct asset URL at build time
import logoApp from './assets/logo-appicon.png'

function setFavicon(href: string) {
  if (typeof document === 'undefined') return
  const head = document.getElementsByTagName('head')[0]

  // Primary favicon
  let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    head.appendChild(link)
  }
  link.href = href

  // Apple touch icon (optional)
  let apple: HTMLLinkElement | null = document.querySelector("link[rel='apple-touch-icon']")
  if (!apple) {
    apple = document.createElement('link')
    apple.rel = 'apple-touch-icon'
    head.appendChild(apple)
  }
  apple.href = href
}

setFavicon(logoApp)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
