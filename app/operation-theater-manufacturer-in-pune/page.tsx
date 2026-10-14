import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Operation Theater Manufacturer in Pune | Airtec Solutions",
  description:
    "Airtec Solutions is a pioneering operation theater manufacturer in Pune and Maharashtra offering customized, hygienic and technologically advanced operation theater solutions.",
  alternates: { canonical: "/operation-theater-manufacturer-in-pune" },
  openGraph: {
    title: "Operation Theater Manufacturer in Pune | Airtec Solutions",
    description: "Customized operation theater design, equipment, hygiene, infection-control and sustainable healthcare infrastructure solutions.",
    type: "website",
  },
};

const capabilities = [
  ["Innovative Design and Customization", "Airtec Solutions takes pride in its innovative approach to operation theater design. Understanding the unique requirements of healthcare institutions, the company provides customizable solutions tailored to meet the specific needs of each client. The design process at Airtec Solutions involves a collaborative effort with healthcare professionals, architects, and engineers to create operation theaters that enhance efficiency, safety, and overall functionality."],
  ["State-of-the-Art Technology", "The heart of any operation theater lies in its equipment and technology. Airtec Solutions integrates state-of-the-art medical equipment into its designs, ensuring that healthcare professionals have access to the latest advancements in surgical technology. From advanced lighting systems to cutting-edge anesthesia machines, Airtec Solutions leaves no stone unturned in providing a technologically advanced environment for medical procedures."],
  ["Hygiene and Infection Control", "Recognizing the critical importance of maintaining a sterile environment in operation theaters, Airtec Solutions places a strong emphasis on hygiene and infection control. The company employs cutting-edge materials and construction techniques that comply with international standards. Air purification systems, laminar flow technology, and anti-microbial surfaces are integrated seamlessly into the operation theater design to create an environment that prioritizes patient safety and infection prevention."],
  ["Compliance with Regulatory Standards", "Airtec Solutions is committed to delivering operation theaters that adhere to stringent regulatory standards. The company ensures that its Manufacturer processes align with guidelines set by health authorities and regulatory bodies. This commitment to compliance not only reflects Airtec Solutions' dedication to quality but also provides healthcare institutions with the assurance that their operation theaters meet the highest industry standards."],
  ["Collaborative Approach", "Airtec Solutions distinguishes itself through its collaborative approach to project execution. The company collaborates closely with healthcare professionals, architects, and project managers to create operation theaters that seamlessly integrate with the overall infrastructure of the healthcare facility. This collaborative ethos fosters communication and ensures that the final product aligns with the vision and requirements of the client."],
  ["Environmental Sustainability", "In addition to its commitment to technological innovation and regulatory compliance, Airtec Solutions places a strong emphasis on environmental sustainability. The company incorporates energy-efficient solutions into its operation theater designs, contributing to the overall sustainability of healthcare facilities. From eco-friendly construction materials to energy-efficient lighting systems, Airtec Solutions aims to minimize its ecological footprint while providing state-of-the-art healthcare infrastructure."],
] as const;

const relatedSolutions = [
  ["01", "Sterilized Operation Theater", "Modular sterilized operation theaters with durable, hygienic construction.", "/sterilized-operation-theater-manufacturer"],
  ["02", "Modular Operation Theatre", "Controlled healthcare environments planned around clinical workflow.", "/solutions/modular-operation-theater-manufacturer"],
  ["03", "OT Control Panel", "Centralized operation theatre monitoring and control equipment.", "/products/ot-control-panel"],
  ["04", "OT Lights", "Focused surgical lighting for modern operation theatres.", "/products/ot-lights"],
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Operation Theater Manufacturer in Pune",
  description: metadata.description,
  provider: { "@type": "Organization", name: "Airtec Solutions" },
  areaServed: "Pune, Maharashtra, India",
  serviceType: "Operation theater design and manufacturing",
};

export default function OperationTheaterManufacturerInPunePage() {
  return (
    <>
      <Header />
      <main className="product-detail operation-theater-pune-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <section className="product-detail-hero"><Image src="/solutions/modular-ot/hero.png" alt="Operation theater manufactured by Airtec Solutions in Pune" fill priority sizes="100vw" /><div className="product-detail-shade" /><div className="container product-detail-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/solutions">Solutions</Link><span>/</span><span aria-current="page">Operation Theater Manufacturer in Pune</span></nav>
          <p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / HEALTHCARE INFRASTRUCTURE</p>
          <small className="product-status-badge product-status-badge-dark">PUNE / MAHARASHTRA</small>
          <h1>Operation Theater Manufacturer in Pune</h1>
          <p>Customized, hygienic and technologically advanced operation theater solutions for healthcare facilities.</p>
        </div></section>

        <section className="product-overview section-pad"><div className="container product-overview-grid"><div><p className="eyebrow">AIRTEC SOLUTIONS / OPERATION THEATERS</p><h2>Healthcare infrastructure with <em>purpose.</em></h2><p className="product-overview-lead">In the dynamic landscape of healthcare, the demand for cutting-edge medical facilities is ever-growing. Pune, a city renowned for its technological prowess, is home to Airtec Solutions, a trailblazing operation theater manufacturer dedicated to revolutionizing the healthcare infrastructure. With a commitment to excellence and innovation, Airtec Solutions has emerged as a key player in the domain, setting new standards for operation theater design, equipment, and functionality.</p><Link className="button button-primary" href="/contact">Discuss your project <b>↗</b></Link></div><aside className="product-quick-spec"><span>PROJECT AT A GLANCE</span><div><b>Service</b><p>Operation theater manufacturing</p></div><div><b>Location</b><p>Pune, Maharashtra</p></div><div><b>Focus</b><p>Safety, hygiene and functionality</p></div><div><b>Approach</b><p>Customized and collaborative</p></div></aside></div></section>

        <section className="operation-theater-pune-gallery section-pad"><div className="container"><div className="operation-theater-pune-gallery-heading"><div><p className="eyebrow">OPERATION THEATER DESIGN</p><h2>Designed around <em>clinical workflow.</em></h2></div><p>From the room envelope to lighting, airflow, controls and equipment, every element is considered around the healthcare facility and the people who use it.</p></div><div className="operation-theater-pune-gallery-grid"><figure><Image src="/solutions/modular-ot/theatre-2.png" alt="Modern modular operation theater interior" fill sizes="(max-width: 800px) 100vw, 62vw" /><figcaption><span>01</span> Hygienic operation theater interiors designed for clinical performance.</figcaption></figure><figure><Image src="/solutions/modular-ot/theatre-3.png" alt="Operation theater with surgical lighting and modular panels" fill sizes="(max-width: 800px) 100vw, 38vw" /><figcaption><span>02</span> Integrated lighting, panels and equipment zones.</figcaption></figure></div></div></section>

        <section className="operation-theater-pune-capabilities section-pad"><div className="container"><div className="operation-theater-pune-heading"><div><p className="eyebrow">AIRTEC CAPABILITIES</p><h2>Six principles behind a <em>better operation theater.</em></h2></div><p>Airtec Solutions brings design thinking, advanced technology, infection control and responsible project delivery together in every healthcare environment.</p></div><div className="operation-theater-pune-grid">{capabilities.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="product-benefits operation-theater-pune-benefits"><div className="container product-benefits-grid"><div><p className="eyebrow eyebrow-light">WHY AIRTEC SOLUTIONS</p><h2>A trusted partner for <em>critical healthcare spaces.</em></h2></div><div className="product-feature-list"><div><span>01</span><p>Custom operation theater solutions tailored to healthcare institutions.</p></div><div><span>02</span><p>Advanced lighting, anesthesia, airflow and medical equipment integration.</p></div><div><span>03</span><p>Hygiene and infection-control planning around patient safety.</p></div><div><span>04</span><p>Collaborative execution with healthcare professionals, architects and engineers.</p></div></div></div></section>

        <section className="operation-theater-pune-conclusion section-pad"><div className="container"><p className="eyebrow eyebrow-light">CONCLUSION</p><h2>Revolutionizing healthcare infrastructure in <em>Pune and beyond.</em></h2><p>Airtec Solutions stands at the forefront of operation theater Manufacturer in Pune &amp; Maharashtra, epitomizing a commitment to excellence, innovation, and collaboration. As the healthcare industry continues to evolve, Airtec Solutions remains dedicated to providing cutting-edge solutions that enhance the efficiency, safety, and overall functionality of operation theaters. With a focus on customization, advanced technology, hygiene, and sustainability, Airtec Solutions is reshaping the landscape of healthcare infrastructure in Pune and beyond.</p><Link className="button button-light" href="/contact">Plan your operation theater <b>↗</b></Link></div></section>

        <section className="product-related section-pad"><div className="container"><div className="related-heading"><div><p className="eyebrow">CONTINUE EXPLORING</p><h2>Related solutions</h2></div><Link href="/solutions">View all solutions ↗</Link></div><div className="related-grid">{relatedSolutions.map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
