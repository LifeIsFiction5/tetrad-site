import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Tetrad Construction</div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline underline-offset-4">Services</a>
            <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5"
          >
            Get a quote
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide opacity-70">
                Kansas City Metro
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Building spaces that last.
              </h1>
              <p className="mt-4 text-base md:text-lg opacity-80">
                Residential and commercial construction, remodels, and project management.
                Quality workmanship, clear communication, and predictable timelines.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-3 text-sm font-medium"
                >
                  Request an estimate
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-medium hover:bg-black/5"
                >
                  View projects
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold">Licensed</div>
                  <div className="opacity-70">Insured</div>
                </div>
                <div>
                  <div className="font-semibold">Local</div>
                  <div className="opacity-70">KCMO-based</div>
                </div>
                <div>
                  <div className="font-semibold">On time</div>
                  <div className="opacity-70">On budget</div>
                </div>
              </div>
            </div>

            {/* Placeholder image block (swap for real later) */}
            <div className="rounded-xl border bg-black/5 min-h-[260px] md:min-h-[360px]" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t bg-black/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Services</h2>
            <p className="mt-3 opacity-80 max-w-2xl">
              A tight, reliable crew for jobs that need to be done right the first time.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: "Residential Remodels", desc: "Kitchens, baths, basements, additions, and structural work." },
                { title: "Commercial Buildouts", desc: "Tenant improvements, interior buildouts, and maintenance." },
                { title: "Project Management", desc: "Planning, scheduling, subcontractor coordination, and punch lists." },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border bg-white p-6">
                  <div className="font-semibold">{card.title}</div>
                  <p className="mt-2 text-sm opacity-80">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Recent work</h2>
                <p className="mt-3 opacity-80">A few examples. More coming soon.</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl border overflow-hidden">
                  <div className="bg-black/5 h-40" />
                  <div className="p-5">
                    <div className="font-semibold">Project title</div>
                    <p className="mt-2 text-sm opacity-80">
                      Short description of scope, timeframe, and results.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t bg-black/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Tetrad</h2>
                <p className="mt-4 opacity-80">
                  Add the real story from Wix here: who you are, what you specialize in, and how you work.
                  Keep it concrete—types of jobs, service area, and what clients can expect.
                </p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <div className="font-semibold">What you can expect</div>
                <ul className="mt-3 space-y-2 text-sm opacity-80 list-disc pl-5">
                  <li>Clear estimates and scope</li>
                  <li>Consistent communication</li>
                  <li>Clean job sites and respectful crews</li>
                  <li>Final walkthrough and punch list</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 opacity-80 max-w-2xl">
              Tell us a bit about your project and we’ll get back to you.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <form className="rounded-xl border p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input className="mt-1 w-full rounded-md border px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input className="mt-1 w-full rounded-md border px-3 py-2" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea className="mt-1 w-full rounded-md border px-3 py-2 min-h-[120px]" />
                </div>
                <button
                  type="button"
                  className="w-full rounded-md bg-black text-white px-4 py-3 text-sm font-medium"
                >
                  Send message
                </button>
                <p className="text-xs opacity-60">
                  (We’ll wire this to Formspree or a Worker endpoint once you confirm the client email.)
                </p>
              </form>

              <div className="rounded-xl border bg-black/[0.02] p-6">
                <div className="font-semibold">Direct</div>
                <div className="mt-3 space-y-2 text-sm opacity-80">
                  <p><span className="font-medium">Phone:</span> (###) ###-####</p>
                  <p><span className="font-medium">Email:</span> hello@tetradconstruction.com</p>
                  <p><span className="font-medium">Service area:</span> Kansas City Metro</p>
                </div>

                <div className="mt-8 rounded-lg border bg-white p-4 text-sm opacity-80">
                  Later: embed Google Map / service area map / license numbers.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm opacity-80">
          <div>© {new Date().getFullYear()} Tetrad Construction</div>
          <div>
            Built by <span className="font-medium opacity-100">Maroon Raccoon</span>
          </div>
        </div>
      </footer>
    </div>
  );
}