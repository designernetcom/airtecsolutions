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
    {product.slug === "air-shower" && (
      <section className="air-shower-gallery section-pad">
        <div className="container">
          <div className="air-shower-gallery-heading">
            <div>
              <p className="eyebrow">AIR SHOWER SYSTEM</p>
              <h2>Clean entry starts with <em>controlled airflow.</em></h2>
            </div>
            <p>Designed for personnel entry into controlled areas, Airtec air showers combine stainless-steel construction, high-velocity nozzles and interlocked access.</p>
          </div>
          <div className="air-shower-gallery-grid">
            <figure>
              <Image src="/products/air-shower.png" alt="Stainless-steel Air Shower enclosure with open entry door" fill priority sizes="(max-width: 800px) 100vw, 50vw" />
              <figcaption><span>01</span> Complete personnel-entry enclosure.</figcaption>
            </figure>
            <figure>
              <Image src="/products/air-shower/entry-system.png" alt="Stainless-steel Air Shower installed in a cleanroom corridor" fill sizes="(max-width: 800px) 100vw, 50vw" />
              <figcaption><span>02</span> Hygienic construction with clear access control.</figcaption>
            </figure>
            <figure>
              <Image src="/products/air-shower/entry-room.png" alt="Air Shower enclosure positioned beside a cleanroom wash area" fill sizes="(max-width: 800px) 100vw, 50vw" />
              <figcaption><span>03</span> Flexible placement within the entry sequence.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    )}
    {product.slug === "ahu" && (
      <section className="ahu-gallery section-pad">
        <div className="container">
          <div className="ahu-gallery-heading">
            <div>
              <p className="eyebrow">AIR HANDLING UNIT</p>
              <h2>Engineered air handling for <em>controlled spaces.</em></h2>
            </div>
            <p>Explore the AHU cabinet, service access and duct connections that support dependable temperature, filtration and airflow management.</p>
          </div>
          <div className="ahu-gallery-grid">
            <figure>
              <Image src="/products/ahu/hero.png" alt="Blue Air Handling Unit installed on a rooftop platform" fill priority sizes="(max-width: 800px) 100vw, 50vw" />
              <figcaption><span>01</span> Modular AHU cabinet for conditioned and filtered air.</figcaption>
            </figure>
            <figure>
              <Image src="/products/ahu/installation.png" alt="Blue Air Handling Unit with duct connections and service panels" fill sizes="(max-width: 800px) 100vw, 50vw" />
              <figcaption><span>02</span> Serviceable construction with airflow and duct integration.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    )}
    {product.slug === "hpl-puf-panels" && (
      <section className="hpl-puf-gallery section-pad">
        <div className="container">
          <div className="hpl-puf-gallery-heading">
            <div>
              <p className="eyebrow">HPL / PUF PANEL SYSTEMS</p>
              <h2>Built for <em>clean, controlled interiors.</em></h2>
            </div>
            <p>See the panel build-up, hygienic finishes and insulated construction that bring dependable performance to cleanrooms and temperature-controlled spaces.</p>
          </div>
          <div className="hpl-puf-gallery-grid">
            <figure className="hpl-puf-gallery-feature">
              <Image src="/products/hpl-puf-panels/hero.png" alt="HPL and PUF cleanroom panels installed in a hygienic controlled environment" fill priority sizes="(max-width: 800px) 100vw, 62vw" />
              <figcaption><span>01</span> Finished panel systems in a cleanroom environment.</figcaption>
            </figure>
            <figure>
              <Image src="/products/hpl-puf-panels/details.png" alt="HPL and PUF panel installation details including joints, corners and ceiling finishes" fill sizes="(max-width: 800px) 100vw, 38vw" />
              <figcaption><span>02</span> Coordinated details for walls, ceilings and interfaces.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    )}
    {product.slug === "hepa-filter" && (
      <section className="hepa-gallery section-pad">
        <div className="container">
          <div className="hepa-gallery-heading">
            <div>
              <p className="eyebrow">HEPA FILTRATION</p>
              <h2>Clean air, <em>measured with confidence.</em></h2>
            </div>
            <p>From terminal ceiling filters to installation testing, our HEPA solutions support the filtration performance and verification needs of critical environments.</p>
          </div>
          <div className="hepa-gallery-grid">
            <figure className="hepa-gallery-feature">
              <Image src="/products/hepa-filter/hero.png" alt="HEPA filters and terminal filter housings in a cleanroom" fill priority sizes="(max-width: 800px) 100vw, 62vw" />
              <figcaption><span>01</span> HEPA filter formats for cleanroom air delivery.</figcaption>
            </figure>
            <figure>
              <Image src="/products/hepa-filter/testing.png" alt="Technician performing HEPA filter testing beneath a cleanroom ceiling" fill sizes="(max-width: 800px) 100vw, 38vw" />
              <figcaption><span>02</span> Testing and verification for dependable filtration.</figcaption>
            </figure>
            <figure>
              <Image src="/products/hepa-filter/detail.jpeg" alt="Close-up of a pleated HEPA filter being handled for installation" fill sizes="(max-width: 800px) 100vw, 38vw" />
              <figcaption><span>03</span> Filter construction and handling detail.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    )}
    {product.slug === "pass-box" && (
      <section className="pass-box-gallery section-pad">
        <div className="container">
          <div className="pass-box-gallery-heading">
            <div>
              <p className="eyebrow">PASS BOX SYSTEMS</p>
              <h2>Controlled transfer, <em>cleanly resolved.</em></h2>
            </div>
            <p>Explore stainless-steel pass-box configurations designed around interlock control, cleanable interiors and reliable material movement between room zones.</p>
          </div>
          <div className="pass-box-gallery-grid">
            <figure className="pass-box-gallery-feature">
              <Image src="/products/pass-box/hero.png" alt="Stainless-steel pass box installed in a cleanroom corridor" fill priority sizes="(max-width: 800px) 100vw, 62vw" />
              <figcaption><span>01</span> Cleanroom-ready pass box for controlled material transfer.</figcaption>
            </figure>
            <figure>
              <Image src="/products/pass-box/interlocked.png" alt="Pass box with digital controls and illuminated transfer chamber" fill sizes="(max-width: 800px) 100vw, 38vw" />
              <figcaption><span>02</span> Interlock and monitoring options for secure transfer.</figcaption>
            </figure>
            <figure>
              <Image src="/products/pass-box/transfer.png" alt="Pass box with open transfer doors showing the stainless-steel interior" fill sizes="(max-width: 800px) 100vw, 38vw" />
              <figcaption><span>03</span> Hygienic interior with clear access between zones.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    )}
    {product.slug === "air-curtain" && (
      <section className="air-curtain-gallery section-pad">
        <div className="container">
          <div className="air-curtain-gallery-heading">
            <div>
              <p className="eyebrow">AIR CURTAIN SYSTEMS</p>
              <h2>A clear threshold, <em>protected by airflow.</em></h2>
            </div>
            <p>See the cleanroom-ready air curtain housing and its high-velocity air barrier in action at controlled entrances and frequently used openings.</p>
          </div>
          <div className="air-curtain-gallery-grid">
            <figure className="air-curtain-gallery-feature">
              <Image src="/products/air-curtain/hero.png" alt="Stainless-steel air curtain installed above a cleanroom entrance" fill priority sizes="(max-width: 800px) 100vw, 62vw" />
              <figcaption><span>01</span> Hygienic air curtain installation for controlled access points.</figcaption>
            </figure>
            <figure>
              <Image src="/products/air-curtain/detail.png" alt="Close-up of a stainless-steel air curtain releasing a visible airflow barrier" fill sizes="(max-width: 800px) 100vw, 38vw" />
              <figcaption><span>02</span> Focused airflow across the full opening width.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    )}
    {product.slug === "cleanroom-doors" && (
      <section className="cleanroom-doors-gallery section-pad">
        <div className="container">
          <div className="cleanroom-doors-gallery-heading">
            <div>
              <p className="eyebrow">CLEANROOM DOOR SYSTEMS</p>
              <h2>Controlled access, <em>beautifully sealed.</em></h2>
            </div>
            <p>Explore flush, hygienic cleanroom doors in single and double-leaf configurations, with vision panels and finishes coordinated to the room envelope.</p>
          </div>
          <div className="cleanroom-doors-gallery-grid">
            <figure className="cleanroom-doors-gallery-feature">
              <Image src="/products/cleanroom-doors/hero.png" alt="Grey cleanroom double door with vision panel and hygienic hardware" fill priority sizes="(max-width: 800px) 100vw, 62vw" />
              <figcaption><span>01</span> Flush double-leaf door with vision panel and access hardware.</figcaption>
            </figure>
            <figure>
              <Image src="/products/cleanroom-doors/blue-double.png" alt="Blue cleanroom double door with matching vision panels" fill sizes="(max-width: 800px) 100vw, 38vw" />
              <figcaption><span>02</span> Durable colour-finished doors for controlled movement.</figcaption>
            </figure>
            <figure>
              <Image src="/products/cleanroom-doors/stainless-double.png" alt="Stainless-steel cleanroom double doors with observation windows" fill sizes="(max-width: 800px) 100vw, 38vw" />
              <figcaption><span>03</span> Stainless-steel construction for demanding environments.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    )}
    {product.slug === "cleanroom-windows" && (
      <section className="cleanroom-windows-gallery section-pad">
        <div className="container">
          <div className="cleanroom-windows-gallery-heading">
            <div>
              <p className="eyebrow">CLEANROOM WINDOW SYSTEMS</p>
              <h2>Visibility with a <em>sealed, flush finish.</em></h2>
            </div>
            <p>Flush cleanroom glazing brings clear observation into the wall system while maintaining the smooth, hygienic envelope required by controlled environments.</p>
          </div>
          <figure className="cleanroom-windows-gallery-figure">
            <Image src="/products/cleanroom-windows/hero.png" alt="Flush stainless-steel cleanroom windows installed in a hygienic production corridor" fill priority sizes="(max-width: 800px) 100vw, 100vw" />
            <figcaption><span>01</span> Large-format observation glazing integrated into the cleanroom wall system.</figcaption>
          </figure>
        </div>
      </section>
    )}
    {product.slug === "cleanroom-flooring" && (
      <section className="cleanroom-flooring-gallery section-pad">
        <div className="container">
          <div className="cleanroom-flooring-gallery-heading">
            <div>
              <p className="eyebrow">CLEANROOM FLOORING SYSTEMS</p>
              <h2>A seamless foundation for <em>controlled spaces.</em></h2>
            </div>
            <p>Durable, cleanable flooring and coved wall transitions complete the hygienic envelope, supporting dependable movement, maintenance and day-to-day room performance.</p>
          </div>
          <figure className="cleanroom-flooring-gallery-figure">
            <Image src="/products/cleanroom-flooring/hero.png" alt="Seamless blue cleanroom flooring with coved wall transitions" fill priority sizes="(max-width: 800px) 100vw, 100vw" />
            <figcaption><span>01</span> Seamless cleanroom floor finish with hygienic coved detailing.</figcaption>
          </figure>
        </div>
      </section>
    )}
    {product.slug === "sampling-booth" && (
      <section className="sampling-booth-gallery section-pad">
        <div className="container">
          <div className="sampling-booth-gallery-heading">
            <div>
              <p className="eyebrow">SAMPLING BOOTH SYSTEMS</p>
              <h2>A controlled zone for <em>confident sampling.</em></h2>
            </div>
            <p>Stainless-steel construction, filtered airflow and clear access support a practical, cleanable sampling environment within the wider facility workflow.</p>
          </div>
          <figure className="sampling-booth-gallery-figure">
            <Image src="/products/sampling-booth/hero.png" alt="Stainless-steel sampling booth installed in a cleanroom" fill priority sizes="(max-width: 800px) 100vw, 100vw" />
            <figcaption><span>01</span> Clean-air sampling booth with clear operator access and serviceable construction.</figcaption>
          </figure>
        </div>
      </section>
    )}
    {product.slug === "ot-lights" && (
      <section className="ot-lights-gallery section-pad">
        <div className="container">
          <div className="ot-lights-gallery-heading">
            <div>
              <p className="eyebrow">OT LIGHTING SYSTEMS</p>
              <h2>Focused illumination for <em>every critical procedure.</em></h2>
            </div>
            <p>Modern LED surgical lights provide clear, adjustable illumination while integrating cleanly with the theatre ceiling and surrounding clinical equipment.</p>
          </div>
          <figure className="ot-lights-gallery-figure">
            <Image src="/products/ot-lights/hero.png" alt="Twin LED surgical lights installed in a modern operation theatre" fill priority sizes="(max-width: 800px) 100vw, 100vw" />
            <figcaption><span>01</span> Twin surgical lighting system coordinated with the operation theatre ceiling.</figcaption>
          </figure>
        </div>
      </section>
    )}
    <section className="product-benefits"><div className="container product-benefits-grid"><div><p className="eyebrow eyebrow-light">WHY AIRTEC</p><h2>Ready for the <em>real-world</em> demands of critical spaces.</h2></div><div className="product-feature-list">{product.features.map((feature, index) => <div key={feature}><span>0{index + 1}</span><p>{feature}</p></div>)}</div></div></section>
    <section className="product-applications section-pad"><div className="container"><p className="eyebrow">TYPICAL APPLICATIONS</p><h2>Where this product fits.</h2><div>{product.applications.map((application, index) => <span key={application}><b>0{index + 1}</b>{application}</span>)}</div></div></section>
    <section className="product-related section-pad"><div className="container"><div className="related-heading"><div><p className="eyebrow">CONTINUE EXPLORING</p><h2>Related products</h2></div><Link href="/products">View all products ↗</Link></div><div className="related-grid">{related.map((item) => <Link className="related-card" href={`/products/${item.slug}`} key={item.slug}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><b>Explore ↗</b></Link>)}</div></div></section>
  </main><Footer /></>;
}
