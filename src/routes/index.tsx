import { createFileRoute } from "@tanstack/react-router";
import { Check, Mail, MapPin, Phone } from "lucide-react";

import heroMould from "@/assets/hero-mould.jpg";
import ctaSteel from "@/assets/cta-steel.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ContactForm } from "@/components/site/ContactForm";
import {
  aboutFactory,
  capabilities,
  gallery,
  industries,
  process,
  quality,
  services,
  stats,
  whyUs,
} from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVL Industries | Precision Tyre Mould Manufacturing, Hyderabad" },
      {
        name: "description",
        content:
          "SVL Industries designs, manufactures and services high-precision tyre moulds for the global tyre industry. CNC machining, EDM, refurbishment and design engineering from Patancheru, Hyderabad.",
      },
      { property: "og:title", content: "SVL Industries | Precision Tyre Moulds" },
      {
        property: "og:description",
        content:
          "Tyre mould manufacturing, precision CNC machining, refurbishment and design engineering from Hyderabad, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHead({
  label,
  title,
  sub,
  light,
}: {
  label: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="section-label">{label}</p>
      <h2
        className={`mt-3 text-3xl font-bold md:text-4xl ${light ? "text-steel-foreground" : ""}`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 ${light ? "text-steel-foreground/70" : "text-muted-foreground"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden bg-steel">
        <img
          src={heroMould}
          alt="Precision tyre mould segment being machined on a CNC bed"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel via-steel/70 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="section-label">Precision Engineering · Patancheru, Hyderabad</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] text-steel-foreground md:text-6xl">
            Precision Tyre Moulds,
            <span className="block text-primary">Engineered to Perform</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-foreground/75">
            SVL Industries designs, manufactures and services high-precision tyre moulds for the
            global tyre industry — combining advanced engineering with reliable after-sales service.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-primary px-7 py-3 font-display tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="rounded-sm border border-steel-foreground/30 px-7 py-3 font-display tracking-widest text-steel-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Our Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-3 px-6 py-5 text-sm text-muted-foreground sm:grid-cols-3">
          {[
            "Two-piece & segmented tyre moulds",
            "In-house CAD/CAM, CNC & EDM",
            "Servicing, re-venting & refurbishment",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-primary" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead
          label="What We Do"
          title="End-to-end tyre mould solutions"
          sub="From design and precision machining to refurbishment and maintenance — a single partner for the full life of your moulds."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1000}
                  height={750}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col border-t-2 border-primary p-7">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-steel">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-steel-foreground/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead
          label="How We Work"
          title="From enquiry to after-sales service"
          sub="A disciplined five-stage workflow that keeps your project predictable and your presses productive."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {process.map((p) => (
            <div
              key={p.step}
              className="relative rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="font-display text-3xl font-bold text-primary/25">{p.step}</span>
              <h3 className="mt-3 text-base font-semibold leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities / infrastructure */}
      <section id="capabilities" className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHead
                label="Infrastructure & Quality"
                title="Modern machinery, measured results"
                sub="Our Patancheru facility pairs skilled engineering talent with modern CNC and EDM machinery, supported by in-process inspection at every stage."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {capabilities.map((c) => (
                  <div key={c.title} className="border-l-2 border-primary pl-4">
                    <h3 className="text-sm font-semibold">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={quality}
              alt="Engineer inspecting a precision mould component on a CMM"
              loading="lazy"
              width={1200}
              height={900}
              className="rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead
          label="Industries Served"
          title="Moulds for every tyre category"
          sub="We supply and service moulds across the full spectrum of tyre manufacturing."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.name} className="bg-card p-7 transition-colors hover:bg-secondary/60">
              <h3 className="text-base font-semibold">{i.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <img
            src={aboutFactory}
            alt="SVL Industries manufacturing floor with CNC machining centres"
            loading="lazy"
            width={1400}
            height={1000}
            className="rounded-sm object-cover"
          />
          <div>
            <SectionHead
              label="About SVL Industries"
              title="Built on precision, trusted for service"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Based in Patancheru, Hyderabad, SVL Industries is a trusted manufacturer and service
              provider of tyre moulds. Our state-of-the-art facility combines skilled engineering
              talent with modern CNC and EDM machinery to deliver moulds that meet the highest
              standards of precision, durability and finish.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We partner with tyre manufacturers to reduce downtime and improve product quality
              through dependable manufacturing and responsive servicing.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-sm border border-foreground/20 px-6 py-3 font-display text-sm tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              Talk to our team
            </a>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            label="Why SVL"
            title="A mould partner, not just a supplier"
            sub="Tyre makers stay with us because precision, schedules and service are all handled in one place."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary/15">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead
          label="Our Work"
          title="Inside the shop floor"
          sub="A glimpse of our manufacturing facility and precision processes."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <img
              key={i}
              src={g.img}
              alt={g.alt}
              loading="lazy"
              width={1200}
              height={900}
              className="h-56 w-full rounded-sm object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative isolate overflow-hidden bg-steel">
        <img
          src={ctaSteel}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={700}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="max-w-2xl text-3xl font-bold text-steel-foreground md:text-4xl">
            Need a new mould — or a mould brought back to life?
          </h2>
          <p className="max-w-xl text-steel-foreground/70">
            Share your drawings and production targets. Our engineers will come back with a
            specification and timeline.
          </p>
          <a
            href="#contact"
            className="rounded-sm bg-primary px-8 py-3 font-display tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionHead
              label="Get in Touch"
              title="Let's talk about your moulds"
              sub="Have a question or a project in mind? Send us a message and our team will get back to you."
            />
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">SVL Industries</h3>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">
                    Plot No. 12 &amp; 13,
                    <br />
                    Opp. Pennar Industries, Bandlaguda,
                    <br />
                    Patancheru, Hyderabad – 502032, India
                  </address>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:admin@svlindustries.com"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    admin@svlindustries.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Service Support</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    24/7 coordination for urgent mould servicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 overflow-hidden rounded-sm border border-border">
              <iframe
                title="SVL Industries location map"
                src="https://www.google.com/maps?q=Bandlaguda,+Patancheru,+Hyderabad,+502032&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="bg-steel pt-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 sm:grid-cols-3">
          <div>
            <span className="font-display text-lg tracking-widest text-steel-foreground">
              SVL<span className="text-primary">.</span>INDUSTRIES
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-foreground/60">
              Precision tyre mould manufacturing and servicing for the global tyre industry.
            </p>
          </div>
          <div>
            <h3 className="text-sm text-steel-foreground">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-steel-foreground/60">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-primary">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-steel-foreground">Contact</h3>
            <address className="mt-4 text-sm not-italic leading-relaxed text-steel-foreground/60">
              Plot No. 12 &amp; 13, Opp. Pennar Industries,
              <br />
              Bandlaguda, Patancheru,
              <br />
              Hyderabad – 502032, India
              <br />
              <a href="mailto:admin@svlindustries.com" className="hover:text-primary">
                admin@svlindustries.com
              </a>
            </address>
          </div>
        </div>
        <div className="border-t border-steel-foreground/10 py-6">
          <p className="mx-auto max-w-6xl px-6 text-center text-xs text-steel-foreground/50">
            © {new Date().getFullYear()} SVL Industries. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
