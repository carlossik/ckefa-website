
export default function CkefaSoftwareSolutionsWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <h1 className="text-xl font-bold tracking-wide">CKEFA Software Solutions Ltd</h1>
            <p className="text-sm text-slate-300">
              Software Engineering • Quality Engineering • Artificial Intelligence • Cyber Security
            </p>
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
              Software Engineering, Quality Assurance and AI Consultancy Partner
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Helping organisations build, secure, test and transform digital products with confidence.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
               CKEFA Software Solutions Ltd provides specialist software development, software testing,
  quality assurance leadership, AI consultancy, AI governance, agentic AI implementation,
  cyber security consultancy, AI security, security-focused validation, consultancy and training
  services. We help organisations build robust digital solutions, improve quality outcomes,
  adopt AI responsibly, reduce cyber risk and strengthen confidence across the software lifecycle.
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
                A capable development team delivering reliable, scalable and business-aligned software
                solutions tailored to client needs.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <h3 className="text-lg font-semibold">Software Testing and QA</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Comprehensive testing services supported by automation tooling, system testing, regression
                testing and quality engineering practices.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <h3 className="text-lg font-semibold">AI Consultancy and Governance</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Practical advisory support to help organisations adopt AI responsibly, securely and in line
                with business objectives.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <h3 className="text-lg font-semibold">Agentic AI Solutions</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Design and implementation of intelligent AI agents that support automation, workflow
                improvement and decision-making.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">About Us</p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A dependable partner for software delivery, quality assurance and responsible AI adoption.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                At CKEFA Software Solutions Ltd, we help organisations design, build, test and improve
                software solutions that are reliable, secure and fit for purpose. Our services span software
                development, software testing, automation, QA leadership, consultancy, training, security-focused
                validation, AI consultancy, AI governance and agentic AI implementation.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-300">
                We work with clients who need trusted expertise to strengthen engineering capability, reduce
                defects, improve release readiness, enhance security assurance, adopt AI responsibly and embed
                sustainable delivery and quality practices across teams, products and business operations.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Our Services</p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Services designed to strengthen software delivery, quality, security and AI capability.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Software Development</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Delivery of tailored software solutions by a skilled development team, focused on reliability,
                scalability, maintainability and alignment with client and business objectives.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Software Testing, Automation and Security</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Comprehensive testing services covering functional testing, test automation, regression testing,
                system-level testing, security testing and cyber security-focused assurance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">QA Leadership, Consultancy and Training</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Strategic QA leadership, advisory support and practical training to improve quality culture,
                delivery governance, team capability and engineering effectiveness.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">AI Consultancy</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Practical AI advisory services to help organisations identify opportunities, define
                implementation roadmaps, assess readiness and adopt AI solutions that deliver measurable
                business value.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">AI Governance and Responsible AI</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Support with responsible AI governance, risk management, oversight frameworks, policy guidance,
                ethical AI practices and regulatory readiness.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Agentic AI Solutions</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Design and implementation of intelligent AI agents that automate business workflows, support
                decision-making, integrate with existing systems and operate with appropriate human oversight.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">AI Security</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Security-focused support for AI applications, including data protection, AI risk assessment,
                secure implementation practices, LLM security considerations and operational safeguards.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
  <h3 className="text-xl font-semibold">Cyber Security Consultancy</h3>
  <p className="mt-4 text-sm leading-7 text-slate-300">
    Cyber security advisory support covering security assessments, secure software development
    practices, vulnerability management, security testing, governance, risk management and
    practical cyber resilience improvement.
  </p>
</div>
        </section>

        <section id="why-us" className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Why Choose Us</p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Quality-focused and AI-ready support that is practical, scalable and outcome-driven.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold">Proven Experience</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Strong capability across software development, testing, automation, security assurance,
                  quality leadership, AI consultancy and digital delivery.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold">Business-Aligned Delivery</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  A pragmatic delivery approach that balances technical excellence with business priorities,
                  timescales, operational risk and measurable outcomes.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold">Responsible AI Perspective</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Advisory support focused on practical AI adoption, governance, security, risk management and
                  implementation approaches that support responsible innovation.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold">Clear Communication</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Transparent updates, concise reporting and a collaborative working style that helps
                  stakeholders stay informed and confident.
                </p>
              </div>
            </div>
          </div>
        </section>
<section className="border-t border-white/10 bg-slate-900/60">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
        AI and Cyber Security
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Helping organisations adopt AI securely and responsibly.
      </h2>

      <p className="mt-6 text-base leading-8 text-slate-300">
        As organisations accelerate AI adoption, the threat surface continues to expand. Large
        Language Models, autonomous AI agents, data pipelines, APIs and AI-enabled decision systems
        introduce new security, governance and operational risks.
      </p>

      <p className="mt-4 text-base leading-8 text-slate-300">
        CKEFA Software Solutions helps organisations address these challenges by combining cyber
        security consultancy, AI governance, secure software engineering, AI security and quality
        assurance into a practical, integrated delivery approach.
      </p>
    </div>
  </div>
</section>
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Contact Us</p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Let’s discuss how we can support your software, quality, security or AI goals.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                Whether you need support with software development, testing, cyber security-focused assurance,
                QA leadership, AI consultancy, AI governance, agentic AI solutions, consultancy or training,
                we would be pleased to hear from you.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-200">
                <p><span className="font-semibold text-white">Company:</span> CKEFA Software Solutions Ltd</p>
                <p><span className="font-semibold text-white">Email:</span> info@ckefa.co.uk</p>
                <p><span className="font-semibold text-white">Phone:</span> +44(02083039053),+44(07951750370)</p>
                <p><span className="font-semibold text-white">Location:</span> United Kingdom</p>
                <p>
                  <span className="font-semibold text-white">Services:</span> Software Development, Software Testing,
  QA Leadership, Test Automation, AI Consultancy, AI Governance, Agentic AI Solutions, AI Security,
  Cyber Security Consultancy, Consultancy and Training
                </p>
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
                <input type="hidden" name="_redirect" value="https://ckefa.co.uk/" />

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
                Delivered structured QA leadership and automation strategy for a high-assurance government
                system, improving release confidence and reducing regression risk.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold">CMS Automation and Observability</h3>
              <p className="mt-3 text-sm text-slate-300">
                Built end-to-end automation validating DQMS logs and CloudWatch integration, significantly
                improving traceability and system observability.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold">Automation Framework Delivery</h3>
              <p className="mt-3 text-sm text-slate-300">
                Designed scalable Playwright-based frameworks enabling faster regression cycles and improved
                cross-environment reliability.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to strengthen your software delivery and AI capability?
            </h2>

            <p className="mt-6 text-slate-300">
              Partner with CKEFA Software Solutions Ltd to improve quality, reduce risk, adopt AI responsibly
              and deliver with confidence.
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
          <p>
            Software Engineering | Quality Engineering | Artificial Intelligence | Cyber Security
          </p>
        </div>
      </footer>
    </div>
  )
}