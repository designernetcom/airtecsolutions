import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pressure Module Manufacturer in Maharashtra | Airtec Solutions",
  description:
    "Airtec Solutions is a pressure module manufacturer in Maharashtra offering positive and negative pressure modules for hospitals, pharmaceutical cleanrooms, laboratories, isolation areas, and industrial applications.",
  alternates: { canonical: "/pressure-module-manufacturer" },
  openGraph: {
    title: "Pressure Module Manufacturer in Maharashtra | Airtec Solutions",
    description:
      "Positive and negative pressure modules for hospitals, pharmaceutical cleanrooms, laboratories, isolation areas, and industrial applications.",
    type: "website",
  },
};

const workingStages = [
  ["01", "Air Intake", "Room air is drawn through a pre-filter, which captures larger dust particles before the air reaches the primary filtration stage."],
  ["02", "Blower Stage", "A blower assembly moves air through the pressure module at a controlled airflow rate."],
  ["03", "HEPA Filtration", "Air passes through a HEPA filter where fine airborne particles are captured. Filtered air is then supplied to the controlled area in positive-pressure applications."],
  ["04", "Pressure Regulation", "Positive modules supply filtered air into the room, while negative modules extract air to help reduce contaminated-air movement into adjacent spaces."],
  ["05", "Temperature Control", "Suitable cooling or air-conditioning arrangements can be integrated where the application requires additional environmental control."],
];

const comparisonRows = [
  ["Airflow Direction", "Pushes filtered air into the room", "Extracts air from the room"],
  ["Pressure Relative to Surroundings", "Higher than adjacent areas", "Lower than adjacent areas"],
  ["Primary Purpose", "Helps prevent external contaminants from entering", "Helps contain contaminants within the controlled area"],
  ["Typical Applications", "Operation theatres, ICUs, pharmaceutical cleanrooms, sterile areas", "Isolation rooms, quarantine areas, infectious-disease areas, containment environments"],
  ["Contamination Risk Managed", "Entry of airborne particles and contaminants", "Escape of airborne particles and contaminants"],
  ["Filtration", "Pre-filter + HEPA filter, according to configuration", "Pre-filter + HEPA filter, according to configuration"],
  ["Common Industries", "Hospitals, pharmaceutical manufacturing, electronics and precision cleanrooms", "Hospitals, research facilities, biosafety and containment applications"],
  ["Pressure Role", "Maintains higher room pressure", "Maintains lower room pressure"],
  ["Automation", "Automatic or manual, as required", "Automatic or manual, as required"],
  ["Manufacturer", "Airtec Solutions, Pune, Maharashtra", "Airtec Solutions, Pune, Maharashtra"],
];

const specifications = [
  ["Brand", "Airtec Solutions"],
  ["Material", "GI powder-coated construction"],
  ["Standard Colour", "RAL 9002"],
  ["Filtration", "Pre-filter + HEPA filter, as required"],
  ["Automation Grade", "Automatic or manual, as required"],
  ["Voltage", "230V, 50Hz, single phase"],
  ["Airflow Capacity", "Customizable according to room size and air-change requirements"],
  ["Country of Origin", "Made in India"],
  ["Corrosion Resistance", "Powder-coated construction provides resistance to normal environmental exposure"],
];

const features = [
  ["Contamination Control", "HEPA-filtered airflow helps reduce airborne particulate contamination in controlled environments."],
  ["Infection Control Support", "Directional airflow and pressure differentials can help reduce unwanted airflow between adjacent zones."],
  ["Compact Footprint", "The compact form factor can be installed into suitable wall or window openings, reducing the need for extensive ducting in applicable installations."],
  ["Durable Construction", "GI powder-coated construction provides a durable enclosure suitable for controlled-environment applications."],
  ["Consistent Airflow", "Properly selected blower and filtration configurations help maintain the required airflow and pressure conditions."],
  ["Customizable Capacity", "Airflow capacity, filtration configuration, dimensions, and automation can be customized according to the application and room requirements."],
];

const applications = [
  "Hospital operation theatres and ICUs",
  "Isolation and quarantine areas",
  "Pharmaceutical manufacturing cleanrooms",
  "Diagnostic and research laboratories",
  "Electronics and precision manufacturing cleanrooms",
  "Controlled containment areas",
  "Other applications requiring controlled pressure differentials",
];

const faqs = [
  ["What is the difference between a positive pressure module and a negative pressure module?", "A positive pressure module supplies filtered air into a room to maintain a higher pressure relative to surrounding areas. This helps reduce the entry of unfiltered air and is commonly used in environments such as operation theatres and controlled clean areas. A negative pressure module extracts air from a room to maintain lower pressure relative to surrounding areas. This helps reduce the movement of potentially contaminated air into adjacent spaces and is commonly used for isolation and containment applications."],
  ["Which industries use pressure modules?", "Pressure modules are used in applications where controlled airflow, filtration, and pressure differentials are important. These include hospitals, pharmaceutical manufacturing facilities, diagnostic and research laboratories, isolation areas, containment environments, and electronics or precision manufacturing cleanrooms."],
  ["Can a pressure module be customized for different room sizes?", "Yes. Pressure modules can be customized according to the application and room requirements. Parameters such as airflow capacity, filter configuration, physical dimensions, and automation can be selected based on factors including room size, air-change requirements, pressure requirements, and intended use."],
  ["What filtration efficiency do Airtec Solutions pressure modules offer?", "Airtec Solutions pressure modules can be configured with HEPA filtration according to the application requirements. Where a HEPA filter rated at 99.97% efficiency is specified, that rating refers to the filter's performance under the applicable test conditions. The appropriate filter configuration should be selected based on the project's cleanliness, airflow, and filtration requirements."],
  ["Do you supply pressure modules across Maharashtra?", "Yes. Airtec Solutions is based in Pune, Maharashtra, and supplies pressure modules for projects across Maharashtra. Depending on the project, installation, commissioning, and maintenance support can also be provided in Pune, Mumbai, Nashik, and Chhatrapati Sambhajinagar."],
];

const relatedProducts = [
  ["01", "Modular Operation Theatre", "Controlled healthcare environments planned around clinical workflow and infection control.", "/solutions/modular-operation-theater-manufacturer"],
  ["02", "HEPA Filter", "High-efficiency particulate filtration for critical zones and clean-air systems.", "/products/hepa-filter"],
  ["03", "Laminar Airflow", "Unidirectional, HEPA-filtered airflow for contamination-sensitive work zones.", "/products/laminar-airflow"],
  ["04", "Pass Box", "Controlled material-transfer chambers for cleanroom zoning and workflow.", "/products/pass-box"],
  ["05", "Air Shower", "Personnel-entry systems that help remove loose particulates before cleanroom access.", "/products/air-shower"],
  ["06", "Cleanroom Panels", "Sealed, hygienic wall and ceiling systems for controlled environments.", "/products/cleanroom-panels"],
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pressure Module Manufacturer",
  description: metadata.description,
  provider: { "@type": "Organization", name: "Airtec Solutions" },
  areaServed: "Maharashtra, India",
  serviceType: "Positive and negative pressure module manufacturing",
};

export default function PressureModuleManufacturerPage() {
  return (
    <>
      <Header />
      <main className="solution-detail" id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <section className="solution-detail-hero">
          <Image src="/solutions/pressure-module/hero.png" alt="Ceiling-mounted pressure module in a controlled operation theatre environment" fill priority sizes="100vw" />
          <div className="solution-detail-shade" />
          <div className="container solution-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Pressure Module Manufacturer</span></nav>
            <p className="eyebrow eyebrow-light">AIRTEC CAPABILITY / AIR PRESSURE CONTROL</p>
            <h1>Pressure Module Manufacturer</h1>
            <p>Positive Pressure Module Manufacturer and Negative Pressure Module Manufacturer for controlled environments across Maharashtra and India.</p>
          </div>
        </section>

        <section className="pressure-module-intro section-pad">
          <div className="container pressure-module-intro-grid">
            <div><p className="eyebrow">PRESSURE MODULES / PUNE</p><h2>Control the airflow. <em>Protect the environment.</em></h2><p>When searching for a reliable Pressure Module Manufacturer in Maharashtra, controlling contamination and maintaining the correct air pressure balance are important considerations.</p></div>
            <div className="pressure-module-flow" aria-hidden="true"><span>AMBIENT AIR</span><i /><i /><i /><b>FILTERED AIR<br />TO ROOM</b></div>
          </div>
        </section>

        <section className="pressure-module-gallery section-pad">
          <div className="container">
            <div className="pressure-module-gallery-heading">
              <div>
                <p className="eyebrow">PRESSURE CONTROL IN PRACTICE</p>
                <h2>Filtered air for <em>critical environments.</em></h2>
              </div>
              <p>Our pressure modules combine compact engineering, HEPA filtration and controlled air movement to support dependable room-pressure performance.</p>
            </div>
            <div className="pressure-module-gallery-grid">
              <figure className="pressure-module-gallery-feature">
                <Image src="/solutions/pressure-module/unit.png" alt="Ceiling-mounted positive pressure module above an operation theatre" fill priority sizes="(max-width: 800px) 100vw, 66vw" />
                <figcaption><span>01</span> Compact ceiling-mounted filtration designed around the room.</figcaption>
              </figure>
              <figure>
                <Image src="/solutions/pressure-module/wall-unit.png" alt="Wall-mounted pressure module grille inside a controlled room" fill sizes="(max-width: 800px) 100vw, 33vw" />
                <figcaption><span>02</span> Clean, flush integration for controlled clinical spaces.</figcaption>
              </figure>
              <div className="pressure-module-gallery-note">
                <span>ENGINEERED AIRFLOW</span>
                <strong>Positive or negative pressure, configured for the application.</strong>
                <Link className="button button-primary" href="/contact">Discuss your requirement <b>↗</b></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pressure-module-profile section-pad">
          <div className="container pressure-module-profile-grid">
            <div className="pressure-module-profile-copy"><p className="eyebrow eyebrow-light">PRESSURE CONTROL ENGINEERING</p><h2>A compact system with a <em>clear purpose.</em></h2><p>Getting the airflow direction right can be critical for controlled environments such as hospital operation theatres, pharmaceutical cleanrooms, isolation areas, and industrial sterile zones.</p><p>Airtec Solutions is a Positive Pressure Module Manufacturer as well as a Negative Pressure Module Manufacturer based in Pune. Our compact air-handling units help maintain pressure differentials across controlled areas without necessarily installing a complete centralized air-handling system.</p><p>We manufacture pressure modules for hospitals, pharmaceutical industries, diagnostic laboratories, research facilities, and industrial cleanrooms across Maharashtra.</p><Link className="button button-light" href="/contact">Discuss your pressure module <b>↗</b></Link></div>
            <div className="pressure-module-spec-card"><div><span>SYSTEM SPECIFICATION</span><b>PPM / NPM</b></div><h3>Technical profile</h3><dl>{specifications.slice(0, 6).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
          </div>
        </section>

        <section className="pressure-module-components section-pad"><div className="container"><div className="pressure-module-heading"><p className="eyebrow">SYSTEM WORKING PRINCIPLE</p><h2>What Is a Pressure Module? <em>How Does It Work?</em></h2><p className="pressure-module-section-lead">A pressure module is a compact, self-contained air filtration and air-supply or extraction unit designed to be installed into a wall or window opening. Depending on the configuration, it can help regulate room pressure and filter airborne particles in cleanrooms, operation theatres, isolation areas, and other controlled environments.</p></div><div className="pressure-module-component-list">{workingStages.map(([number, title, copy]) => <article key={title}><b>{number}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="pressure-module-comparison section-pad"><div className="container"><p className="eyebrow">CONFIGURATION GUIDE</p><h2>Positive Pressure Module <em>vs Negative Pressure Module</em></h2><p className="pressure-module-section-lead">Choosing between a positive pressure module and a negative pressure module depends primarily on whether the controlled environment needs to minimize contaminant entry or minimize contaminant escape.</p><div className="pressure-module-table-wrap"><table><caption className="sr-only">Comparison of positive and negative pressure modules</caption><thead><tr><th scope="col">Parameter</th><th scope="col">Positive Pressure Module</th><th scope="col">Negative Pressure Module</th></tr></thead><tbody>{comparisonRows.map(([parameter, positive, negative]) => <tr key={parameter}><th scope="row">{parameter}</th><td>{positive}</td><td>{negative}</td></tr>)}</tbody></table></div><p className="pressure-module-note">Pressure modules can be designed for controlled environments requiring specified cleanliness classifications. Final room classification depends on the complete room design, airflow, filtration, air changes, pressure cascade, construction, monitoring, and validation.</p></div></section>

        <section className="pressure-module-specifications section-pad"><div className="container"><div className="pressure-module-heading"><p className="eyebrow">TECHNICAL PROFILE</p><h2>Specifications shaped around <em>your application.</em></h2></div><div className="pressure-module-table-wrap pressure-module-spec-table-wrap"><table><caption className="sr-only">Pressure module technical specifications</caption><thead><tr><th scope="col">Parameter</th><th scope="col">Details</th></tr></thead><tbody>{specifications.map(([parameter, detail]) => <tr key={parameter}><th scope="row">{parameter}</th><td>{detail}</td></tr>)}</tbody></table></div></div></section>

        <section className="pressure-module-features section-pad"><div className="container"><p className="eyebrow eyebrow-light">BENEFITS &amp; FEATURES</p><h2>Practical control for <em>critical spaces.</em></h2><div className="pressure-module-feature-grid">{features.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="pressure-module-applications section-pad"><div className="container"><p className="eyebrow">APPLICATIONS</p><h2>Designed for environments where <em>pressure matters.</em></h2><div className="pressure-module-application-grid">{applications.map((application, index) => <span key={application}><b>{String(index + 1).padStart(2, "0")}</b>{application}</span>)}</div></div></section>

        <section className="cleanroom-why section-pad"><div className="container cleanroom-why-grid"><div><p className="eyebrow eyebrow-light">WHY AIRTEC SOLUTIONS</p><h2>Your direct partner for <em>pressure control.</em></h2><p>As a manufacturer based in Bhosari, Pune, Maharashtra, Airtec Solutions supports pressure-module projects from configuration through installation and service.</p></div><ul><li><b>01</b>Positive and negative pressure module configurations</li><li><b>02</b>Custom airflow capacity based on room requirements</li><li><b>03</b>Customized dimensions and filtration arrangements</li><li><b>04</b>Automatic or manual control options</li><li><b>05</b>Support for hospital, pharmaceutical, laboratory, and industrial applications</li><li><b>06</b>Installation and service support across Maharashtra</li></ul></div></section>

        <section className="cleanroom-classification section-pad"><div className="container cleanroom-classification-grid"><div><p className="eyebrow eyebrow-light">CUSTOM PRESSURE MODULES</p><h2>Get a Custom <em>Pressure Module Quote.</em></h2><p>Planning a hospital, pharmaceutical, laboratory, or industrial cleanroom project in Maharashtra? Share your room size, required air-change rate, pressure requirement, and application details with our team to discuss a suitable configuration and customized quotation.</p></div><div className="cleanroom-standard-list"><span>COMPLETE FACILITY SUPPORT</span><p><b>01</b>Pressure module configuration and selection</p><p><b>02</b>Installation, commissioning and service support</p><p><b>03</b>Related cleanroom equipment for complete setups</p><div className="pressure-module-cta-links"><Link className="button button-light" href="/contact">Request a quote <b>↗</b></Link><Link className="button button-ghost button-ghost-light" href="/contact">Contact us <b>↗</b></Link></div></div></div></section>

        <section className="pressure-module-faq section-pad"><div className="container"><p className="eyebrow">FAQ</p><h2>Frequently Asked Questions</h2><div className="cleanroom-faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="related-solutions section-pad"><div className="container"><p className="eyebrow">CONTINUE EXPLORING</p><div className="related-heading"><h2>Related cleanroom products</h2><Link href="/products">View all products ↗</Link></div><div className="related-grid">{relatedProducts.slice(0, 3).map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div><div className="pressure-module-related-links">{relatedProducts.slice(3).map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
