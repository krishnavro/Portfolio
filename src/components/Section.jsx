// Shared wrapper so every section has the same spacing and heading style.
// tone="soft" gives the section a light grey background (used to alternate).

const Section = ({ id, title, tone = 'white', children }) => (
  <section
    id={id}
    className={`scroll-mt-16 border-b border-line py-16 md:py-20 ${
      tone === 'soft' ? 'bg-soft' : 'bg-white'
    }`}
  >
    <div className="mx-auto max-w-5xl px-6">
      <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  </section>
)

export default Section
