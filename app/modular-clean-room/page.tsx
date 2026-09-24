import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Modular Clean Room Manufacturer in Maharashtra | Airtec Solutions",
  description:
    "Airtec Solutions is a modular clean room manufacturer in Maharashtra offering engineered panels, controlled airflow, filtration, doors and turnkey cleanroom systems for pharma, healthcare, research and industry.",
  alternates: { canonical: "/modular-clean-room" },
  openGraph: {
    title: "Modular Clean Room Manufacturer in Maharashtra | Airtec Solutions",
    description:
      "Engineered modular cleanroom systems for pharmaceutical, healthcare, electronics, research and other controlled-environment applications.",
    type: "website",
  },
};

const applications = [
  "Pharmaceutical manufacturing and packaging",
  "API manufacturing",
  "Hospitals and operation theatres",
  "Sterile storage areas",
  "Biotechnology laboratories",
  "Research laboratories",
  "Electronics manufacturing",
  "Semiconductor applications",
  "Food processing",
  "Nutraceutical manufacturing",
  "Diagnostic laboratories",
  "IVF facilities",
  "Cosmetics manufacturing",
  "Personal care manufacturing",
];

const systemTypes = [
  ["01", "Modular Clean Room Panels", "PCGI/PPGI wall and ceiling panels configured around the required room envelope and project application.", "/products/cleanroom-panels"],
  ["02", "Modular Operation Theatres", "Controlled healthcare environments for hospitals and surgical centres.", "/solutions/modular-operation-theater-manufacturer"],
  ["03", "Laminar Air Flow Workstations", "Horizontal and vertical airflow systems for localized controlled-air work areas.", "/laminar-air-flow-manufacturer"],
  ["04", "Positive & Negative Pressure Modules", "Pressure-controlled systems for isolation and containment applications.", "/pressure-module-manufacturer"],
  ["05", "Pass Boxes", "Static and dynamic pass boxes for material transfer between controlled areas.", "/products/pass-box"],
  ["06", "Air Showers", "Personnel-entry systems designed to help remove loose particulate contamination before entry.", "/products/air-shower"],
  ["07", "HEPA Filter Housings", "Terminal or ceiling-mounted filtration solutions, depending on the system configuration.", "/products/hepa-filter"],
  ["08", "Clean Room Doors", "Hygienic door options with interlocking or other configurations where specified.", "/products/cleanroom-doors"],
  ["09", "Garment Cabinets & Cross-Over Benches", "Gowning-area accessories that support the cleanroom entry sequence."],
] as const;

const controls = [
  ["01", "Requirement analysis", "Understand the process, room use, cleanliness target, environmental conditions and available space."],
  ["02", "Site and layout planning", "Coordinate room dimensions, movement, access, services, equipment and future modification needs."],
  ["03", "Cleanroom design", "Develop the panel, airflow, filtration, pressure, door, flooring and service-integration strategy."],
  ["04", "Panel fabrication", "Fabricate modular wall and ceiling elements selected around the project requirements."],
  ["05", "Door and module fabrication", "Coordinate cleanroom doors, transfer equipment and pressure-control elements where applicable."],
  ["06", "Filtration and HVAC integration", "Bring airflow, HEPA filtration, temperature, humidity and pressure considerations together as required."],
  ["07", "Installation", "Assemble the modular system at the project site with attention to interfaces and finish quality."],
  ["08", "Testing and inspection", "Carry out project-appropriate checks before handover and support documentation requirements."],
  ["09", "Handover and support", "Provide installation guidance, maintenance support and after-sales assistance for the completed system."],
];

const benefits = [
  "Modular construction can reduce on-site construction activity, installation time and associated disruption compared with conventional civil construction.",
  "Prefabricated panels and coordinated components can support consistent, smooth and easy-to-clean internal surfaces.",
  "Depending on the panel and installation system, modular cleanrooms can offer greater flexibility for future modification, expansion or partial relocation than conventional civil construction.",
  "The room envelope, airflow, filtration and pressure strategy can be developed around the required application and measured cleanliness conditions.",
  "A single project partner can help coordinate panels, doors, HVAC, HEPA filtration and associated cleanroom equipment.",
];

const specifications = [
  ["Wall & Ceiling Panel Material", "PCGI / PPGI"],
  ["Panel Thickness", "60 mm / 80 mm / 100 mm, where specified for the project"],
  ["Door Finish", "Powder-coated / as specified"],
  ["Noise Level", "Less than 60 dB, model/system dependent"],
  ["Colour", "RAL 9002 / custom shades"],
  ["Airflow", "Application-dependent"],
  ["Filtration", "HEPA filtration, 99.97% efficiency at the applicable test particle size and test conditions, where specified"],
  ["Door Sizes", "900 × 2100 mm / 1500 × 2100 mm / custom"],
  ["Flooring", "Epoxy / vinyl with coved detailing"],
  ["Electrical Supply", "Model/system dependent"],
  ["Country of Origin", "Made in India"],
];

const whyAirtec = [
  "Since 2011, with more than a decade of experience in modular cleanroom and controlled-environment work.",
  "Pune, Maharashtra manufacturing and service base for projects across Maharashtra and India.",
  "In-house fabrication and project coordination, based on the company capabilities stated across the existing website.",
  "Custom solutions for panel thickness, door dimensions, finishes, layout, pressure requirements, flooring and application needs.",
  "End-to-end support across design, fabrication, installation, maintenance and project-specific handover requirements.",
];

const faqs = [
  ["Who is a modular clean room manufacturer in Maharashtra?", "Airtec Solutions is a Pune-based manufacturer and service provider for modular cleanrooms and related controlled-environment systems. The company supports design, fabrication, installation and associated cleanroom infrastructure for pharmaceutical, healthcare, research and industrial applications."],
  ["What is the difference between a modular clean room and a conventional cleanroom?", "Modular refers primarily to the construction approach using prefabricated panels and components assembled at the project site. Both modular and conventional cleanrooms can be designed for controlled environments; the appropriate approach depends on the building, process, project constraints and required performance."],
  ["Which industries need a clean room?", "Pharmaceutical, healthcare, biotechnology, electronics, food and nutraceutical, diagnostic, research, cosmetics and other applications may require controlled contamination levels or environmental conditions. The design should be based on the process and applicable facility requirements."],
  ["What cleanroom classification standard is used in India?", "ISO 14644-1 is commonly used for airborne particulate cleanliness classification. The classification applies to measured airborne particulate cleanliness under specified conditions. Additional regulatory or facility requirements may apply depending on the industry and application."],
  ["Can modular cleanroom panels be customised?", "Yes. Panel thickness, dimensions, finishes, doors, flooring and layout can be configured according to project requirements, subject to engineering constraints and the selected system."],
  ["How long does modular cleanroom installation take?", "Installation time depends on room size, panel configuration, HVAC and filtration, electrical services, flooring, site readiness and overall project complexity. A project-specific schedule can be developed after the requirements and site conditions are reviewed."],
  ["Can a modular cleanroom be expanded later?", "Depending on the original design, panel and installation system, modular construction can provide greater flexibility for future modification or expansion. Available space, service capacity and the existing room configuration must be assessed before changes are planned."],
];

const relatedProducts = [
  ["01", "Cleanroom Panels", "Sealed, hygienic wall and ceiling systems for controlled environments.", "/products/cleanroom-panels"],
  ["02", "Clean Air System", "Air shower systems for controlled personnel entry and clean-air environments.", "/solutions/clean-air-system-manufacturer"],
  ["03", "Laminar Air Flow", "Localized unidirectional, HEPA-filtered airflow for critical work zones.", "/laminar-air-flow-manufacturer"],
  ["04", "Pressure Module", "Positive and negative pressure modules for controlled areas.", "/pressure-module-manufacturer"],
  ["05", "Pass Box", "Controlled material transfer between cleanroom zones.", "/products/pass-box"],
  ["06", "Modular Operation Theatre", "Modular healthcare environments planned around clinical workflow.", "/solutions/modular-operation-theater-manufacturer"],
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Modular Clean Room Manufacturer",
  description: metadata.description,
  provider: { "@type": "Organization", name: "Airtec Solutions" },
  areaServed: "Maharashtra, India",
  serviceType: "Modular cleanroom design, fabrication and installation",
};

export default function ModularCleanRoomPage() {
  return (
    <>
      <Header />
      <main className="solution-detail" id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <section className="solution-detail-hero">
          <Image src="/solutions/1 (5).png" alt="Modular clean room system manufactured by Airtec Solutions" fill priority sizes="100vw" />
          <div className="solution-detail-shade" />
          <div className="container solution-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Modular Clean Room Manufacturer</span></nav>
            <p className="eyebrow eyebrow-light">AIRTEC CAPABILITY / CONTROLLED ENVIRONMENTS</p>
            <h1>Modular Clean Room Manufacturer</h1>
            <p>Airtec Solutions designs, manufactures and installs modular cleanroom systems for pharmaceutical, healthcare, electronics, research and other controlled-environment applications.</p>
          </div>
        </section>

        <section className="cleanroom-intro section-pad"><div className="container cleanroom-intro-grid"><div><p className="eyebrow">MODULAR CLEANROOM ENGINEERING</p><h2>Controlled environments engineered for <em>your process.</em></h2></div><div><p>Airtec Solutions is a Modular Clean Room Manufacturer based in Pune, Maharashtra, supporting pharmaceutical, hospital, electronics, research, biotechnology, food, nutraceutical and diagnostic facilities.</p><p>Our work brings together cleanroom design, panel fabrication, installation and associated infrastructure so each project can be planned around its process, space, cleanliness requirements and operating needs.</p><p>Since 2011, Airtec Solutions has developed modular cleanroom systems and related cleanroom equipment for customers across Maharashtra and India.</p><Link className="button button-primary" href="/contact">Get a quote <b>↗</b></Link></div></div></section>

        <section className="modular-cleanroom-gallery section-pad">
          <div className="container">
            <div className="modular-cleanroom-gallery-heading">
              <div>
                <p className="eyebrow">INSIDE THE CONTROLLED ENVIRONMENT</p>
                <h2>Cleanroom systems designed for <em>real production.</em></h2>
              </div>
              <p>From high-throughput production floors to hygienic access corridors, each space is coordinated around airflow, cleanability, movement and process control.</p>
            </div>
            <div className="modular-cleanroom-gallery-grid">
              <figure className="modular-cleanroom-gallery-feature">
                <Image src="/solutions/modular-cleanroom/production-floor.png" alt="Large modular cleanroom production floor with equipment and operators" fill priority sizes="(max-width: 800px) 100vw, 66vw" />
                <figcaption><span>01</span> Production-ready cleanroom infrastructure with coordinated equipment zones.</figcaption>
              </figure>
              <figure>
                <Image src="/solutions/modular-cleanroom/cleanroom-floor.png" alt="Bright modular cleanroom with blue flooring and production equipment" fill sizes="(max-width: 800px) 100vw, 33vw" />
                <figcaption><span>02</span> Open, cleanable production space with clear movement paths.</figcaption>
              </figure>
              <figure>
                <Image src="/solutions/modular-cleanroom/maintenance.png" alt="Technician maintaining ceiling services inside a modular cleanroom" fill sizes="(max-width: 800px) 100vw, 33vw" />
                <figcaption><span>03</span> Service access planned into the cleanroom envelope.</figcaption>
              </figure>
              <figure>
                <Image src="/solutions/modular-cleanroom/corridor.png" alt="Blue and white cleanroom corridor with viewing windows and doors" fill sizes="(max-width: 800px) 100vw, 33vw" />
                <figcaption><span>04</span> Controlled circulation through hygienic corridors and access points.</figcaption>
              </figure>
              <figure>
                <Image src="/solutions/modular-cleanroom/equipment.png" alt="Industrial equipment installed inside a modular cleanroom" fill sizes="(max-width: 800px) 100vw, 33vw" />
                <figcaption><span>05</span> Equipment integration aligned to the room and process.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="cleanroom-definition section-pad"><div className="container cleanroom-definition-grid"><div><p className="eyebrow">THE BASICS</p><h2>What Is a <em>Modular Clean Room?</em></h2></div><div><p>A modular cleanroom uses prefabricated wall and ceiling panels that are manufactured or fabricated and then assembled at the project site to create a controlled environment.</p><p>Depending on the system design, a cleanroom can support control of airborne particulate contamination, temperature, humidity, pressure and airflow. The final performance depends on the complete room design, including HVAC, filtration, construction, monitoring, operation and validation.</p><p>Compared with conventional civil construction, modular construction can simplify installation and future modification. Because major panel fabrication can be completed off-site, it can reduce on-site construction activity, installation time and associated disruption; it does not mean that installation creates no dust.</p><p>Depending on the panel and installation system, modular cleanrooms can offer greater flexibility for future modification, expansion or partial relocation than conventional civil construction.</p></div></div></section>

        <section className="cleanroom-industries section-pad"><div className="container"><p className="eyebrow eyebrow-light">APPLICATIONS &amp; INDUSTRIES</p><div className="cleanroom-applications-heading"><h2>Where modular cleanrooms <em>support critical work.</em></h2><p>Modular cleanrooms are used wherever contamination levels or environmental conditions need to be controlled around a process.</p></div><div className="cleanroom-industry-list">{applications.map((application, index) => <span key={application}><b>{String(index + 1).padStart(2, "0")}</b>{application}</span>)}</div></div></section>

        <section className="cleanroom-types section-pad"><div className="container"><p className="eyebrow eyebrow-light">SYSTEM TYPES / APPLICATIONS</p><div className="cleanroom-applications-heading"><h2>Modular cleanroom systems for <em>different requirements.</em></h2><p>Airtec Solutions can coordinate the room envelope, airflow approach and associated equipment as a complete system or as selected cleanroom components.</p></div><div className="cleanroom-type-grid">{systemTypes.map(([number, title, copy, href]) => <article key={title}><span>{number}</span><h3>{href ? <Link href={href}>{title}</Link> : title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="cleanroom-construction section-pad"><div className="container cleanroom-construction-grid"><div className="cleanroom-construction-intro"><p className="eyebrow">PANEL CONSTRUCTION</p><h2>Built as a coordinated <em>cleanroom envelope.</em></h2><p>Wall and ceiling panels, joints, doors, flooring interfaces and service openings are considered together so the finished room can support cleanability, access and ongoing operation.</p></div><div className="cleanroom-construction-list"><article><span>01</span><div><h3>Wall panels</h3><ul><li>PCGI / PPGI panel systems where specified</li><li>Panel thickness selected around the application</li><li>Cleanable surfaces and coordinated joints</li></ul></div></article><article><span>02</span><div><h3>Ceiling systems</h3><ul><li>Modular ceiling panels for the room layout</li><li>Integration with lights and filter housings where required</li><li>Service access planned around the system</li></ul></div></article><article><span>03</span><div><h3>Interfaces and finishes</h3><ul><li>Door and viewing-window integration</li><li>Flooring interface with epoxy or vinyl options</li><li>Service openings coordinated with the project design</li></ul></div></article></div></div></section>

        <section className="cleanroom-controls section-pad"><div className="container"><div className="cleanroom-section-heading"><p className="eyebrow">TURNKEY ENGINEERING</p><h2>A disciplined route from brief to <em>working cleanroom.</em></h2></div><div className="cleanroom-control-grid">{controls.map(([number, title, copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="modular-cleanroom-specifications section-pad"><div className="container"><div className="pressure-module-heading"><p className="eyebrow">TECHNICAL PROFILE</p><h2>Specifications shaped around <em>the project.</em></h2></div><div className="pressure-module-table-wrap"><table><caption className="sr-only">Modular clean room technical specifications</caption><thead><tr><th scope="col">Parameter</th><th scope="col">Specification</th></tr></thead><tbody>{specifications.map(([parameter, specification]) => <tr key={parameter}><th scope="row">{parameter}</th><td>{specification}</td></tr>)}</tbody></table></div><p className="modular-cleanroom-table-note">Cleanroom classification applies to measured airborne particulate cleanliness under specified conditions. Final classification and system performance depend on the complete HVAC, filtration, airflow, pressure-control, construction, operating and validation strategy. Pharmaceutical and healthcare projects may be designed to meet applicable regulatory and facility requirements depending on the application and project specifications.</p></div></section>

        <section className="cleanroom-benefits-copy section-pad"><div className="container cleanroom-benefits-copy-grid"><div><p className="eyebrow">BENEFITS</p><h2>Why choose a modular <em>cleanroom approach?</em></h2><p>A modular system can bring the controlled envelope, air systems and project coordination together around the needs of the facility.</p></div><ul>{benefits.map((benefit, index) => <li key={benefit}><b>{String(index + 1).padStart(2, "0")}</b>{benefit}</li>)}</ul></div></section>

        <section className="cleanroom-why section-pad"><div className="container cleanroom-why-grid"><div><p className="eyebrow eyebrow-light">WHY AIRTEC SOLUTIONS</p><h2>Your modular cleanroom partner in <em>Maharashtra.</em></h2><p>Airtec Solutions brings Pune-based manufacturing and project coordination to controlled-environment work across Maharashtra and India.</p></div><ul>{whyAirtec.map((point, index) => <li key={point}><b>{String(index + 1).padStart(2, "0")}</b>{point}</li>)}</ul></div></section>

        <section className="cleanroom-classification section-pad"><div className="container cleanroom-classification-grid"><div><p className="eyebrow eyebrow-light">MODULAR CLEAN ROOM MANUFACTURER</p><h2>Build the right environment for <em>the work it supports.</em></h2><p>Planning a pharmaceutical cleanroom, hospital cleanroom, research facility or controlled production area? Share your application, space and project requirements with Airtec Solutions for an engineering discussion and customized quotation.</p></div><div className="cleanroom-standard-list"><span>PROJECT CONSULTATION</span><p><b>01</b>Process, space and cleanliness requirements</p><p><b>02</b>Panel, airflow, filtration and access planning</p><p><b>03</b>Design, fabrication, installation and support</p><Link className="button button-light" href="/contact">Get a quote <b>↗</b></Link></div></div></section>

        <section className="cleanroom-faq section-pad"><div className="container"><div className="cleanroom-section-heading"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Clear answers before your <em>project begins.</em></h2></div><div className="cleanroom-faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="related-solutions section-pad"><div className="container"><p className="eyebrow">CONTINUE EXPLORING</p><div className="related-heading"><h2>Related cleanroom solutions</h2><Link href="/solutions">View all solutions ↗</Link></div><div className="related-grid">{relatedProducts.map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
