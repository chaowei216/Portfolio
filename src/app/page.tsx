export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Finn Luu</h1>
        <p className="text-gray-600">
          Software Developer — building reliable backends and clean UIs. Currently learning Kafka
          and sharing my journey on YouTube.
        </p>
      </section>

      <section className="mt-12 space-y-2">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <p className="text-sm text-gray-500">A few things I’m proud of.</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border p-4">
            <h3 className="font-semibold">Project One</h3>
            <p className="text-sm text-gray-500">Short description. Tech: Next.js, Tailwind.</p>
            <div className="mt-3 flex gap-4 text-sm">
              <a className="underline" href="#" target="_blank">
                Live
              </a>
              <a className="underline" href="#" target="_blank">
                GitHub
              </a>
            </div>
          </article>

          <article className="rounded-xl border p-4">
            <h3 className="font-semibold">Project Two</h3>
            <p className="text-sm text-gray-500">Short description. Tech: Kafka, Node.</p>
            <div className="mt-3 flex gap-4 text-sm">
              <a className="underline" href="#" target="_blank">
                Case Study
              </a>
              <a className="underline" href="#" target="_blank">
                GitHub
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-12 space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-sm text-gray-500">
          <a className="underline" href="mailto:you@example.com">
            you@example.com
          </a>{' '}
          ·{' '}
          <a className="underline" href="https://github.com/your-handle" target="_blank">
            GitHub
          </a>{' '}
          ·{' '}
          <a className="underline" href="https://linkedin.com/in/your-handle" target="_blank">
            LinkedIn
          </a>{' '}
          ·{' '}
          <a className="underline" href="https://youtube.com/@your-handle" target="_blank">
            YouTube
          </a>
        </p>
      </section>
    </main>
  )
}
