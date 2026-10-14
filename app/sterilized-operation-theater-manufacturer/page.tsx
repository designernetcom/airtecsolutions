import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sterilized Operation Theater Manufacturer | Airtec Solutions",
  description:
    "Airtec Solutions offers Sterilized Operation Theater Manufacturer solutions with modular PPGI construction, sterile coating, high quality finish, long durability and robustness.",
  alternates: { canonical: "/sterilized-operation-theater-manufacturer" },
  openGraph: {
    title: "Sterilized Operation Theater Manufacturer | Airtec Solutions",
    description:
      "Modular sterilized operation theaters manufactured by Airtec Solutions for hospitals, research institutes and medical colleges.",
    type: "website",
  },
};

const specifications = [
  ["Material", "PPGI"],
  ["Built Type", "Modular"],
  ["Service Location/City", "All India"],
  ["Feather", "High Quality Finish, Long Durability and Robustness"],
  ["Country of Origin", "Made in India"],
  ["Brand", "Airtec Solutions"],
  ["Usage", "Hospital"],
] as const;

const features = [
  ["Sterile by design", "A clean, controlled environment planned around the needs of modern surgical workflows."],
  ["Modular construction", "Prefabricated modular panels support faster project execution and flexible future planning."],
  ["Built for longevity", "A robust steel structure with a high quality finish, designed for dependable everyday use."],
] as const;

const applications = ["Operation theaters", "Research institutes", "Medical colleges", "Hospitals and healthcare facilities"] as const;

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sterilized Operation Theater Manufacturer",
  description: metadata.description,
  brand: { "@type": "Brand", name: "Airtec Solutions" },
  manufacturer: { "@type": "Organization", name: "Airtec Solutions" },
  countryOfOrigin: "India",
  category: "Modular operation theater",
  material: "PPGI",
};

export default function SterilizedOperationTheaterManufacturerPage() {
  return (
    <>
      <Header />
      <main className="sterile-page" id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

        <section className="sterile-hero">
          <Image
            src="/solutions/modular-ot/hero.png"
            alt="Sterilized modular operation theater by Airtec Solutions"
            fill
            priority
            sizes="100vw"
          />
          <div className="sterile-hero-overlay" />
          <div className="container sterile-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span aria-current="page">Sterilized Operation Theater</span>
            </nav>
            <p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / MODULAR HEALTHCARE SYSTEMS</p>
            <h1>Sterilized Operation<br /><em>Theater Manufacturer</em></h1>
            <p>High-performance modular operation theaters for hospitals, research institutes and medical colleges across India.</p>
            <Link className="button button-light" href="/contact">Discuss your project <b>↗</b></Link>
          </div>
          <div className="sterile-hero-index" aria-hidden="true"><span>01</span><i /></div>
        </section>

        <section className="sterile-intro section-pad">
          <div className="container sterile-intro-grid">
            <div className="sterile-intro-heading">
              <p className="eyebrow">STERILIZED OPERATION THEATER</p>
              <h2>Controlled spaces for <em>critical care.</em></h2>
              <div className="sterile-rule" />
            </div>
            <div className="sterile-intro-copy">
              <p>Under the able guidance of our trained professionals, we offer Sterilized Operation Theater Manufacturer all over the world. We manufacture these pre-fabricated modular using raw materials which are in compliance with international quality standards.</p>
              <p>It finds its application in many operation theaters, research institutes and medical colleges. We offer this innovative modular OT fine finished steel structure sterile coating providing a high quality finish, long durability and robustness.</p>
              <Link className="text-link" href="/contact">Talk to Airtec Solutions <b>↗</b></Link>
            </div>
          </div>
        </section>

        <section className="sterile-profile section-pad">
          <div className="container sterile-profile-grid">
            <div className="sterile-profile-image">
              <Image src="/solutions/modular-ot/theatre-2.png" alt="Interior view of a modular operation theater" fill sizes="(max-width: 800px) 100vw, 54vw" />
              <span>MODULAR OT / 02</span>
            </div>
            <div className="sterile-profile-copy">
              <p className="eyebrow eyebrow-light">PRODUCT PROFILE</p>
              <h2>Made for the demands of <em>modern surgery.</em></h2>
              <p>Our sterilized operation theaters bring together prefabricated modular construction, a fine-finished steel structure and sterile coating to create a durable, hygienic clinical environment.</p>
              <p>Every project can be considered around the facility, its workflow and the needs of the people who use it every day.</p>
              <div className="sterile-metrics"><div><strong>PPGI</strong><span>Specified material</span></div><div><strong>ALL INDIA</strong><span>Service location / city</span></div></div>
            </div>
          </div>
        </section>

        <section className="sterile-specs section-pad">
          <div className="container sterile-specs-grid">
            <div><p className="eyebrow">TECHNICAL PROFILE</p><h2>Everything you need to know, <em>at a glance.</em></h2><p className="sterile-section-lead">A clear, dependable specification profile for a modular sterilized operation theater from Airtec Solutions.</p></div>
            <div className="sterile-spec-card"><div className="sterile-spec-card-top"><span>PRODUCT SPECIFICATION</span><b>AS / OT</b></div><dl>{specifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
          </div>
        </section>

        <section className="sterile-features section-pad">
          <div className="container"><p className="eyebrow eyebrow-light">WHY THIS SYSTEM</p><div className="sterile-section-heading"><h2>Purposeful design. <em>Reliable performance.</em></h2><p>From the structural material to the finished sterile surface, each detail contributes to a practical, durable operation theater environment.</p></div><div className="sterile-feature-grid">{features.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
        </section>

        <section className="sterile-applications section-pad">
          <div className="container sterile-applications-grid"><div><p className="eyebrow">APPLICATIONS</p><h2>Built around <em>healthcare.</em></h2><p>Our sterilized modular OT solution finds its application wherever a clean, robust and well-finished clinical space is essential.</p></div><div className="sterile-application-list">{applications.map((application, index) => <div key={application}><b>{String(index + 1).padStart(2, "0")}</b><span>{application}</span></div>)}</div></div>
        </section>

        <section className="sterile-cta section-pad"><div className="container sterile-cta-inner"><div><p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / MADE IN INDIA</p><h2>Planning a sterilized operation theater?</h2><p>Share your requirement with our team and discuss a modular OT designed for your facility.</p></div><Link className="button button-light" href="/contact">Request a quote <b>↗</b></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
