import photo from '../assets/shrikrishna.jpg'
import { profile, timeline } from '../data'
import { GitHubIcon, LinkedInIcon, PinIcon, ResumeIcon } from './Icons'

const Hero = () => {
  return (
    <section id="top" className="border-b border-line bg-soft">
      <div className="mx-auto max-w-5xl px-6">
        {/* Education timeline */}
        <div className="border-b border-line py-8">
          <div className="relative">
            {/* the line runs from the first dot to the last dot */}
            <span
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-[9px] h-0.5 bg-ink"
            />
            <ol className="relative grid grid-cols-4" aria-label="Education timeline">
              {timeline.map((step) => (
                <li key={step.label} className="flex flex-col items-center text-center">
                  <span className="flex size-5 items-center justify-center">
                    {step.current ? (
                      <span className="size-5 rounded-full border-4 border-ink bg-amber" />
                    ) : (
                      <span className="size-4 rounded-full bg-ink" />
                    )}
                  </span>
                  <span className="mt-3 font-semibold">{step.label}</span>
                  <span className="text-sm text-muted">{step.years}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Name, intro and photo */}
        <div className="grid items-center gap-12 py-12 md:grid-cols-[1fr_auto] md:py-16">
          <div>
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              <span className="block">Shrikrishna</span>
              <span className="block">Kumbhar</span>
            </h1>

            <p className="mt-5 flex items-center gap-2 text-muted">
              <PinIcon className="size-4" />
              {profile.location}. Open to relocation.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
              >
                View Projects
              </a>
               <a
                href={profile.resume}
                download="Shrikrishna-Kumbhar-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-ink/25 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
                >
                <ResumeIcon className="size-4" />
                Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink/25 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink/25 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
             
            </div>
          </div>

          {/* Photo on the right of the name */}
          <div className="relative mx-auto w-56 sm:w-64 md:mr-3 md:w-72">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-amber"
            />
            <img
              src={photo}
              alt="Shrikrishna Kumbhar sitting at a computer desk"
              width="640"
              height="800"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
