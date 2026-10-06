import { education } from '../data'
import Section from './Section'

const Education = () => {
  return (
    <Section id="education" title="Education" tone="soft">
     <ol className="relative m-0 ml-2 list-none space-y-9 p-0  before:absolute before:left-[-1px] before:top-4 before:bottom-0 before:w-[2px] before:bg-ink/80">
        {education.map((item) => (
          <li key={item.title} className="relative pl-10  ">
            <span
              aria-hidden="true"
              className={`absolute -left-[8px] top-1.5 size-4 rounded-full border-2 border-ink/80 ${
                item.current ? 'bg-amber' : 'bg-white'
              }`}
            />
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-muted">{item.institution}</p>
            <p className="mt-1 text-sm text-muted">
              {item.years}, {item.score}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Education
