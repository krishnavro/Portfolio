import { useEffect, useRef } from 'react'
import { otherProjects } from '../data'
import { CloseIcon, GitHubIcon } from './Icons'


const OtherProjects = ({ open, onClose }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="other-projects-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
      className="m-auto w-[min(32rem,calc(100%-2rem))] rounded-xl bg-white p-0 text-ink shadow-xl backdrop:bg-ink/60"
    >
      <div className="max-h-[80vh] overflow-y-auto p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h3 id="other-projects-title" className="font-serif text-2xl font-semibold">
            Other Projects
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-2 rounded-md p-2 hover:bg-soft"
          >
            <CloseIcon />
          </button>
        </div>

        <ul className="m-0 list-none divide-y divide-line p-0">
          {otherProjects.map((project) => (
            <li key={project.name} className="py-4 first:pt-0 last:pb-0">
  <p className="font-semibold">{project.name}</p>

  <p className="mt-1 text-sm text-muted">
    {project.description}
  </p>

  <p className="mt-1 text-sm text-muted">
    {project.tech.join(', ')}
  </p>

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 hover:text-amber-deep"
    >
      <GitHubIcon className="size-4" />
      GitHub
    </a>
  )}
</li>
          ))}
        </ul>
      </div>
    </dialog>
  )
}

export default OtherProjects
