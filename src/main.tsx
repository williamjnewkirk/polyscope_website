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

export const isPrerendering =
  typeof window !== 'undefined' && navigator.userAgent === 'ReactSnap'

if (isPrerendering) {
  // Layer 1: Replace IntersectionObserver so every whileInView element fires
  // immediately — Framer Motion never has to wait for a real scroll event.
  ;(window as unknown as Record<string, unknown>)['IntersectionObserver'] = class {
    private cb: IntersectionObserverCallback
    readonly root: Element | null = null
    readonly rootMargin = '0px'
    readonly thresholds: ReadonlyArray<number> = [0]

    constructor(callback: IntersectionObserverCallback) {
      this.cb = callback
    }

    observe(target: Element) {
      Promise.resolve().then(() => {
        const rect = target.getBoundingClientRect()
        this.cb(
          [{ isIntersecting: true, intersectionRatio: 1, target,
             boundingClientRect: rect, intersectionRect: rect,
             rootBounds: null, time: performance.now() }],
          this as unknown as IntersectionObserver,
        )
      })
    }

    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] { return [] }
  }

  // Layer 2: After React renders and all effects settle, do a final DOM sweep
  // to force any remaining opacity:0 elements visible, then signal react-snap.
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll<HTMLElement>('[style*="opacity"]').forEach(el => {
        if (el.style.opacity === '0') {
          el.style.opacity = '1'
          el.style.transform = 'none'
        }
      })
      document.dispatchEvent(new Event('prerender-ready'))
    }, 1200)
  })
}

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
