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

const isPrerendering = typeof window !== 'undefined' && navigator.userAgent === 'ReactSnap'

if (isPrerendering) {
  // Replace IntersectionObserver with a version that immediately reports every
  // observed element as fully intersecting. This makes Framer Motion's whileInView
  // fire for all elements on the page regardless of scroll position, so the
  // captured HTML has opacity:1 on every section rather than opacity:0.
  ;(window as unknown as Record<string, unknown>)['IntersectionObserver'] = class {
    private cb: IntersectionObserverCallback
    readonly root: Element | null = null
    readonly rootMargin: string = '0px'
    readonly thresholds: ReadonlyArray<number> = [0]

    constructor(callback: IntersectionObserverCallback) {
      this.cb = callback
    }

    observe(target: Element) {
      Promise.resolve().then(() => {
        const rect = target.getBoundingClientRect()
        const entry: IntersectionObserverEntry = {
          isIntersecting: true,
          intersectionRatio: 1,
          target,
          boundingClientRect: rect,
          intersectionRect: rect,
          rootBounds: null,
          time: performance.now(),
        }
        this.cb([entry], this as unknown as IntersectionObserver)
      })
    }

    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] { return [] }
  }

  // After React renders and all whileInView effects fire, signal react-snap to capture.
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.dispatchEvent(new Event('prerender-ready'))
    }, 1500)
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
