import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "./data";

export const metadata: Metadata = {
  title: "Cleanroom & OT Products | Airtec Solutions",
  description: "Explore Airtec Solutions cleanroom panels, HEPA filters, AHUs, airflow equipment, booths, OT systems, doors, windows and flooring.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <><Header /><main className="products-directory">
    <section className="products-hero"><div className="container">
      <p className="eyebrow eyebrow-light">AIRTEC PRODUCT RANGE / 15 SYSTEMS</p>
      <h1>Products engineered for <span>critical environments.</span></h1>
      <p>Explore the components and clean-air equipment that come together to create high-performing healthcare, pharmaceutical and industrial controlled spaces.</p>
    </div></section>
    <section className="products-intro section-pad"><div className="container">
      <div><p className="eyebrow">ONE COORDINATED RANGE</p><h2>Built for the way your facility works.</h2></div>
      <p>From the envelope and airflow to critical work zones and operating theatre systems, each product can be specified as part of an integrated Airtec solution.</p>
    </div></section>
    <section className="products-grid-section"><div className="container products-grid">
      {products.map((product) => <article className="product-card" key={product.slug}>
        <Link href={`/products/${product.slug}`}>
          <div className="product-card-image"><Image src={product.image} alt={`${product.title} by Airtec Solutions`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span>{product.number}</span></div>
          <p>{product.category}</p><h2>{product.title}</h2><span className="product-card-copy">{product.description}</span><b>Explore product <i>↗</i></b>
        </Link>
      </article>)}
    </div></section>
  </main><Footer /></>;
}
