import { useEffect, useRef } from 'react'

type TermlyEmbedProps = {
  policyId: string
}

const TERMLY_SDK_ID = 'termly-jssdk'
const TERMLY_SDK_SRC = 'https://app.termly.io/embed-policy.min.js'

const loadTermlySdk = () => {
  if (typeof document === 'undefined') return

  const firstScript = document.getElementsByTagName('script')[0]
  if (!firstScript?.parentNode) return

  const existingSdk = document.getElementById(TERMLY_SDK_ID)
  const scriptId = existingSdk ? `${TERMLY_SDK_ID}-${Date.now()}` : TERMLY_SDK_ID

  const js = document.createElement('script')
  js.id = scriptId
  js.src = TERMLY_SDK_SRC
  js.async = true

  firstScript.parentNode.insertBefore(js, firstScript)
}

export default function TermlyEmbed({ policyId }: TermlyEmbedProps) {
  const embedRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (embedRef.current) {
      embedRef.current.setAttribute('name', 'termly-embed')
    }
    loadTermlySdk()
  }, [])

  return <div ref={embedRef} data-id={policyId} {...({ name: 'termly-embed' } as any)} />
}
