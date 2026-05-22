import { Link } from 'react-router-dom'

// Paste the full HTML + <style> block from Termly between the backticks below.
const EULA_HTML = `

  PASTE YOUR TERMLY EULA HTML HERE

`

export default function Eula() {
  return (
    <main className="min-h-screen bg-ps-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="mb-6">
          <Link to="/" className="text-xs text-ps-muted hover:text-ps-green transition-colors">
            ← Back to home
          </Link>
        </div>
        <div className="bg-white rounded-2xl p-8 sm:p-12">
          <div dangerouslySetInnerHTML={{ __html: EULA_HTML }} />
        </div>
      </div>
    </main>
  )
}
