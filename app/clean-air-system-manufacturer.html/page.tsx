import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clean Air System Manufacturer in Maharashtra | Airtec Solutions",
  description:
    "Airtec Solutions is a Clean Air System Manufacturer in Maharashtra, offering air showers, pressure modules and cleanroom infrastructure for hospitals, pharma, biotech and precision industries.",
  alternates: { canonical: "/clean-air-system-manufacturer.html" },
  openGraph: {
    title: "Clean Air System Manufacturer in Maharashtra | Airtec Solutions",
    description:
      "Air showers, pressure modules and cleanroom infrastructure for hospitals, pharmaceutical, biotech and precision manufacturing applications.",
    type: "website",
  },
};

const productCategories = [
  ["01", "Air Showers", "Personnel decontamination before cleanroom or OT entry", "/products/air-shower"],
  ["02", "Clean Air Pressure Modules", "Positive or negative pressure isolation zones", "/pressure-module-manufacturer"],
  ["03", "Modular Clean Room Systems", "Pharma, biotech and electronics cleanrooms", "/modular-clean-room"],
  ["04", "Modular Operation Theatres", "Hospitals and surgical centres", "/solutions/modular-operation-theater-manufacturer"],
  ["05", "Laminar Air Flow Workstations and Cabinets", "Sterile handling and sample preparation", "/laminar-air-flow-cabinet-manufacturer.html"],
  ["06", "Static Pass Boxes and Hatch Boxes", "Material transfer between clean zones", "/products/pass-box"],
  ["07", "Biosafety Cabinets", "Handling of biohazard materials in laboratories", ""],
  ["08", "HEPA Filters", "Standalone and integrated filtration", "/products/hepa-filter"],
  ["09", "Clean Room and OT Doors", "Airtight, hygienic door systems", "/products/cleanroom-doors"],
] as const;

const specifications = [
  ["HEPA Filter Efficiency", "99.97% down to 0.3 microns"],
  ["Pre-Filter Efficiency", "85 to 95% down to 10 microns"],
  ["Air Velocity (Air Shower)", "Around 15 m/s, depending on nozzle configuration"],
  ["Body Finish", "18-gauge CRCA powder-coated, or SS 304 grade (optional)"],
  ["Electrical Supply", "3-Phase, 440V, 50Hz (model dependent)"],
  ["Automation Grade", "Fully automatic with digital control panel"],
  ["Door Type", "Interlocked, hinged glass doors with electromagnetic locks"],
];

const manufacturingStrengths = [
  ["01", "In-house fabrication", "Steel and stainless-steel enclosures are fabricated in-house rather than relying on third-party assembly."],
  ["02", "Factory-level testing", "Blower assemblies, air velocity and control panels are tested before dispatch."],
  ["03", "Project capacity", "Capability to handle single-unit hospital orders and larger multi-unit pharmaceutical or industrial cleanroom projects."],
  ["04", "Customisation", "Dimensions, door configuration, including single or tunnel models, and finish can be customised according to site requirements."],
];

const faqs = [
  ["What is a clean air system used for?", "A clean air system manages tiny particles in the air before they reach a cleanroom, operation theatre or sterile production area. This lowers the chance that people, products and equipment inside become contaminated."],
  ["How is a clean air system different from an air conditioning or ventilation system?", "Standard HVAC systems mainly maintain temperature, comfort and general air circulation. A clean air system is specifically designed to filter tiny particles, usually with HEPA filters, and control pressure so that contamination stays where it should be."],
  ["Which industries need air systems the most?", "Hospitals, operation theatres and ICUs, as well as pharmaceutical manufacturers, biotech laboratories, research laboratories and electronics or precision manufacturing facilities, commonly depend on clean air systems."],
  ["Is a clean air system customisable for my facility size?", "Yes. Air showers can be configured as single-person or tunnel models. Pressure modules and modular cleanrooms can also be customised and finished in stainless steel or powder-coated mild steel depending on the site layout and required hygiene level."],
  ["Do clean air systems require maintenance?", "Yes. Pre-filters and HEPA filters must be replaced periodically. In industrial and controlled environments, the complete system should also undergo periodic testing, including particle count, airflow velocity and filter integrity checks, to maintain required performance and compliance."],
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clean Air System Manufacturer",
  description: metadata.description,
  provider: { "@type": "Organization", name: "Airtec Solutions" },
  areaServed: "Maharashtra, India",
  serviceType: "Clean air system, air shower and pressure module manufacturing",
};

export default function CleanAirSystemManufacturerPage() {
  return (
    <>
      <Header />
      <main className="solution-detail" id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <section className="solution-detail-hero">
          <Image src="/solutions/1 (2).png" alt="Clean air system and air shower equipment by Airtec Solutions" fill priority sizes="100vw" />
          <div className="solution-detail-shade" />
          <div className="container solution-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Clean Air System Manufacturer</span></nav>
            <p className="eyebrow eyebrow-light">AIRTEC CAPABILITY / CLEAN AIR SYSTEMS</p>
            <h1>Clean Air System Manufacturer</h1>
            <p>Clean Air System Manufacturer in Maharashtra for air showers, pressure modules and related cleanroom infrastructure across hospitals, pharma, biotech and precision industries.</p>
          </div>
        </section>

        <section className="air-system-intro section-pad"><div className="container air-system-intro-grid"><div><p className="eyebrow">CLEAN AIR SYSTEMS / PUNE</p><h2>Clean entry, <em>controlled environment.</em></h2><p>Every controlled environment, whether it is a hospital operation theatre, a pharmaceutical production line or an electronics cleanroom, depends on air that is measurably and consistently clean.</p><p>As a leading Clean Air System Manufacturer in Maharashtra, Airtec Solutions is based in Pune. We design, fabricate and install air showers, clean air pressure modules and related cleanroom infrastructure for hospitals, pharmaceutical companies, biotech labs and precision manufacturing units across India.</p></div><div className="air-system-tunnel" aria-hidden="true"><span>ENTRY</span><i /><i /><i /><b>HIGH-VELOCITY<br />CLEAN-AIR WASH</b><small>EXIT</small></div></div></section>

        <section className="cleanroom-definition section-pad"><div className="container cleanroom-definition-grid"><div><p className="eyebrow">THE BASICS</p><h2>What Is a Clean Air System? <em>Why It Matters.</em></h2></div><div><p>A clean air system acts as an engineered barrier between a controlled environment and the outside world. Its role is to remove contaminants such as dust, microbes, fibres and airborne particles from the air before people, materials or equipment enter a cleanroom, operation theatre or production zone.</p><p>This matters because contamination can become a safety and compliance concern. In hospitals, airborne contamination in an operation theatre can increase the risk of site infections. In manufacturing, particulate contamination can compromise batch quality. In electronics and precision manufacturing, dust particles can damage sensitive components.</p><p>An engineered clean air system reduces this risk at the point of entry instead of trying to manage contamination after it has already entered the facility.</p></div></div></section>

        <section className="cleanroom-types section-pad"><div className="container"><p className="eyebrow eyebrow-light">CLEANROOM INFRASTRUCTURE</p><div className="cleanroom-applications-heading"><h2>Types of Clean Air Systems <em>and Related Products.</em></h2><p>As an established Clean Air System Manufacturer, Airtec Solutions offers a full range of cleanroom and clean air infrastructure so facilities can source an integrated system rather than mixing components from multiple vendors.</p></div><div className="cleanroom-type-grid">{productCategories.map(([number, title, copy, href]) => <article key={title}><span>{number}</span><h3>{href ? <Link href={href}>{title}</Link> : title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="clean-air-system-specifications section-pad"><div className="container"><div className="pressure-module-heading"><p className="eyebrow">TECHNICAL PROFILE</p><h2>Reference specifications for <em>clean air systems.</em></h2></div><div className="pressure-module-table-wrap clean-air-system-table-wrap"><table><caption className="sr-only">Clean air system technical specifications</caption><thead><tr><th scope="col">Parameter</th><th scope="col">Specification</th></tr></thead><tbody>{specifications.map(([parameter, specification]) => <tr key={parameter}><th scope="row">{parameter}</th><td>{specification}</td></tr>)}</tbody></table></div></div></section>

        <section className="cleanroom-manufacturing section-pad"><div className="container cleanroom-manufacturing-grid"><div><p className="eyebrow eyebrow-light">MANUFACTURING CAPACITY &amp; QUALITY CONTROL</p><h2>Built in Bhosari, Pune for <em>controlled environments.</em></h2><p>Airtec Solutions operates its own manufacturing facility in Bhosari, Pune, and has been active in this segment since 2011.</p><p>Every unit is factory tested before dispatch. Our systems are engineered around HEPA filtration, airtight construction and validated air velocity rather than simply being assembled and sold.</p></div><ul>{manufacturingStrengths.map(([number, title, copy]) => <li key={title}><b>{number}</b><span><strong>{title}</strong>{copy}</span></li>)}</ul></div></section>

        <section className="cleanroom-faq section-pad"><div className="container"><div className="cleanroom-section-heading"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Clear answers before your <em>system is specified.</em></h2></div><div className="cleanroom-faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="cleanroom-classification section-pad"><div className="container cleanroom-classification-grid"><div><p className="eyebrow eyebrow-light">CLEAN AIR SYSTEM MANUFACTURER</p><h2>Get a Quote for Your <em>Clean Air System.</em></h2><p>Planning a cleanroom, pharmaceutical facility, hospital operation theatre or controlled manufacturing environment? Talk to Airtec Solutions about a clean air system configured around your facility requirements.</p></div><div className="cleanroom-standard-list"><span>PROJECT CONSULTATION</span><p><b>01</b>Air shower and pressure-module selection</p><p><b>02</b>HEPA filtration, airflow and access planning</p><p><b>03</b>Installation, testing and maintenance support</p><Link className="button button-light" href="/contact">Request a quote <b>↗</b></Link></div></div></section>

        <section className="related-solutions section-pad"><div className="container"><p className="eyebrow">CONTINUE EXPLORING</p><div className="related-heading"><h2>Related cleanroom solutions</h2><Link href="/solutions">View all solutions ↗</Link></div><div className="related-grid"><Link className="related-card" href="/solutions/clean-air-system-manufacturer"><span>01</span><h3>Air Shower System</h3><p>Explore the existing Airtec clean-air and air-shower solution profile.</p><b>Explore ↗</b></Link><Link className="related-card" href="/pressure-module-manufacturer"><span>02</span><h3>Pressure Module</h3><p>Positive and negative pressure modules for controlled environments.</p><b>Explore ↗</b></Link><Link className="related-card" href="/modular-clean-room"><span>03</span><h3>Modular Clean Room</h3><p>Engineered modular cleanroom systems for critical applications.</p><b>Explore ↗</b></Link></div></div></section>
      </main>
      <Footer />
    </>
  );
}
