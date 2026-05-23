import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TermlyEmbed from '../components/TermlyEmbed'

const PRIVACY_POLICY_ID = '54b77e5f-a2e9-4081-b384-c9a63d9369aa'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Polyscope'
  }, [])

  return (
    <main className="min-h-screen bg-ps-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="mb-6">
          <Link to="/" className="text-xs text-ps-muted hover:text-ps-green transition-colors">
            ← Back to home
          </Link>
        </div>
        <div className="bg-white rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl font-semibold text-ps-black">Privacy Policy</h1>
          <p className="mt-4 text-base text-ps-muted">
            Our privacy policy is embedded here using Termly.
          </p>
          <div className="mt-8">
            <TermlyEmbed policyId={PRIVACY_POLICY_ID} />
          </div>
          <p className="mt-6 text-sm text-ps-muted">
            If the policy does not load, <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=54b77e5f-a2e9-4081-b384-c9a63d9369aa" target="_blank" rel="noreferrer" className="text-ps-green hover:text-ps-green-dim">open it on Termly</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
