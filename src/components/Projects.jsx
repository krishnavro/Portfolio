import { useState } from 'react'
import { frontendProjects, mernProjects } from '../data'
import { ChevronDownIcon, ExternalLinkIcon, GitHubIcon } from './Icons'
import OtherProjects from './OtherProjects'
import Section from './Section'

// One project = one bar. Click the bar to open the details.
const ProjectItem = ({ project }) => {
  const [open, setOpen] = useState(false)
  const panelId = `project-${project.id}`

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <h4 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${
            open ? 'bg-ink text-white' : 'bg-soft hover:bg-slate-100'
          }`}
        >
          <span>
            <span className="block text-lg font-semibold">{project.name}</span>
            <span className={`block text-sm ${open ? 'text-slate-300' : 'text-muted'}`}>
              {project.subtitle}
            </span>
          </span>
          <ChevronDownIcon
            className={`size-5 shrink-0 transition-transform motion-reduce:transition-none ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h4>

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 px-5 py-5">
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed">
              {project.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-md border border-line bg-soft px-2.5 py-1 text-sm">
                  {t}
                </li>
              ))}
            </ul>

            {(project.live || project.github) && (
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-amber-deep"
                  >
                    <ExternalLinkIcon className="size-4" />
                    Live demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-amber-deep"
                  >
                    <GitHubIcon className="size-4" />
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectGroup = ({ title, projects }) => (
  <div>
    <h3 className="mb-4 border-b-2 border-ink pb-2 font-serif text-2xl font-semibold">{title}</h3>
    <div className="space-y-3">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  </div>
)

const Projects = () => {
  const [showOther, setShowOther] = useState(false)

  return (
    <Section id="projects" title="Projects">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <ProjectGroup title="MERN Stack" projects={mernProjects} />
        <ProjectGroup title="Front End" projects={frontendProjects} />
      </div>

      <div className="mt-12 text-center">
        <button
          type="button"
          onClick={() => setShowOther(true)}
          className="rounded-md border border-ink px-6 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-white"
        >
          View Other Projects
        </button>
      </div>

      <OtherProjects open={showOther} onClose={() => setShowOther(false)} />
    </Section>
  )
}

export default Projects
