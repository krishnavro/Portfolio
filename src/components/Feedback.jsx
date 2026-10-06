import { useState } from 'react'
import { profile } from '../data'
import Section from './Section'



const inputClass =
  'mt-1.5 w-full rounded-md border border-ink/25 bg-white px-3 py-2.5 focus:border-ink'

const Feedback = () => {
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <Section id="feedback" title="Feedback">
      <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
        I’d love to hear your thoughts on my portfolio.
Have a suggestion, spotted something I could improve. Feel free to share your feedback.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Name
            <input type="text" name="name" autoComplete="name" className={inputClass} />
          </label>
          <label className="block text-sm font-medium">
            Email (optional)
            <input type="email" name="email" autoComplete="email" className={inputClass} />
          </label>
        </div>

        <label className="block text-sm font-medium">
          Message
          <textarea name="message" rows="5" className={inputClass} />
        </label>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
          >
            Send feedback
          </button>
          {note && (
            <p role="status" className="text-sm text-muted">
              {note}
            </p>
          )}
        </div>
      </form>
    </Section>
  )
}

export default Feedback
