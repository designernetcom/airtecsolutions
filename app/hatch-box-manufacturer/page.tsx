import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hatch Box Manufacturer in Maharashtra | Airtec Solutions",
  description:
    "Airtec Solutions is a leading hatch box manufacturer in Pune, Maharashtra, delivering durable, reliable and customizable hatch box solutions for industries worldwide.",
  alternates: { canonical: "/hatch-box-manufacturer" },
  openGraph: {
    title: "Hatch Box Manufacturer in Maharashtra | Airtec Solutions",
    description:
      "High-quality hatch boxes from Airtec Solutions, combining quality craftsmanship, innovative design and dependable customer support.",
    type: "website",
  },
};

const sections = [
  ["01", "Quality Craftsmanship", "At the heart of Airtec Solutions' success lies a dedication to quality craftsmanship. Our hatch boxes are meticulously designed and manufactured to ensure durability, reliability, and optimal performance. We understand the importance of precision in the aerospace and industrial sectors, and our products reflect our unwavering commitment to meeting the highest industry standards."],
  ["02", "Innovative Design", "Airtec Solutions stands out for its innovative approach to hatch box design. We leverage cutting-edge technologies and collaborate with industry experts to develop solutions that cater to evolving market demands. Our design team is constantly pushing boundaries, creating hatch boxes that not only meet functional requirements but also contribute to the overall efficiency and safety of operations."],
  ["03", "Customization Options", "Recognizing that every industry has unique requirements, Airtec Solutions offers a range of customization options for hatch boxes. Whether you need specific dimensions, materials, or features, we work closely with our clients to tailor our products to their exact specifications. This flexibility ensures that our hatch boxes seamlessly integrate into various applications, providing optimal solutions for diverse industries."],
  ["04", "Durability and Reliability", "Airtec Solutions understands the critical role hatch boxes play in ensuring the safety and efficiency of operations. Our commitment to durability and reliability is unwavering. We use high-quality materials and conduct rigorous testing to guarantee that our hatch boxes can withstand harsh conditions, resist corrosion, and perform consistently over an extended lifespan."],
  ["05", "Environmental Responsibility", "As a responsible hatch box manufacturer, Airtec Solutions is committed to sustainable practices. We prioritize eco-friendly materials and production processes to minimize our environmental impact. By choosing Airtec Solutions, you are not only investing in top-tier hatch boxes but also supporting a company dedicated to ethical and environmentally conscious manufacturing."],
  ["06", "Global Reach and Customer Support", "With a global presence, Airtec Solutions serves industries around the world. Our extensive network ensures timely delivery of our products, and our dedicated customer support team is always ready to assist with any inquiries or concerns. We believe in building lasting relationships with our clients by providing excellent service from the initial inquiry to post-purchase support."],
] as const;

const applications = ["Aerospace and industrial sectors", "Manufacturing facilities", "Process and engineering environments", "Custom industrial applications"] as const;

const relatedProducts = [
  ["01", "Pass Box", "Controlled material transfer for cleanroom and industrial workflows.", "/products/pass-box"],
  ["02", "Cleanroom Doors", "Hygienic access systems designed for controlled environments.", "/products/cleanroom-doors"],
  ["03", "Cleanroom Windows", "Flush observation glazing for clean, visible operations.", "/products/cleanroom-windows"],
] as const;

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Hatch Box Manufacturer",
  description: metadata.description,
  brand: { "@type": "Brand", name: "Airtec Solutions" },
  manufacturer: { "@type": "Organization", name: "Airtec Solutions" },
  category: "Industrial hatch box",
  areaServed: "Maharashtra, India",
};

export default function HatchBoxManufacturerPage() {
  return (
    <>
      <Header />
      <main className="product-detail hatch-box-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
        <section className="product-detail-hero">
          <Image src="/products/pass-box/hero.png" alt="Hatch box manufacturing solution by Airtec Solutions" fill priority sizes="100vw" />
          <div className="product-detail-shade" />
          <div className="container product-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span aria-current="page">Hatch Box Manufacturer</span></nav>
            <p className="eyebrow eyebrow-light">INDUSTRIAL SOLUTIONS / HATCH BOX SYSTEMS</p>
            <small className="product-status-badge product-status-badge-dark">MADE FOR YOUR REQUIREMENT</small>
            <h1>Hatch Box Manufacturer in Maharashtra</h1>
            <p>High-quality hatch box solutions from Airtec Solutions, Pune — engineered with precision, reliability and customer satisfaction in mind.</p>
          </div>
        </section>

        <section className="product-overview section-pad">
          <div className="container product-overview-grid">
            <div>
              <p className="eyebrow">HATCH BOX MANUFACTURING / PUNE</p>
              <h2>Built around precision. <em>Trusted worldwide.</em></h2>
              <p className="product-overview-lead">Airtec Solutions takes pride in being a leading hatch box manufacturer in Pune, dedicated to delivering high-quality solutions that meet the diverse needs of industries worldwide. With a commitment to innovation, precision engineering, and customer satisfaction, Airtec Solutions has established itself as a trusted name in the manufacturing of hatch boxes.</p>
              <Link className="button button-primary" href="/contact">Request a product consultation <b>↗</b></Link>
            </div>
            <aside className="product-quick-spec"><span>PRODUCT AT A GLANCE</span><div><b>Manufacturer</b><p>Airtec Solutions</p></div><div><b>Location</b><p>Pune, Maharashtra</p></div><div><b>Reach</b><p>Industries worldwide</p></div><div><b>Focus</b><p>Precision, durability and customization</p></div></aside>
          </div>
        </section>

        <section className="hatch-box-content section-pad">
          <div className="container"><div className="hatch-box-content-heading"><div><p className="eyebrow">THE AIRTEC APPROACH</p><h2>Engineering that earns <em>confidence.</em></h2></div><p>From the first conversation through post-purchase support, every hatch box project is shaped around practical performance and long-term value.</p></div><div className="hatch-box-section-grid">{sections.map(([number, title, copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
        </section>

        <section className="product-benefits hatch-box-benefits"><div className="container product-benefits-grid"><div><p className="eyebrow eyebrow-light">WHY AIRTEC SOLUTIONS</p><h2>More than a hatch box. <em>A dependable partner.</em></h2></div><div className="product-feature-list"><div><span>01</span><p>Quality craftsmanship designed for durability, reliability and optimal performance.</p></div><div><span>02</span><p>Innovative solutions that support the efficiency and safety of operations.</p></div><div><span>03</span><p>Customization options for dimensions, materials and features that match your application.</p></div><div><span>04</span><p>Dedicated customer support from initial inquiry through post-purchase service.</p></div></div></div></section>

        <section className="product-applications section-pad"><div className="container"><p className="eyebrow">APPLICATIONS</p><h2>Where hatch box solutions <em>make a difference.</em></h2><div>{applications.map((application, index) => <span key={application}><b>{String(index + 1).padStart(2, "0")}</b>{application}</span>)}</div></div></section>

        <section className="hatch-box-conclusion section-pad"><div className="container hatch-box-conclusion-inner"><div><p className="eyebrow eyebrow-light">CONCLUSION / HATCH BOX MANUFACTURER</p><h2>Elevate your industry with <em>Airtec Solutions.</em></h2><p>Airtec Solutions stands at the forefront of hatch box manufacturing, combining quality craftsmanship, innovative design, and customer-centric values. When you choose Airtec Solutions, you are choosing a partner committed to delivering hatch boxes that meet the highest industry standards, contribute to operational efficiency, and prioritize environmental responsibility.</p></div><Link className="button button-light" href="/contact">Discuss your requirement <b>↗</b></Link></div></section>

        <section className="product-related section-pad"><div className="container"><div className="related-heading"><div><p className="eyebrow">CONTINUE EXPLORING</p><h2>Related products</h2></div><Link href="/products">View all products ↗</Link></div><div className="related-grid">{relatedProducts.map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
