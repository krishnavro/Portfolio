import { profile } from '../data'

const Footer = () => {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        {/* Visitor count placeholder: connect it to a real counter later */}
        <p className="flex items-center gap-2">
          Visitors
          <span className="min-w-12 rounded border border-slate-600 px-2 py-0.5 text-center tabular-nums">
            –
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
