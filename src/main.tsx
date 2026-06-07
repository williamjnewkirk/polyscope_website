import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

import logoApp from './assets/logo-appicon.png'

function setFavicon(href: string) {
  if (typeof document === 'undefined') return
  const head = document.getElementsByTagName('head')[0]

  let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    head.appendChild(link)
  }
  link.href = href

  let apple: HTMLLinkElement | null = document.querySelector("link[rel='apple-touch-icon']")
  if (!apple) {
    apple = document.createElement('link')
    apple.rel = 'apple-touch-icon'
    head.appendChild(apple)
  }
  apple.href = href
}

setFavicon(logoApp)

const rootElement = document.getElementById('root')!
const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
