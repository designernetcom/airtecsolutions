import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Modular Clean Room Manufacturer | Airtec Solutions",
  description:
    "Airtec Solutions is a modular clean room manufacturer offering customized PPGI and PCGI panel cleanroom systems with HEPA filtration for pharmaceutical, healthcare, laboratory, electronics and food industries.",
  alternates: { canonical: "/modular-clean-room-manufacturer" },
  openGraph: {
    title: "Modular Clean Room Manufacturer | Airtec Solutions",
    description: "Advanced modular clean room systems designed for contamination control, flexible expansion and reliable performance.",
    type: "website",
  },
};

const industries = [
  "Pharmaceutical manufacturing units",
  "Healthcare and hospital facilities",
  "Biotechnology laboratories",
  "Food and beverage processing industries",
  "Electronics and semiconductor manufacturing",
  "Research and development centers",
  "Medical device production units",
] as const;

const features = [
  ["Advanced HEPA Filtration System", "Our clean rooms are equipped with high-efficiency HEPA filters that help remove airborne particles, dust and contaminants for better air purity and contamination control."],
  ["Modular and Flexible Design", "The modular construction allows easy installation, relocation and expansion according to future operational needs. This makes the system highly flexible and scalable for different industries."],
  ["Durable Construction", "We use premium-quality wall panels, powder-coated doors and robust structures to ensure long-lasting performance and durability in controlled environments."],
  ["Energy Efficient Operation", "Our modular clean room systems are designed with optimized airflow and efficient filtration technology that helps reduce energy consumption while maintaining cleanroom standards."],
  ["Easy Maintenance and Cleaning", "The smooth surface finish and hygienic panel design make the clean rooms easy to clean and maintain, helping industries maintain strict cleanliness protocols."],
] as const;

const advantages = [
  "Customized clean room solutions",
  "High-quality raw materials",
  "Compliance with industry standards",
  "Experienced technical team",
  "Competitive pricing",
  "Timely project completion",
  "PAN India service support",
  "Reliable after-sales assistance",
] as const;

const faqs = [
  ["Who is the trusted modular clean room manufacturer?", "Airtec Solutions is a trusted modular clean room manufacturer offering customized clean room systems for pharmaceutical, healthcare, electronics, food processing and laboratory industries."],
  ["What industries use modular clean room systems?", "Modular clean room systems are widely used in pharmaceuticals, hospitals, biotechnology labs, electronics manufacturing, food processing units and research facilities."],
  ["What are the benefits of modular clean rooms?", "Modular clean rooms provide contamination control, easy installation, energy efficiency, flexible expansion, low maintenance and long-lasting performance."],
  ["Do modular clean rooms use HEPA filtration systems?", "Yes, modular clean rooms are equipped with advanced HEPA filtration systems that help maintain clean and dust-free environments by removing airborne particles."],
  ["Why choose Airtec Solutions for modular clean room systems?", "Airtec Solutions offers customized clean room solutions, quality manufacturing, experienced technical support, durable construction and reliable after-sales service for various industrial applications."],
] as const;

const relatedSolutions = [
  ["01", "Cleanroom Panels", "Sealed, hygienic wall and ceiling systems for controlled environments.", "/products/cleanroom-panels"],
  ["02", "HEPA Filter", "High-efficiency particulate filtration for critical cleanroom zones.", "/products/hepa-filter"],
  ["03", "Modular Operation Theatre", "Controlled healthcare environments planned around clinical workflow.", "/solutions/modular-operation-theater-manufacturer"],
  ["04", "Pass Box", "Controlled material transfer between cleanroom zones.", "/products/pass-box"],
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Modular Clean Room Manufacturer",
  description: metadata.description,
  provider: { "@type": "Organization", name: "Airtec Solutions" },
  areaServed: "India",
  serviceType: "Modular clean room design and manufacturing",
};

export default function ModularCleanRoomManufacturerPage() {
  return (
    <>
      <Header />
      <main className="solution-detail modular-clean-room-manufacturer-page" id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <section className="solution-detail-hero"><Image src="/solutions/modular-cleanroom/production-floor.png" alt="Modular clean room manufactured by Airtec Solutions" fill priority sizes="100vw" /><div className="solution-detail-shade" /><div className="container solution-detail-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Modular Clean Room Manufacturer</span></nav>
          <p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / CONTROLLED ENVIRONMENTS</p>
          <h1>Modular Clean Room Manufacturer</h1>
          <p>Advanced modular clean room systems for contamination control, flexible expansion and reliable performance across multiple industries.</p>
        </div></section>

        <section className="cleanroom-intro section-pad"><div className="container cleanroom-intro-grid"><div><p className="eyebrow">MODULAR CLEAN ROOM MANUFACTURING</p><h2>Controlled environments for <em>critical work.</em></h2></div><div><p>In industries where hygiene, contamination control and air quality are critical, choosing the right modular clean room manufacturer plays a major role in maintaining product safety and operational efficiency. Airtec Solutions specializes in designing and manufacturing advanced modular clean room systems that help create controlled environments for pharmaceutical companies, healthcare facilities, laboratories, electronics industries, food processing units, biotechnology sectors and research centers. The company has been actively manufacturing clean room solutions since 2011 with a strong focus on quality engineering, reliable performance and customized solutions.</p><p>Our modular clean rooms are manufactured using premium-quality PPGI and PCGI panels along with advanced HEPA filtration systems that help maintain dust-free and contamination-controlled environments. These clean room systems are designed for long-term performance, easy installation, low maintenance and energy-efficient operation. The modular structure also allows future expansion and relocation whenever required, making it a cost-effective solution for modern industries.</p><Link className="button button-primary" href="/contact">Get a quote <b>↗</b></Link></div></div></section>

        <section className="modular-cleanroom-gallery section-pad"><div className="container"><div className="modular-cleanroom-gallery-heading"><div><p className="eyebrow">MODULAR CLEAN ROOM SYSTEMS</p><h2>Built for <em>real production.</em></h2></div><p>From production floors to hygienic access corridors, our cleanroom systems are coordinated around airflow, cleanability, movement and process control.</p></div><div className="modular-cleanroom-gallery-grid"><figure className="modular-cleanroom-gallery-feature"><Image src="/solutions/modular-cleanroom/production-floor.png" alt="Large modular clean room production floor" fill priority sizes="(max-width: 800px) 100vw, 66vw" /><figcaption><span>01</span> Production-ready cleanroom infrastructure with coordinated equipment zones.</figcaption></figure><figure><Image src="/solutions/modular-cleanroom/cleanroom-floor.png" alt="Bright modular clean room with blue flooring" fill sizes="(max-width: 800px) 100vw, 33vw" /><figcaption><span>02</span> Cleanable production space with clear movement paths.</figcaption></figure><figure><Image src="/solutions/modular-cleanroom/corridor.png" alt="Modular clean room corridor with viewing windows" fill sizes="(max-width: 800px) 100vw, 33vw" /><figcaption><span>03</span> Controlled circulation through hygienic access points.</figcaption></figure></div></div></section>

        <section className="cleanroom-industries section-pad"><div className="container"><p className="eyebrow eyebrow-light">TRUSTED FOR MULTIPLE INDUSTRIES</p><div className="cleanroom-applications-heading"><h2>Modular clean rooms for <em>different industries.</em></h2><p>Airtec Solutions offers customized modular clean room solutions that meet the exact operational requirements of different industries. We understand that every facility requires a unique cleanroom setup based on airflow, cleanliness standards, temperature control, humidity management and process safety.</p></div><div className="cleanroom-industry-list">{industries.map((industry, index) => <span key={industry}><b>{String(index + 1).padStart(2, "0")}</b>{industry}</span>)}</div></div></section>

        <section className="cleanroom-definition section-pad"><div className="container cleanroom-definition-grid"><div><p className="eyebrow">CUSTOMIZED ENGINEERING</p><h2>Designed around <em>your operation.</em></h2></div><div><p>Our expert team works closely with clients to deliver efficient clean room systems with precise engineering and high-quality finishing.</p><p>Modular clean rooms are essential in industries where contamination-free environments are required for production, testing, packaging, or research activities. These systems help improve product quality, operational safety and compliance with industry regulations.</p><p>Industries today prefer modular clean room systems because they offer faster installation, lower maintenance, flexibility and efficient contamination control compared to traditional construction methods. Many clean room contractors and manufacturers also recommend modular clean rooms for their scalability and cost-effectiveness.</p></div></div></section>

        <section className="cleanroom-benefits section-pad"><div className="container"><div className="cleanroom-section-heading"><p className="eyebrow">FEATURES OF OUR MODULAR CLEAN ROOM SYSTEMS</p><h2>Five ways the system supports <em>cleanroom performance.</em></h2></div><div className="cleanroom-benefit-grid">{features.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="cleanroom-why section-pad"><div className="container cleanroom-why-grid"><div><p className="eyebrow eyebrow-light">WHY CHOOSE AIRTEC SOLUTIONS?</p><h2>A cleanroom partner focused on <em>quality and delivery.</em></h2><p>Airtec Solutions has earned a strong reputation as a reliable modular clean room manufacturer by delivering high-quality clean room solutions with complete customer satisfaction. Our experienced team focuses on innovation, quality standards, precision manufacturing and timely project execution. We provide complete support from design consultation to installation and after-sales service.</p></div><ul>{advantages.map((advantage, index) => <li key={advantage}><b>{String(index + 1).padStart(2, "0")}</b>{advantage}</li>)}</ul></div></section>

        <section className="cleanroom-classification section-pad"><div className="container cleanroom-classification-grid"><div><p className="eyebrow eyebrow-light">MODULAR CLEAN ROOM MANUFACTURER</p><h2>Build a cleaner future for <em>your industry.</em></h2><p>Share your application, space and project requirements with Airtec Solutions for a customized modular clean room solution designed around your process.</p></div><div className="cleanroom-standard-list"><span>PROJECT SUPPORT</span><p><b>01</b>Design consultation and requirement review</p><p><b>02</b>Quality panels, HEPA filtration and cleanroom engineering</p><p><b>03</b>Installation, PAN India service and after-sales assistance</p><Link className="button button-light" href="/contact">Request a quote <b>↗</b></Link></div></div></section>

        <section className="cleanroom-faq section-pad"><div className="container"><div className="cleanroom-section-heading"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Questions about modular <em>clean rooms.</em></h2></div><div className="cleanroom-faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="related-solutions section-pad"><div className="container"><p className="eyebrow">CONTINUE EXPLORING</p><div className="related-heading"><h2>Related cleanroom solutions</h2><Link href="/solutions">View all solutions ↗</Link></div><div className="related-grid">{relatedSolutions.map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
