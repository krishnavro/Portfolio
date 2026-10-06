import { certifications } from '../data'
import { AwardIcon } from './Icons'
import Section from './Section'

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
        {certifications.map((cert) => (
          <li
            key={cert.title}
            className="flex items-start gap-4 rounded-xl border border-line bg-soft p-5"
          >
            <AwardIcon className="mt-0.5 size-6 shrink-0 text-amber-deep" />
            <div>
              <p className="font-semibold">{cert.title}</p>
              <p className="text-sm text-muted">{cert.issuer}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-medium underline underline-offset-4 hover:text-amber-deep"
                >
                  View certificate
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Certifications
