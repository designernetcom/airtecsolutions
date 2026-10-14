import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Modular Operation Theater Manufacturer in Pune | Airtec Solutions",
  description:
    "Airtec Solutions is a premier modular operation theater manufacturer in Pune, delivering customized, hygienic and technology-enabled healthcare infrastructure solutions.",
  alternates: { canonical: "/modular-operation-theater-manufacturer-in-pune" },
  openGraph: {
    title: "Modular Operation Theater Manufacturer in Pune | Airtec Solutions",
    description:
      "Customized modular operation theaters designed for hygiene, functionality, compliance and long-term performance.",
    type: "website",
  },
};

const principles = [
  ["Innovative Design and Customization", "Airtec Solutions crafts modular operation theaters to international standards, with meticulous attention to functionality, hygiene and flexibility. Each OT can be tailored to the healthcare institution's workflow, clinical requirements and available space."],
  ["Advanced Technology Integration", "Advanced lighting, ventilation and surgical equipment integration are planned together to support surgical precision, operational efficiency and dependable patient outcomes. Durable materials contribute to a sustainable and cost-effective facility."],
  ["Stringent Quality Control", "Strict quality controls are applied throughout manufacturing and project delivery. This helps ensure that every modular operation theater provides a safe, sterile and dependable environment for medical procedures."],
  ["Compliance with Regulatory Standards", "Airtec Solutions plans modular operation theaters around relevant healthcare regulations and guidelines, helping healthcare providers build confidence in the safety, reliability and legality of their infrastructure."],
  ["Environmental Sustainability", "Eco-friendly materials and energy-efficient technologies are considered wherever practical, helping healthcare institutions reduce their environmental impact while maintaining high standards of clinical performance."],
  ["End-to-End Solutions", "From planning and manufacturing to installation, maintenance and post-installation support, Airtec Solutions provides one coordinated delivery experience so healthcare teams can stay focused on patient care."],
] as const;

const relatedSolutions = [
  ["01", "Operation Theater Manufacturer", "Customized operation theater planning and manufacturing for healthcare facilities.", "/operation-theater-manufacturer-in-pune"],
  ["02", "Sterilized Operation Theater", "Modular sterilized operation theaters with durable, hygienic construction.", "/sterilized-operation-theater-manufacturer"],
  ["03", "OT Control Panel", "Centralized operation theatre monitoring and control equipment.", "/products/ot-control-panel"],
  ["04", "OT Lights", "Focused surgical lighting for modern operation theatres.", "/products/ot-lights"],
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Modular Operation Theater Manufacturer in Pune",
  description: metadata.description,
  provider: { "@type": "Organization", name: "Airtec Solutions" },
  areaServed: "Pune, Maharashtra, India",
  serviceType: "Modular operation theater design and manufacturing",
};

export default function ModularOperationTheaterManufacturerInPunePage() {
  return (
    <>
      <Header />
      <main className="product-detail operation-theater-pune-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <section className="product-detail-hero">
          <Image src="/solutions/modular-ot/hero.png" alt="Modular operation theater manufactured by Airtec Solutions in Pune" fill priority sizes="100vw" />
          <div className="product-detail-shade" />
          <div className="container product-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions">Solutions</Link><span>/</span><span aria-current="page">Modular Operation Theater Manufacturer in Pune</span></nav>
            <p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / HEALTHCARE INFRASTRUCTURE</p>
            <small className="product-status-badge product-status-badge-dark">PUNE / MAHARASHTRA</small>
            <h1>Modular Operation Theater Manufacturer in Pune</h1>
            <p>State-of-the-art modular operation theaters designed for hygiene, flexibility and better healthcare delivery.</p>
          </div>
        </section>

        <section className="product-overview section-pad"><div className="container product-overview-grid"><div><p className="eyebrow">AIRTEC SOLUTIONS / MODULAR OPERATION THEATERS</p><h2>Revolutionizing healthcare infrastructure with <em>purpose.</em></h2><p className="product-overview-lead">In the dynamic landscape of healthcare, the demand for state-of-the-art facilities is paramount. Airtec Solutions is a pioneering modular operation theater manufacturer in Pune, delivering cutting-edge solutions that redefine the standards of healthcare environments.</p><Link className="button button-primary" href="/contact">Discuss your project <b>↗</b></Link></div><aside className="product-quick-spec"><span>PROJECT AT A GLANCE</span><div><b>Service</b><p>Modular OT manufacturing</p></div><div><b>Location</b><p>Pune, Maharashtra</p></div><div><b>Focus</b><p>Hygiene, safety and flexibility</p></div><div><b>Delivery</b><p>End-to-end project support</p></div></aside></div></section>

        <section className="operation-theater-pune-gallery section-pad"><div className="container"><div className="operation-theater-pune-gallery-heading"><div><p className="eyebrow">MODULAR OT DESIGN</p><h2>Built around <em>clinical performance.</em></h2></div><p>Every detail is considered to support surgical precision, infection control, efficient workflows and long-term healthcare infrastructure performance.</p></div><div className="operation-theater-pune-gallery-grid"><figure><Image src="/solutions/modular-ot/theatre-2.png" alt="Modern modular operation theater interior" fill sizes="(max-width: 800px) 100vw, 62vw" /><figcaption><span>01</span> Hygienic operation theater interiors designed for clinical performance.</figcaption></figure><figure><Image src="/solutions/modular-ot/theatre-3.png" alt="Operation theater with surgical lighting and modular panels" fill sizes="(max-width: 800px) 100vw, 38vw" /><figcaption><span>02</span> Integrated lighting, panels and equipment zones.</figcaption></figure></div></div></section>

        <section className="operation-theater-pune-capabilities section-pad"><div className="container"><div className="operation-theater-pune-heading"><div><p className="eyebrow">AIRTEC CAPABILITIES</p><h2>Six principles behind a <em>better operation theater.</em></h2></div><p>Our client-centric approach brings innovation, technology, quality, compliance, sustainability and dependable support together in one coordinated solution.</p></div><div className="operation-theater-pune-grid">{principles.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="product-benefits operation-theater-pune-benefits"><div className="container product-benefits-grid"><div><p className="eyebrow eyebrow-light">WHY AIRTEC SOLUTIONS</p><h2>A trusted partner for <em>critical healthcare spaces.</em></h2></div><div className="product-feature-list"><div><span>01</span><p>Customized modular OTs designed around specific requirements and space constraints.</p></div><div><span>02</span><p>Advanced lighting, ventilation and surgical equipment integration.</p></div><div><span>03</span><p>Strict quality control and compliance-led planning for a safe, sterile environment.</p></div><div><span>04</span><p>Installation, maintenance and post-installation support from one experienced team.</p></div></div></div></section>

        <section className="operation-theater-pune-conclusion section-pad"><div className="container"><p className="eyebrow eyebrow-light">CLIENT CONFIDENCE</p><h2>Healthcare infrastructure that earns <em>long-term trust.</em></h2><p>Hospitals and healthcare facilities in Pune and beyond value Airtec Solutions for its commitment to excellence, innovation and reliability. These client relationships reflect the impact that well-planned modular operation theaters can have on healthcare delivery.</p><p>Airtec Solutions is reshaping the future of healthcare infrastructure, one modular operation theater at a time—with thoughtful design, advanced technology, stringent quality control and comprehensive end-to-end support.</p><Link className="button button-light" href="/contact">Plan your operation theater <b>↗</b></Link></div></section>

        <section className="product-related section-pad"><div className="container"><div className="related-heading"><div><p className="eyebrow">CONTINUE EXPLORING</p><h2>Related solutions</h2></div><Link href="/solutions">View all solutions ↗</Link></div><div className="related-grid">{relatedSolutions.map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
