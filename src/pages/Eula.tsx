import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TermlyEmbed from '../components/TermlyEmbed'

const EULA_POLICY_ID = '4eec582a-2c0c-43b0-b39b-725667c8d538'

export default function Eula() {
  useEffect(() => {
    document.title = 'End User License Agreement | Polyscope'
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
          <h1 className="text-3xl font-semibold text-ps-black">End User License Agreement</h1>
          <p className="mt-4 text-base text-ps-muted">
            Our EULA is embedded here using Termly.
          </p>
          <div className="mt-8">
            <TermlyEmbed policyId={EULA_POLICY_ID} />
          </div>
          <p className="mt-6 text-sm text-ps-muted">
            If the EULA does not load, <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=4eec582a-2c0c-43b0-b39b-725667c8d538" target="_blank" rel="noreferrer" className="text-ps-green hover:text-ps-green-dim">open it on Termly</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
