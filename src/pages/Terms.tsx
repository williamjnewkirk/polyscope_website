import { Link } from 'react-router-dom'
import TermlyEmbed from '../components/TermlyEmbed'

const TERMS_POLICY_ID = '5b91fac3-cdcd-4768-b806-b0a09d8a03b6'

export default function Terms() {
  return (
    <main className="min-h-screen bg-ps-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="mb-6">
          <Link to="/" className="text-xs text-ps-muted hover:text-ps-green transition-colors">
            ← Back to home
          </Link>
        </div>
        <div className="bg-white rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl font-semibold text-ps-black">Terms of Service</h1>
          <p className="mt-4 text-base text-ps-muted">
            Our Terms of Service are embedded here using Termly.
          </p>
          <div className="mt-8">
            <TermlyEmbed policyId={TERMS_POLICY_ID} />
          </div>
          <p className="mt-6 text-sm text-ps-muted">
            If the terms do not load, <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=5b91fac3-cdcd-4768-b806-b0a09d8a03b6" target="_blank" rel="noreferrer" className="text-ps-green hover:text-ps-green-dim">open them on Termly</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
