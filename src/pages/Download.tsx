import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { APP_STORE_URL, storeUrl } from '../lib/links'

/**
 * SPA fallback for /download.
 *
 * In production GitHub Pages serves public/download/index.html directly, so the
 * redirect happens before any JS bundle loads and this component never mounts.
 * It exists for the paths that stay inside the router: client-side navigation
 * and the 404.html `?p=` restore. The in-app-browser handling lives only in the
 * static page, since a webview hitting /download always lands there first.
 */
export default function Download() {
  useEffect(() => {
    const source = new URLSearchParams(window.location.search).get('s') ?? undefined
    // `replace` so Back returns to the previous page rather than bouncing here.
    window.location.replace(storeUrl(source))
  }, [])

  return (
    <>
      <Helmet>
        <title>Downloading Polyscope…</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={APP_STORE_URL} />
      </Helmet>
      <main className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-6">
        <p className="text-sm text-ps-muted">Taking you to the App Store…</p>
        <a href={APP_STORE_URL} className="text-sm text-ps-green hover:underline">
          Open Polyscope on the App Store
        </a>
      </main>
    </>
  )
}
