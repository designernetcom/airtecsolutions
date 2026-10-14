import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dynamic Pass Box | Airtec Solutions",
  description:
    "Dynamic Pass Box equipment from Airtec Solutions, manufactured with powder-coated high-grade stainless steel and international quality standard components for hospitals and clean rooms.",
  alternates: { canonical: "/dynamic-pass-box" },
  openGraph: {
    title: "Dynamic Pass Box | Airtec Solutions",
    description: "Dynamic Pass Box systems designed to minimize traffic and contamination entry into clean rooms.",
    type: "website",
  },
};

const specifications = [
  ["Brand", "Airtec Solutions"],
  ["Shape", "Rectangular"],
  ["Material", "Stainless Steel/Mild Steel"],
  ["Usage", "Hospital/Clean Rooms"],
  ["Voltage", "230 V"],
  ["Weight", "70kg"],
  ["Country of Origin", "Made in India"],
] as const;

const relatedProducts = [
  ["01", "Pass Box Manufacturer", "Static and dynamic pass box systems for industrial cleanroom transfer.", "/pass-box-manufacturer"],
  ["02", "Clean Pass Box", "Hygienic pass box solutions for contamination-controlled environments.", "/clean-pass-box-manufacturer"],
  ["03", "HEPA Filter", "High-efficiency particulate filtration for critical cleanroom zones.", "/products/hepa-filter"],
] as const;

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dynamic Pass Box",
  description: metadata.description,
  brand: { "@type": "Brand", name: "Airtec Solutions" },
  manufacturer: { "@type": "Organization", name: "Airtec Solutions" },
  category: "Dynamic cleanroom pass box",
  material: "Stainless Steel/Mild Steel",
  countryOfOrigin: "India",
};

export default function DynamicPassBoxPage() {
  return (
    <>
      <Header />
      <main className="product-detail dynamic-pass-box-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
        <section className="product-detail-hero"><Image src="/products/pass-box/interlocked.png" alt="Dynamic Pass Box by Airtec Solutions" fill priority sizes="100vw" /><div className="product-detail-shade" /><div className="container product-detail-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span aria-current="page">Dynamic Pass Box</span></nav>
          <p className="eyebrow eyebrow-light">CLEANROOM EQUIPMENT / MATERIAL TRANSFER</p>
          <small className="product-status-badge product-status-badge-dark">AIRTEC SOLUTIONS / MADE IN INDIA</small>
          <h1>Dynamic Pass Box</h1>
          <p>Dynamic pass box equipment designed to minimize traffic and contamination entry into hospitals and clean rooms.</p>
        </div></section>

        <section className="product-overview section-pad"><div className="container product-overview-grid"><div><p className="eyebrow">DYNAMIC PASS BOX SYSTEM</p><h2>Controlled transfer for <em>cleaner rooms.</em></h2><p className="product-overview-lead">Dynamic Pass Box equipment are made of powder coated high grades stainless steel with international quality standard components. We are engaged in manufacturing and supplying a distinguished range of Dynamic Pass Box that is helpful in minimizing traffic and contamination entry into the clean room.</p><Link className="button button-primary" href="/contact">Request a product consultation <b>↗</b></Link></div><aside className="product-quick-spec"><span>PRODUCT AT A GLANCE</span>{specifications.map(([label, value]) => <div key={label}><b>{label}</b><p>{value}</p></div>)}</aside></div></section>

        <section className="dynamic-pass-box-profile section-pad"><div className="container dynamic-pass-box-profile-grid"><div><p className="eyebrow">ENGINEERED MATERIAL TRANSFER</p><h2>Designed around <em>cleanroom control.</em></h2><p>Dynamic Pass Box equipment are made of powder coated high grades stainless steel with international quality standard components.</p><p>We are engaged in manufacturing and supplying a distinguished range of Dynamic Pass Box that is helpful in minimizing traffic and contamination entry into the clean room.</p></div><div className="dynamic-pass-box-image"><Image src="/products/pass-box/transfer.png" alt="Dynamic pass box transfer chamber" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>01 / DYNAMIC TRANSFER</span></div></div></section>

        <section className="dynamic-pass-box-specs section-pad"><div className="container"><div className="pressure-module-heading"><p className="eyebrow">TECHNICAL PROFILE</p><h2>Product details at <em>a glance.</em></h2></div><div className="pressure-module-table-wrap"><table><caption className="sr-only">Dynamic Pass Box product specifications</caption><thead><tr><th scope="col">Parameter</th><th scope="col">Specification</th></tr></thead><tbody>{specifications.map(([parameter, specification]) => <tr key={parameter}><th scope="row">{parameter}</th><td>{specification}</td></tr>)}</tbody></table></div></div></section>

        <section className="product-benefits dynamic-pass-box-benefits"><div className="container product-benefits-grid"><div><p className="eyebrow eyebrow-light">DYNAMIC PASS BOX</p><h2>Less traffic. <em>More control.</em></h2></div><div className="product-feature-list"><div><span>01</span><p>Powder coated high grades stainless steel construction.</p></div><div><span>02</span><p>International quality standard components.</p></div><div><span>03</span><p>Helpful in minimizing traffic into the clean room.</p></div><div><span>04</span><p>Designed to minimize contamination entry into the clean room.</p></div></div></div></section>

        <section className="dynamic-pass-box-cta section-pad"><div className="container"><p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / DYNAMIC PASS BOX</p><h2>A practical transfer system for <em>critical environments.</em></h2><p>Talk to Airtec Solutions about a Dynamic Pass Box for your hospital or clean room requirement.</p><Link className="button button-light" href="/contact">Discuss your requirement <b>↗</b></Link></div></section>

        <section className="product-related section-pad"><div className="container"><div className="related-heading"><div><p className="eyebrow">CONTINUE EXPLORING</p><h2>Related products</h2></div><Link href="/products">View all products ↗</Link></div><div className="related-grid">{relatedProducts.map(([number, title, description, href]) => <Link className="related-card" href={href} key={href}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>Explore ↗</b></Link>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
