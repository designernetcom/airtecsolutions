import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProduct, products } from "../data";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: `${product.title} | Airtec Solutions`, description: product.description, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: `${product.title} | Airtec Solutions`, description: product.description, type: "website" } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice((Number(product.number) % 12), (Number(product.number) % 12) + 3);
  const jsonLd = { "@context": "https://schema.org", "@type": "Product", name: product.title, description: product.description, brand: { "@type": "Brand", name: "Airtec Solutions" }, category: product.category, manufacturer: { "@type": "Organization", name: "Airtec Solutions" } };
  return <><Header /><main className="product-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="product-detail-hero"><Image src={product.image} alt={`${product.title} by Airtec Solutions`} fill priority sizes="100vw" /><div className="product-detail-shade" /><div className="container product-detail-hero-content">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>{product.shortTitle}</span></nav>
      <p className="eyebrow eyebrow-light">{product.category.toUpperCase()} / {product.number}</p><h1>{product.title}</h1><p>{product.description}</p>
    </div></section>
    <section className="product-overview section-pad"><div className="container product-overview-grid"><div>
      <p className="eyebrow">DESIGNED AROUND YOUR REQUIREMENT</p><h2>Purposeful details. Reliable performance.</h2><p className="product-overview-lead">{product.intro}</p>
      <Link className="button button-primary" href="/#contact">Request a product consultation <b>↗</b></Link>
    </div><aside className="product-quick-spec"><span>PRODUCT AT A GLANCE</span>{product.specification.map(([key, value]) => <div key={key}><b>{key}</b><p>{value}</p></div>)}</aside></div></section>
    <section className="product-benefits"><div className="container product-benefits-grid"><div><p className="eyebrow eyebrow-light">WHY AIRTEC</p><h2>Ready for the <em>real-world</em> demands of critical spaces.</h2></div><div className="product-feature-list">{product.features.map((feature, index) => <div key={feature}><span>0{index + 1}</span><p>{feature}</p></div>)}</div></div></section>
    <section className="product-applications section-pad"><div className="container"><p className="eyebrow">TYPICAL APPLICATIONS</p><h2>Where this product fits.</h2><div>{product.applications.map((application, index) => <span key={application}><b>0{index + 1}</b>{application}</span>)}</div></div></section>
    <section className="product-related section-pad"><div className="container"><div className="related-heading"><div><p className="eyebrow">CONTINUE EXPLORING</p><h2>Related products</h2></div><Link href="/products">View all products ↗</Link></div><div className="related-grid">{related.map((item) => <Link className="related-card" href={`/products/${item.slug}`} key={item.slug}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><b>Explore ↗</b></Link>)}</div></div></section>
  </main><Footer /></>;
}
