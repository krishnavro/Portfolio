import { profile } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from './Icons'
import Section from './Section'

const rows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: 'Phone', value: profile.phone, href: profile.phoneLink, Icon: PhoneIcon },
  { label: 'GitHub', value: 'github.com/krishnavro', href: profile.github, Icon: GitHubIcon, external: true },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'Location', value: `${profile.location} (open to relocation)`, Icon: PinIcon },
]

const Contact = () => {
  return (
    <Section id="contact" title="Contact" tone="soft">
     

      <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
        {rows.map(({ label, value, href, Icon, external }) => {
          const content = (
            <>
              <Icon className="size-5 shrink-0 text-amber-deep" />
              <span className="min-w-0">
                <span className="block text-sm text-muted">{label}</span>
                <span className="block text-[15px] font-medium [overflow-wrap:anywhere] sm:text-base">{value}</span>
              </span>
            </>
          )
          const box = 'flex items-center gap-4 rounded-xl border border-line bg-white p-5'

          return (
            <li key={label} className="min-w-0">
              {href ? (
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className={`${box} transition-colors hover:border-ink`}
                >
                  {content}
                </a>
              ) : (
                <div className={box}>{content}</div>
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default Contact
