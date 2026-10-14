import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Modular Clean Room Manufacturer in Maharashtra | Airtec Solutions",
  description: "Airtec Solutions is a trusted Modular Clean Room manufacturer in Maharashtra, delivering contamination-controlled environments for pharmaceutical, hospital, electronics and research applications.",
  alternates: { canonical: "/modular-clean-room" },
  openGraph: { title: "Modular Clean Room Manufacturer in Maharashtra | Airtec Solutions", description: "Durable, easy-to-sanitize modular clean room systems designed and installed by Airtec Solutions in Pune.", type: "website" },
};

const applications = [
  "Pharmaceutical manufacturing and packaging",
  "Hospitals and diagnostic centres (operation theatres, ICUs)",
  "Biotechnology and research laboratories",
  "Electronics and semiconductor units",
  "Food processing and nutraceutical facilities",
  "Cosmetics and personal care manufacturing",
];

const systemTypes = [
  ["01", "Modular Clean Room Panels", "PCGI/PPGI wall and ceiling panels in 60mm, 80mm and 100mm thicknesses.", "/products/cleanroom-panels"],
  ["02", "Modular Operation Theatres", "Sterile OT enclosures for hospitals and surgical centres.", "/solutions/modular-operation-theater-manufacturer"],
  ["03", "Laminar Air Flow Workstations", "Horizontal and vertical airflow units for localised clean zones.", "/laminar-air-flow-manufacturer"],
  ["04", "Positive & Negative Pressure Modules", "Pressure modules for isolation and containment applications.", "/pressure-module-manufacturer"],
  ["05", "Pass Boxes (Static & Dynamic)", "Material transfer between clean and non-clean zones.", "/products/pass-box"],
  ["06", "Air Showers", "Personnel decontamination at cleanroom entry points.", "/products/air-shower"],
  ["07", "HEPA Filter Housings", "Terminal and ceiling-mounted filtration units.", "/products/hepa-filter"],
  ["08", "Clean Room Doors", "Hermetically sealed, interlocked and fire-rated options.", "/products/cleanroom-doors"],
  ["09", "Garment Cabinets & Cross-Over Benches", "Gowning-area accessories for personnel hygiene.", ""],
] as const;

const specifications = [
  ["Wall & Ceiling Panel Material", "PCGI / PPGI"],
  ["Panel Thickness", "60mm, 80mm, 100mm"],
  ["Door Finishing", "Powder Coated"],
  ["Noise Level", "Less than 60 dB"],
  ["Colour", "RAL 9002 (custom shades available)"],
  ["Airflow Velocity", "Up to 90 m/s (application-dependent)"],
  ["Filtration", "HEPA, 99.97% efficiency at 0.3 microns"],
  ["Door Sizes", "900 x 2100 mm, 1500 x 2100 mm (custom sizes available)"],
  ["Flooring Options", "Epoxy or Vinyl (coved)"],
  ["Voltage / Frequency", "440V / 50Hz"],
  ["Country of Origin", "Made in India"],
];

const whyAirtec = [
  "Since 2011 — Over a decade of manufacturing experience.",
  "In-House Fabrication — Full control over quality and lead times.",
  "Pune Location Advantage — Faster site surveys, quicker delivery and easy after-sales support across Maharashtra.",
  "Custom Solutions — Panel thickness, door size and finish built around your process.",
  "End-to-End Service — Design, fabrication, installation and maintenance under one roof.",
];

const faqs = [
  ["Who is the modular clean room manufacturer in Maharashtra?", "Airtec Solutions, located in Pune, Maharashtra, makes clean rooms, operation theatres and cleanroom accessories. Airtec Solutions does not resell. Airtec Solutions builds clean rooms in its own factory and has more than ten years of industry experience."],
  ["What is the difference between a clean room and a conventional cleanroom?", "A modular clean room is made from prefabricated panels that are put together on site. Modular clean room installation is faster. A modular clean room can be moved easily and reduces contamination during construction more than a civil-built clean room."],
  ["Which industries need a clean room?", "Pharmaceuticals, hospitals, biotechnology, electronics, food processing and diagnostic laboratories use clean rooms to keep environments free of contamination while they manufacture or perform clinical work."],
  ["What cleanroom classification standard is used in India?", "Indian facilities usually design cleanrooms to ISO 14644-1 standards. Modular clean room classes range from ISO Class 5 to ISO Class 8. Modular clean rooms also follow WHO-GMP or Schedule M guidelines for pharmaceutical areas and NABH norms for hospital operation theatres."],
  ["Can modular clean room panels be customised?", "Yes. Modular cleanroom panel thickness can be 60 mm, 80 mm or 100 mm. Modular clean room door size, pressure class, flooring type and finish can all be customised. Customisation depends on the client's process needs and the space that's available."],
];

const relatedProducts = [
  ["01", "Cleanroom Panels", "Sealed, hygienic wall and ceiling systems for controlled environments.", "/products/cleanroom-panels"],
  ["02", "Laminar Air Flow", "Localized unidirectional, HEPA-filtered airflow for critical work zones.", "/laminar-air-flow-manufacturer"],
  ["03", "Pressure Module", "Positive and negative pressure modules for controlled areas.", "/pressure-module-manufacturer"],
  ["04", "Modular Operation Theatre", "Modular healthcare environments planned around clinical workflow.", "/solutions/modular-operation-theater-manufacturer"],
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Modular Clean Room Manufacturer in Maharashtra",
  description: metadata.description,
  provider: { "@type": "Organization", name: "Airtec Solutions" },
  areaServed: "Maharashtra, India",
  serviceType: "Modular cleanroom manufacturing, fabrication and installation",
};

export default function ModularCleanRoomPage() {
  return (
    <><Header /><main className="solution-detail" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <section className="solution-detail-hero"><Image src="/solutions/modular-cleanroom/maintenance.png" alt="Technician maintaining services inside a modular cleanroom" fill priority sizes="100vw" /><div className="solution-detail-shade" /><div className="container solution-detail-hero-content"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Modular Clean Room Manufacturer</span></nav><p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / CONTROLLED ENVIRONMENTS</p><h1>Modular Clean Room manufacturer</h1><p>Airtec Solutions is a trusted Modular Clean Room manufacturer in Maharashtra, delivering contamination-controlled environments for pharmaceutical, hospital, electronics and research applications.</p></div></section>

      <section className="cleanroom-intro section-pad"><div className="container cleanroom-intro-grid"><div><p className="eyebrow">AIRTEC SOLUTIONS / MAHARASHTRA</p><h2>Modular clean rooms built for <em>consistent air quality.</em></h2></div><div><p>Airtec Solutions is a trusted Modular Clean Room manufacturer in Maharashtra, delivering contamination-controlled environments for pharmaceutical, hospital, electronics and research applications.</p><p>Based in Pune since 2011, we design, fabricate and install modular clean room systems built for durability, easy sanitation and consistent air quality, from single-panel enclosures to full-scale ISO-classified cleanroom facilities.</p><p>If you are searching for a dependable Modular Clean Room manufacturer that understands both engineering precision and regulatory compliance, this page explains what a modular clean room is, how it works, the products we manufacture and why Maharashtra-based industries choose us over resellers and traders.</p><Link className="button button-primary" href="/contact">Get a quote <b>↗</b></Link></div></div></section>

      <section className="modular-cleanroom-gallery section-pad"><div className="container"><div className="modular-cleanroom-gallery-heading"><div><p className="eyebrow">INSIDE THE CONTROLLED ENVIRONMENT</p><h2>Cleanroom systems designed for <em>real production.</em></h2></div><p>From single-panel enclosures to full-scale facilities, every space is coordinated around sanitation, airflow, movement and process control.</p></div><div className="modular-cleanroom-gallery-grid"><figure className="modular-cleanroom-gallery-feature"><Image src="/solutions/modular-cleanroom/production-floor.png" alt="Large modular cleanroom production floor" fill priority sizes="(max-width: 800px) 100vw, 66vw" /><figcaption><span>01</span> Production-ready cleanroom infrastructure.</figcaption></figure><figure><Image src="/solutions/modular-cleanroom/cleanroom-floor.png" alt="Bright modular cleanroom with production equipment" fill sizes="(max-width: 800px) 100vw, 33vw" /><figcaption><span>02</span> Cleanable production space.</figcaption></figure><figure><Image src="/solutions/modular-cleanroom/corridor.png" alt="Modular cleanroom corridor" fill sizes="(max-width: 800px) 100vw, 33vw" /><figcaption><span>03</span> Controlled circulation and access.</figcaption></figure></div></div></section>

      <section className="cleanroom-definition section-pad"><div className="container cleanroom-definition-grid"><div><p className="eyebrow">THE BASICS</p><h2>What Is a <em>Modular Clean Room?</em></h2></div><div><p>A modular clean room is a type of room that is built using prefabricated panels. It is designed to control particles in the air, germs, temperature and humidity. This helps maintain a stable environment. Unlike clean rooms that are built on-site using bricks and concrete, modular clean rooms are made in sections at a factory and then taken to the site for quick assembly.</p><p>Because the construction happens off-site, there is less dust and disruption during installation. This makes the setup faster and cleaner. It also means you can expand the room later or move it to a different location without having to rebuild everything from scratch.</p><p>Modular clean rooms are used in places where the quality of a product or process depends on keeping the air clean and controlled.</p><ul className="cleanroom-definition-list">{["Pharmaceutical manufacturing and packaging", "Hospital operation theaters and sterile storage areas", "Biotechnology and scientific research labs", "Electronics and semiconductor production", "Food and nutraceutical processing plants", "Diagnostic labs and IVF facilities"].map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>

      <section className="cleanroom-industries section-pad"><div className="container"><p className="eyebrow eyebrow-light">APPLICATIONS &amp; INDUSTRIES WE SERVE</p><div className="cleanroom-applications-heading"><h2>Where modular cleanrooms <em>support critical work.</em></h2><p>Contamination-controlled environments for Maharashtra&apos;s most demanding industries.</p></div><div className="cleanroom-industry-list">{applications.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div></div></section>

      <section className="cleanroom-types section-pad"><div className="container"><p className="eyebrow eyebrow-light">SYSTEM TYPES WE MANUFACTURE</p><div className="cleanroom-applications-heading"><h2>One partner for <em>the complete cleanroom system.</em></h2><p>From panels and doors to airflow and entry systems, Airtec Solutions coordinates the products required for your controlled environment.</p></div><div className="cleanroom-type-grid">{systemTypes.map(([number, title, copy, href]) => <article key={title}><span>{number}</span><h3>{href ? <Link href={href}>{title}</Link> : title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="modular-cleanroom-specifications section-pad"><div className="container"><div className="pressure-module-heading"><p className="eyebrow">TECHNICAL SPECIFICATIONS</p><h2>Built to meet <em>your requirements.</em></h2></div><div className="pressure-module-table-wrap"><table><caption className="sr-only">Modular clean room technical specifications</caption><thead><tr><th>Parameter</th><th>Specification</th></tr></thead><tbody>{specifications.map(([parameter, value]) => <tr key={parameter}><th scope="row">{parameter}</th><td>{value}</td></tr>)}</tbody></table></div></div></section>

      <section className="cleanroom-why section-pad"><div className="container cleanroom-why-grid"><div><p className="eyebrow eyebrow-light">WHY CHOOSE AIRTEC SOLUTIONS</p><h2>Your modular cleanroom partner in <em>Maharashtra.</em></h2><p>Airtec Solutions is a Pune-based clean room manufacturer, not a reseller. We design and fabricate every panel, door and module in-house.</p></div><ul>{whyAirtec.map((point, index) => <li key={point}><b>{String(index + 1).padStart(2, "0")}</b>{point}</li>)}</ul></div></section>

      <section className="cleanroom-faq section-pad"><div className="container"><div className="cleanroom-section-heading"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Clear answers before your <em>project begins.</em></h2></div><div className="cleanroom-faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="related-solutions section-pad"><div className="container"><p className="eyebrow">CONTINUE EXPLORING</p><div className="related-heading"><h2>Related cleanroom solutions</h2><Link href="/solutions">View all solutions ↗</Link></div><div className="related-grid">{relatedProducts.map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div></div></section>
    </main><Footer /></>
  );
}
