import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroMould from "@/assets/hero-mould.jpg";
import svcMould from "@/assets/svc-mould.jpg";
import svcCnc from "@/assets/svc-cnc.jpg";
import svcService from "@/assets/svc-service.jpg";
import svcDesign from "@/assets/svc-design.jpg";
import aboutFactory from "@/assets/about-factory.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVL Industries | Precision Tyre Mould Manufacturing" },
      {
        name: "description",
        content:
          "SVL Industries, Patancheru Hyderabad, designs, manufactures and services high-precision tyre moulds for the global tyre industry.",
      },
      { property: "og:title", content: "SVL Industries | Precision Tyre Moulds" },
      {
        property: "og:description",
        content:
          "Tyre mould manufacturing, CNC machining, refurbishment and design engineering from Hyderabad, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    img: svcMould,
    title: "Tyre Mould Manufacturing",
    body: "New two-piece and segmented (sectional) moulds machined to exacting tolerances for passenger, commercial and specialty tyres.",
  },
  {
    img: svcCnc,
    title: "Precision CNC Machining",
    body: "Multi-axis CNC machining, EDM and engraving for intricate tread patterns and sidewall detailing.",
  },
  {
    img: svcService,
    title: "Mould Servicing & Refurbishment",
    body: "Cleaning, repair, re-venting and refurbishment to extend mould life and restore production quality.",
  },
  {
    img: svcDesign,
    title: "Design & Engineering",
    body: "In-house CAD/CAM design, mould flow analysis and prototyping to bring your tyre design to life.",
  },
];

const stats = [
  { value: "20+", label: "Years of Expertise" },
  { value: "500+", label: "Moulds Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "24/7", label: "Service Support" },
];

const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-steel text-steel-foreground/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-xs tracking-wide">
          <span>Patancheru, Hyderabad, India</span>
          <a href="mailto:admin@svlindustries.com" className="hover:text-primary">
            admin@svlindustries.com
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-bold tracking-widest">
            SVL<span className="text-primary">.</span>INDUSTRIES
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-display text-sm tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-sm bg-primary px-5 py-2 font-display text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden bg-steel">
        <img
          src={heroMould}
          alt="Precision tyre mould being machined on a CNC bed"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="section-label">Precision Engineering Since 2004</p>
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

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <p className="section-label">What We Do</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
          End-to-end tyre mould solutions
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          From design and precision machining to refurbishment and maintenance.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-sm border border-border bg-card"
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
              <div className="border-t-2 border-primary p-7">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
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

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <img
            src={aboutFactory}
            alt="SVL Industries manufacturing floor with CNC machining centres"
            loading="lazy"
            width={1400}
            height={1000}
            className="rounded-sm object-cover"
          />
          <div>
            <p className="section-label">About SVL Industries</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built on precision, trusted for service
            </h2>
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
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label">Our Work</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Inside the shop floor</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[aboutFactory, svcCnc, svcService, svcMould, svcDesign, heroMould].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="SVL Industries precision manufacturing"
                loading="lazy"
                width={1000}
                height={750}
                className="h-56 w-full rounded-sm object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="section-label">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let's talk about your moulds</h2>
            <p className="mt-5 text-muted-foreground">
              Have a question or a project in mind? Send us a message and our team will get back to
              you.
            </p>
            <div className="mt-10 border-l-2 border-primary pl-6">
              <h3 className="text-lg font-semibold">SVL Industries</h3>
              <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
                Plot No. 12 &amp; 13,
                <br />
                Opp. Pennar Industries, Bandlaguda,
                <br />
                Patancheru, Hyderabad – 502032, India
              </address>
              <p className="mt-4 text-sm">
                <span className="font-semibold">Email: </span>
                <a href="mailto:admin@svlindustries.com" className="text-primary hover:underline">
                  admin@svlindustries.com
                </a>
              </p>
            </div>
          </div>

          <form
            className="space-y-4 rounded-sm border border-border bg-card p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Subject" name="subject" />
            </div>
            <label className="block">
              <span className="font-display text-xs tracking-widest text-muted-foreground">
                Your Message *
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-sm bg-primary py-3 font-display tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-sm text-primary">
                Thanks — your message has been noted. We'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-steel py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-steel-foreground/60 md:flex-row">
          <span className="font-display tracking-widest text-steel-foreground">
            SVL<span className="text-primary">.</span>INDUSTRIES
          </span>
          <span>© {new Date().getFullYear()} SVL Industries. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-xs tracking-widest text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
