import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./clients.module.css";

export const metadata: Metadata = {
  title: "Our Clients | Airtec Solutions",
  description:
    "Explore the healthcare, pharmaceutical, industrial, engineering and research organizations served by Airtec Solutions.",
  alternates: { canonical: "/clients" },
};

const categories = [
  [
    "01",
    "Healthcare & Hospitals",
    "Controlled spaces designed around patient care, clinical workflows and dependable day-to-day operation.",
  ],
  [
    "02",
    "Pharmaceutical & Medical",
    "Clean environments and support systems for pharmaceutical, medical and life-science applications.",
  ],
  [
    "03",
    "Industrial & Engineering",
    "Practical clean-air and controlled-environment solutions for demanding industrial facilities.",
  ],
  [
    "04",
    "Research & Institutions",
    "Purpose-built environments for research, testing and institutions where precision matters.",
  ],
] as const;

const hospitalClients = [
  "Insight Eye Hospital",
  "Life Line Hospital",
  "District Civil Hospital",
  "Sassoon Hospital",
  "Shri Ram Eye Hospital",
  "Global Eye Hospital",
  "Vatsalya Hospital",
  "More Eye Hospital",
  "Sion Hospital",
] as const;

const industrialClients = [
  "Tata Institute of Fundamental Research",
  "Finolex J Power System Pvt. Ltd.",
  "Larsen & Toubro Electrical & Automation Pvt. Ltd.",
  "Finolex Cables Ltd.",
  "Unique Labels Pvt. Ltd.",
  "Larsen & Toubro Switchgear",
  "Chaitanya Enterprises",
  "Schneider Electric India Pvt. Ltd.",
] as const;

const pharmaceuticalClients = [
  "Swanand Foods Pvt. Ltd.",
  "Emmune Health Care Pvt. Ltd.",
  "Mandhan Packaging",
  "Wintech Pharmaceuticals Pvt. Ltd.",
  "Prachi Pharmaceuticals Pvt. Ltd.",
  "Jain Speciality Fine Chemicals",
  "Staco Nutra Products Pvt. Ltd.",
  "Deccan Neutraceutical",
  "Emcure Pharmaceuticals",
] as const;

const researchClients = [
  "Poona Serological Institute",
  "NCL Innovation Park",
  "Venture Center (NCL)",
] as const;

function Arrow() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}

function ClientSection({
  eyebrow,
  title,
  description,
  clients,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  clients: readonly string[];
  dark?: boolean;
}) {
  return (
    <section
      className={`${styles.clientSection} ${dark ? styles.clientSectionDark : ""}`}
      aria-labelledby={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`}
    >
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`}>
              {title}
            </h2>
          </div>
          <p>{description}</p>
        </div>
        <ul className={styles.clientGrid}>
          {clients.map((client, index) => (
            <li className={styles.clientTile} key={client}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{client}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main className={`${styles.page} solution-detail`} id="top">
        <section className="solution-detail-hero" aria-labelledby="clients-title">
          <Image src="/solutions/1 (6).png" alt="Modern modular operation theatre environment" fill priority sizes="100vw" />
          <div className="solution-detail-shade" />
          <div className="container solution-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Our Clients</span></nav>
            <p className="eyebrow eyebrow-light">AIRTEC CLIENT NETWORK / 01</p>
            <h1 id="clients-title">Our Clients</h1>
            <p>Building long-term relationships with organizations across healthcare, pharmaceuticals, medical devices, research, engineering and other controlled environments.</p>
          </div>
        </section>

        {/* <section className={styles.hero} aria-labelledby="clients-title">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Our Clients</span>
              </nav>
              <p className={styles.eyebrow}>
                <span className={styles.dot} /> AIRTEC CLIENT NETWORK / 01
              </p>
              <h1 id="clients-title">
                Our <span>Clients</span>
              </h1>
              <p className={styles.heroDescription}>
                Building long-term relationships with organizations across
                healthcare, pharmaceuticals, medical devices, research,
                engineering and other controlled environments.
              </p>
              <div className={styles.heroMeta}>
                <span>01 / EXPERIENCE</span>
                <i />
                <span>HEALTHCARE / INDUSTRY / RESEARCH</span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <Image
                src="/solutions/modular-ot/hero.png"
                alt="Modern modular operation theatre environment"
                fill
                priority
                sizes="100vw"
              />
              <div className={styles.imageTopline}>
                <span>
                  <i /> BUILT AROUND YOUR WORK
                </span>
                <span>01 / AIRTEC</span>
              </div>
              <div className={styles.imageCaption}>
                <span>
                  Trusted spaces.
                  <br />
                  <strong>Long-term partnerships.</strong>
                </span>
                <span className={styles.imageCross} aria-hidden="true">
                  +
                </span>
              </div>
              <div className={styles.foundedBadge}>
                <span>RELATIONSHIPS BUILT SINCE</span>
                <strong>
                  2011<span aria-hidden="true">↗</span>
                </strong>
                <span>PUNE, MAHARASHTRA</span>
              </div>
            </div>
          </div>
        </section> */}

        <section className={styles.overview} aria-labelledby="network-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>01 / OUR NETWORK</p>
                <h2 id="network-title">
                  Built around the work
                  <br />
                  <span>that matters.</span>
                </h2>
              </div>
              <p>
                Every organization has a different workflow, standard and
                responsibility. Our work begins by understanding what the
                environment needs to do.
              </p>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map(([number, title, copy]) => (
                <article key={title}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ClientSection
          eyebrow="02 / HEALTHCARE"
          title="Hospital & Healthcare Clients"
          description="Healthcare environments where hygiene, controlled air and reliable execution support the people delivering care."
          clients={hospitalClients}
        />
        <ClientSection
          eyebrow="03 / INDUSTRY"
          title="Industrial / Institutional Clients"
          description="Organizations that depend on carefully coordinated spaces, equipment and engineering support."
          clients={industrialClients}
          dark
        />
        <ClientSection
          eyebrow="04 / PHARMACEUTICAL"
          title="Pharmaceutical & Medical"
          description="Verified organizations from pharmaceutical, medical, food and speciality chemical applications."
          clients={pharmaceuticalClients}
        />
        <ClientSection
          eyebrow="05 / RESEARCH"
          title="Research & Institutions"
          description="Research-led institutions where controlled environments help teams work with confidence and repeatability."
          clients={researchClients}
          dark
        />

        <section className={styles.cta} aria-labelledby="cta-title">
          <div className={`${styles.container} ${styles.ctaInner}`}>
            <div>
              <p className={styles.eyebrow}>YOUR NEXT SPACE STARTS HERE</p>
              <h2 id="cta-title">
                Looking for a reliable
                <br />
                <span>cleanroom &amp; modular OT partner?</span>
              </h2>
              <p>
                Tell us what you are planning. We will help bring the right
                environment together.
              </p>
            </div>
            <Link className={styles.primaryButton} href="/contact">
              Let&apos;s Discuss Your Project <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
