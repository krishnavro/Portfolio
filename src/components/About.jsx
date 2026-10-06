import { about } from '../data'
import Section from './Section'

const About = () => {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 rounded-xl border border-line bg-soft p-6 text-[17px] leading-relaxed md:p-8">
        {about.map((text) => (
          <p key={text.slice(0, 24)}>{text}</p>
        ))}
      </div>
    </Section>
  )
}

export default About
