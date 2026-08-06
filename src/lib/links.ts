// Live App Store listing for Polyscope (iOS)
// Also hardcoded in public/download/index.html — update all of these together.
export const APP_ID = '6772628383'
export const APP_STORE_URL = `https://apps.apple.com/us/app/polyscope/id${APP_ID}`

// Provider token from App Store Connect → Analytics → Acquisition → Campaigns.
// Apple ignores the `ct` campaign token unless a matching `pt` is present, so
// while this is empty every link falls back to the plain listing URL.
export const APPLE_PROVIDER_TOKEN = ''

/**
 * App Store URL tagged with an App Analytics campaign token.
 *
 * `source` is free-form (`ig_bio`, `tiktok_profile`, …) but Apple caps `ct` at
 * ~30 characters and rejects most punctuation, so it gets squashed to
 * [a-z0-9_-]. Campaign links use Apple's /app/apple-store/id form.
 *
 * Note: App Analytics only surfaces a campaign once it has produced first-time
 * downloads from at least five distinct users — low-volume sources read empty.
 */
export function storeUrl(source?: string): string {
  const ct = (source ?? '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 30)
  if (!APPLE_PROVIDER_TOKEN || !ct) return APP_STORE_URL
  const params = new URLSearchParams({ pt: APPLE_PROVIDER_TOKEN, ct, mt: '8' })
  return `https://apps.apple.com/app/apple-store/id${APP_ID}?${params}`
}

// Public UptimeRobot status page for the Polyscope API/services
export const STATUS_URL = 'https://stats.uptimerobot.com/g2vNyl2QCa'

// Community / social
export const X_URL = 'https://x.com/PolyscopeApp'
export const TIKTOK_URL = 'https://www.tiktok.com/@polyscopeapp'
export const INSTAGRAM_URL = 'https://www.instagram.com/polyscopeapp/'
export const YOUTUBE_URL = 'https://www.youtube.com/@PolyscopeApp'
export const DISCORD_URL = 'https://discord.gg/eTmm9faC7'
