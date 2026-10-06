import { skills } from '../data'
import Section from './Section'

const Skills = () => {
  return (
    <Section id="skills" title="Skills" tone="soft">
      <div className="overflow-x-auto rounded-xl border border-line bg-white">
        <table className="w-full text-left">
          <caption className="sr-only">Technical skills by category</caption>
          <thead className="bg-ink text-white">
            <tr>
              <th scope="col" className="w-36 px-5 py-3 text-sm font-semibold sm:w-56">
                Category
              </th>
              <th scope="col" className="px-5 py-3 text-sm font-semibold">
                Skills
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {skills.map((row) => (
              <tr key={row.category}>
                <th scope="row" className="px-5 py-4 align-top font-semibold">
                  {row.category}
                </th>
                <td className="px-5 py-4">
                  <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                    {row.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-soft px-2.5 py-1 text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

export default Skills
