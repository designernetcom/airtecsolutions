import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clean Room Manufacturer in Maharashtra | Airtec Solutions",
  description:
    "Airtec Solutions is a clean room manufacturer in Maharashtra offering customized clean rooms, modular panels, HEPA filtration, laminar airflow systems, pass boxes, air showers, installation, and validation support.",
  alternates: { canonical: "/clean-room-manufacturer" },
  openGraph: {
    title: "Clean Room Manufacturer in Maharashtra | Airtec Solutions",
    description:
      "Customized clean rooms, modular panels, HEPA filtration, laminar airflow systems, pass boxes, air showers, installation, and validation support.",
    type: "website",
  },
};

const controls = [
  ["01", "Filtration", "HEPA and ULPA filters can be integrated into the air-handling system to remove airborne particles and contaminants before air enters the controlled environment."],
  ["02", "Airflow Design", "Laminar (unidirectional) or turbulent airflow patterns are selected so contaminated air is continuously removed and replaced with filtered air."],
  ["03", "Pressure Differential", "Positive or negative pressure between adjacent rooms helps prevent unfiltered air, dust or contaminants from entering or escaping controlled areas."],
];

const cleanRoomSystems = [
  ["01", "Modular Clean Room Panels & Wall Systems", "PUF/PIR-core sandwich panels for walls and partitions.", "/products/cleanroom-panels"],
  ["02", "Modular Ceiling & Roof Panel Systems", "Walk-on and non-walk-on options with integrated lighting and filter housings."],
  ["03", "Clean Room Doors", "Hinged, sliding and interlocked doors with vision panels.", "/products/cleanroom-doors"],
  ["04", "Laminar Airflow Workstations", "Horizontal and vertical units for localized clean zones.", "/products/laminar-airflow"],
  ["05", "Modular Operation Theatres", "Complete OT solutions with laminar flow canopies.", "/solutions/modular-operation-theater-manufacturer"],
  ["06", "Pass Boxes", "Static and dynamic pass boxes for material transfer without contamination.", "/products/pass-box"],
  ["07", "Air Showers", "Personnel decontamination before clean room entry.", "/products/air-shower"],
  ["08", "HEPA Filters & Filtration Modules", "Terminal and non-terminal filter arrangements.", "/products/hepa-filter"],
  ["09", "Positive & Negative Pressure Modules", "For isolation and containment applications.", "/solutions/pressure-module-in-pune"],
  ["10", "Garment Cabinets & Aluminium Covings", "Supporting clean room accessories and hygienic finishes.", "/solutions/aluminium-coving"],
] as const;

const safetyBenefits = [
  "Reduces contamination-related product rejection and rework",
  "Helps protect patients and staff in hospitals and operation theatres from airborne contamination",
  "Helps manufacturers maintain consistent batch quality in pharma and biotech production",
  "Supports compliance during regulatory audits and third-party inspections",
  "Improves employee safety in environments handling sensitive chemicals or biological materials",
  "Helps extend the operational life of precision equipment by minimizing dust exposure",
];

const faqs = [
  ["Who is a reliable clean room manufacturer in Maharashtra?", "Airtec Solutions is a clean room manufacturer based in Pune, Maharashtra, providing clean room systems and contamination-control solutions for healthcare institutions, pharmaceutical companies, electronics manufacturers, research organizations, and other industries. Solutions can be customized according to application requirements and applicable cleanroom standards."],
  ["What is the difference between a modular clean room and a conventional clean room?", "A modular clean room is constructed using prefabricated panels and components that can be assembled, modified, relocated, or expanded more easily. Conventional clean rooms are typically constructed as part of the building structure. Modular systems can offer faster installation and greater flexibility depending on the project requirements."],
  ["What sectors need clean room systems?", "Clean room systems are used across industries where contamination control and environmental conditions are critical. These include pharmaceutical manufacturing, biotechnology laboratories, hospitals and operation theatres, electronics and semiconductor manufacturing, food processing, and medical device manufacturing."],
  ["What standards do Airtec Solutions clean rooms follow?", "Airtec Solutions designs clean room systems with recognized cleanroom classification and pharmaceutical manufacturing requirements in mind, including ISO 14644 principles and applicable cGMP guidelines. Specific project requirements can vary depending on the application, cleanliness classification, and regulatory requirements."],
  ["Can Airtec Solutions create a clean room for a small laboratory?", "Yes. Airtec Solutions can design clean room solutions for different project sizes, from small laboratory environments to large industrial facilities. The design can be planned around available space, application requirements, required cleanliness level, and project budget."],
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clean Room Manufacturer in Maharashtra",
  description: metadata.description,
  provider: { "@type": "Organization", name: "Airtec Solutions" },
  areaServed: "Maharashtra, India",
  serviceType: "Clean room design, manufacturing, installation and validation support",
};

export default function CleanRoomManufacturerPage() {
  return (
    <>
      <Header />
      <main className="solution-detail" id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <section className="solution-detail-hero">
          <Image src="/solutions/1 (5).png" alt="Modular clean room system by Airtec Solutions" fill priority sizes="100vw" />
          <div className="solution-detail-shade" />
          <div className="container solution-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Clean Room Manufacturer</span></nav>
            <p className="eyebrow eyebrow-light">AIRTEC CAPABILITY / CLEANROOMS</p>
            <h1>Clean Room Manufacturer in Maharashtra</h1>
            <p>Engineered, manufactured and installed clean room systems for pharmaceutical, healthcare, research, electronics and other contamination-sensitive environments.</p>
          </div>
        </section>

        <section className="cleanroom-intro section-pad">
          <div className="container cleanroom-intro-grid">
            <div><p className="eyebrow">CLEANROOM ENGINEERING</p><h2>Clean environments built around <em>your process.</em></h2></div>
            <div>
              <p>If you need a reputable Clean Room Manufacturer in Maharashtra, Airtec Solutions is your reliable source for contamination-free and precision-oriented clean room solutions.</p>
              <p>Being a reputed clean room supplier in Pune, we customize, manufacture, install, and validate clean rooms for industries where air quality, temperature, humidity, and particle management are critical factors affecting the safety and accuracy of manufacturing processes.</p>
              <p>Since 2011, Airtec Solutions has been producing and supplying clean room systems, laminar flow systems, pass boxes, air showers, and other contamination-control devices from our manufacturing facility in Bhosari, Pune.</p>
              <Link className="button button-primary" href="/contact">Request a clean room consultation <b>↗</b></Link>
            </div>
          </div>
        </section>

        <section className="cleanroom-definition section-pad">
          <div className="container cleanroom-definition-grid">
            <div><p className="eyebrow">THE BASICS</p><h2>What Is a <em>Clean Room?</em></h2></div>
            <div>
              <p>A clean room is a controlled environment designed to maintain airborne particles, microorganisms, dust, and other contaminants at specified measurable levels.</p>
              <p>Unlike a conventional room, a clean room actively filters and recirculates air, maintains pressure differences between rooms, and controls temperature and humidity within strict limits so that sensitive processes are protected from contamination.</p>
              <p>Industries that depend on clean rooms include:</p>
              <ul className="cleanroom-benefits-copy-grid"><li><b>01</b>Pharmaceutical manufacturing — producing sterile drugs and vaccines</li><li><b>02</b>Biotechnology and research laboratories — microbiology, tissue culture, and R&amp;D</li><li><b>03</b>Hospitals and operation theatres — infection control during surgery</li><li><b>04</b>Electronics and semiconductor units — dust-free PCB and chip assembly</li><li><b>05</b>Food processing — hygienic packaging and handling</li><li><b>06</b>Medical device manufacturing — controlled environments for production</li></ul>
            </div>
          </div>
        </section>

        <section className="cleanroom-controls section-pad">
          <div className="container"><p className="eyebrow">HOW THE SYSTEM WORKS</p><h2>Three engineering principles behind <em>cleanroom control.</em></h2><div className="cleanroom-control-grid">{controls.map(([number, title, copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
        </section>

        <section className="cleanroom-types section-pad">
          <div className="container"><p className="eyebrow eyebrow-light">MANUFACTURED IN MAHARASHTRA</p><div className="cleanroom-applications-heading"><h2>Clean room systems for <em>critical applications.</em></h2><p>From clean room panels to air-handling and transfer equipment, each component is coordinated around the required environment.</p></div><div className="cleanroom-type-grid">{cleanRoomSystems.map(([number, title, copy, href]) => <article key={title}><span>{number}</span><h3>{href ? <Link href={href}>{title}</Link> : title}</h3><p>{copy}</p></article>)}</div></div>
        </section>

        <section className="cleanroom-benefits-copy section-pad">
          <div className="container cleanroom-benefits-copy-grid"><div><p className="eyebrow">SAFETY BENEFITS</p><h2>Why a well-designed clean room <em>matters.</em></h2><p>A considered contamination-control strategy supports product quality, staff safety and reliable day-to-day operation across regulated environments.</p></div><ul>{safetyBenefits.map((benefit, index) => <li key={benefit}><b>{String(index + 1).padStart(2, "0")}</b>{benefit}</li>)}</ul></div>
        </section>

        <section className="cleanroom-manufacturing section-pad"><div className="container cleanroom-manufacturing-grid"><div><p className="eyebrow eyebrow-light">OUR FACILITY</p><h2>Manufacturing capacity with <em>project-level control.</em></h2><p>As a hands-on clean room manufacturer, Airtec Solutions operates from a manufacturing facility in Bhosari, Pune. Our team supports the project lifecycle from design consultation and panel fabrication through installation, validation support, and after-sales maintenance.</p></div><ul><li><b>01</b>Clean room panels, doors, ceiling systems and airflow units for small laboratory clean rooms and large industrial projects</li><li><b>02</b>Design and manufacturing planned around the room size, process, cleanliness classification and operating conditions</li><li><b>03</b>Systems designed with ISO 14644 cleanroom classification principles in mind</li><li><b>04</b>Pharmaceutical environments planned with applicable cGMP guidelines in mind</li></ul></div></section>

        <section className="cleanroom-why section-pad"><div className="container cleanroom-why-grid"><div><p className="eyebrow eyebrow-light">WHY AIRTEC SOLUTIONS</p><h2>Your direct partner for <em>controlled environments.</em></h2><p>From Pune&apos;s industrial belt, we bring manufacturing accountability and end-to-end support to clean room projects across Maharashtra and India.</p></div><ul><li><b>01</b>15+ years of manufacturing experience in cleanroom and contamination-control equipment</li><li><b>02</b>In-house manufacturing facility in Bhosari, Pune, providing greater control over quality and project timelines</li><li><b>03</b>Complete customization of panel thickness, airflow class, room size and layout</li><li><b>04</b>End-to-end service: design, fabrication, installation, validation assistance and after-sales support</li><li><b>05</b>Manufacturer-direct pricing and accountability throughout the project</li></ul></div></section>

        <section className="cleanroom-classification section-pad"><div className="container cleanroom-classification-grid"><div><p className="eyebrow eyebrow-light">TURNKEY CLEANROOM DELIVERY</p><h2>From a single laminar airflow unit to a <em>complete turnkey clean room.</em></h2><p>Airtec Solutions provides engineered clean room solutions for applications requiring controlled environments and contamination management. Contact us for a site consultation and a customized clean room quotation for your facility.</p></div><div className="cleanroom-standard-list"><span>START YOUR PROJECT</span><p><b>01</b>Site consultation and requirement review</p><p><b>02</b>Application-led clean room design and quotation</p><p><b>03</b>Manufacturing, installation and validation support</p><Link className="button button-light" href="/contact">Get a customized quotation <b>↗</b></Link></div></div></section>

        <section className="cleanroom-faq section-pad"><div className="container"><p className="eyebrow">FAQ</p><h2>Frequently Asked Questions</h2><div className="cleanroom-faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
