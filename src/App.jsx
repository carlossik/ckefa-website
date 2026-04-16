export default function CkefaSoftwareSolutionsWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <h1 className="text-xl font-bold tracking-wide">CKEFA Software Solutions Ltd</h1>
            <p className="text-sm text-slate-300">Software Development, Testing, QA Leadership, and Technology Consultancy and Training</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#why-us" className="transition hover:text-white">Why Us</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Trusted Testing and Quality Engineering Partner
            </p>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Helping organisations deliver reliable, secure, and scalable digital solutions.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              CKEFA Software Solutions Ltd provides specialist software development, software testing, quality assurance leadership, consultancy, and training services. We help organisations build robust digital solutions, improve quality outcomes, reduce delivery risk, and strengthen confidence across the software lifecycle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <h3 className="text-lg font-semibold">Software Development</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                A capable development team delivering reliable, scalable, and business-aligned software solutions tailored to client needs.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <h3 className="text-lg font-semibold">Software Testing and Security Validation</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Comprehensive testing services supported by automation tooling, security testing, and cyber security-focused validation to improve confidence and reduce operational risk.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <h3 className="text-lg font-semibold">QA Leadership</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Experienced QA leadership to shape quality strategy, governance, reporting, and delivery assurance across programmes and teams.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <h3 className="text-lg font-semibold">Consultancy</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Practical consultancy and hands-on training designed to improve team capability, strengthen delivery practices, and support continuous improvement.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">About Us</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A dependable partner for software quality and delivery assurance.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                At CKEFA Software Solutions Ltd, we help organisations design, build, test, and improve software solutions that are reliable, secure, and fit for purpose. Our services span software development, software testing, automation, QA leadership, consultancy, training, and security-focused validation, with a strong emphasis on practical outcomes and measurable value.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                We work with clients who need trusted expertise to strengthen engineering capability, reduce defects, improve release readiness, enhance security assurance, and embed sustainable delivery and quality practices across teams and products.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Our Services</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Services designed to strengthen quality across the software lifecycle.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Software Development</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Delivery of tailored software solutions by a skilled development team, focused on reliability, scalability, and alignment with client and business objectives.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Software Testing, Automation, and Security</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Comprehensive testing services covering functional testing, automation tooling, security testing, and cyber security-focused assurance to strengthen software quality and resilience.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">QA Leadership, Consultancy, and Training</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Strategic QA leadership, advisory support, and practical training to improve quality culture, delivery governance, team capability, and overall engineering effectiveness.
              </p>
            </div>
          </div>
        </section>

        <section id="why-us" className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Why Choose Us</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Quality-focused support that is practical, scalable, and outcome-driven.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold">Proven Experience</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Strong capability across software development, testing, automation, security assurance, and quality leadership within complex digital environments.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold">Business-Aligned Delivery</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  A pragmatic delivery approach that balances technical excellence with business priorities, timescales, and operational risk.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold">Scalable Solutions</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Solutions and services built for sustainability, scalability, and long-term value as organisational needs evolve.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold">Clear Communication</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Transparent updates, concise reporting, and a collaborative working style that
                  helps stakeholders stay informed and confident.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Contact Us</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Let’s discuss how we can support your software quality goals.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Whether you need support with software development, testing, cyber security-focused assurance, QA leadership, consultancy, or training, we would be pleased to hear from you.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-200">
                <p><span className="font-semibold text-white">Company:</span> CKEFA Software Solutions Ltd</p>
                <p><span className="font-semibold text-white">Email:</span> info@ckefa.co.uk</p>
                <p><span className="font-semibold text-white">Phone:</span> 07951750370</p>
                <p><span className="font-semibold text-white">Location:</span> United Kingdom</p>
              <p><span className="font-semibold text-white">Services:</span> Software Development, Software Testing, Security Testing, Cyber Security, QA Leadership, Consultancy, and Training</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Use the contact details below or submit an enquiry through the contact form.
              </p>

              <form
  action="https://formspree.io/f/mwvaload"
  method="POST"
  className="mt-8 space-y-4"
>
  <input type="hidden" name="_subject" value="New Enquiry from CKEFA Website" />
  <input type="hidden" name="_redirect" value="http://localhost:5173/" />

  <div>
    <label className="mb-2 block text-sm font-medium text-white">Full Name</label>
    <input
      name="fullName"
      type="text"
      required
      placeholder="Your full name"
      className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-white">Email Address</label>
    <input
      name="email"
      type="email"
      required
      placeholder="Your email address"
      className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-white">Phone Number</label>
    <input
      name="phone"
      type="tel"
      placeholder="Your phone number"
      className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-white">How can we help?</label>
    <textarea
      name="message"
      rows={5}
      required
      placeholder="Tell us about your project or enquiry"
      className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
    />
  </div>

  <button
    type="submit"
    className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
  >
    Send Enquiry
  </button>
</form>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="font-medium text-white">Email Enquiries</p>
                  <p className="mt-1">info@ckefa.co.uk</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="font-medium text-white">Business Hours</p>
                  <p className="mt-1">Monday to Friday, 9:00 AM to 5:00 PM</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="font-medium text-white">Service Coverage</p>
                  <p className="mt-1">Remote support across the United Kingdom and beyond</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="case-studies" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
  <div className="max-w-3xl">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Case Studies</p>
    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
      Delivering measurable outcomes across complex environments
    </h2>
  </div>

  <div className="mt-12 grid gap-6 lg:grid-cols-3">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-lg font-semibold">Government Testing Programme</h3>
      <p className="mt-3 text-sm text-slate-300">
        Delivered structured QA leadership and automation strategy for a high-assurance government system, improving release confidence and reducing regression risk.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-lg font-semibold">CMS Automation & Observability</h3>
      <p className="mt-3 text-sm text-slate-300">
        Built end-to-end automation validating DQMS logs and CloudWatch integration, significantly improving traceability and system observability.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-lg font-semibold">Automation Framework Delivery</h3>
      <p className="mt-3 text-sm text-slate-300">
        Designed scalable Playwright-based frameworks enabling faster regression cycles and improved cross-environment reliability.
      </p>
    </div>
  </div>
</section>

<section className="border-t border-white/10 bg-slate-900/60">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 text-center">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      Ready to strengthen your software delivery?
    </h2>
    <p className="mt-6 text-slate-300">
      Partner with CKEFA Software Solutions Ltd to improve quality, reduce risk, and deliver with confidence.
    </p>

    <a
      href="#contact"
      className="mt-8 inline-block rounded-2xl bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
    >
      Book a Consultation
    </a>
  </div>
</section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 CKEFA Software Solutions Ltd. All rights reserved.</p>
          <p>Software Development | Software Testing | QA Leadership | Consultancy | Training</p>
        </div>
      </footer>
    </div>
  );
}
