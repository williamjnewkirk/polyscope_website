// True only when react-snap is prerendering (userAgent set in package.json reactSnap config).
// Used to skip Framer Motion initial-hidden states so prerendered HTML has opacity:1 on all content.
export const isPrerendering =
  typeof window !== 'undefined' && navigator.userAgent === 'ReactSnap'
