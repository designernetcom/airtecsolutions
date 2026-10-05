import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maintenance & Support | Airtec Solutions",
  description:
    "Maintenance, emergency support and annual maintenance contracts for Modular Cleanrooms and Modular Operation Theatres from Airtec Solutions.",
  alternates: { canonical: "/maintenance-and-support" },
};

const maintenanceServices = [
  [
    "01",
    "Routine Cleaning & Disinfection",
    "Walls, floors, ceilings, clean-air equipment, AHUs and air-conditioning systems are covered to help prevent breakdowns and contamination risks.",
  ],
  [
    "02",
    "HVAC & Filtration Maintenance",
    "Airflow velocity testing, air-changes-per-hour testing, AHU coil and drain-pan cleaning, pre-filter replacements and related checks.",
  ],
  [
    "03",
    "Emergency Breakdown Support",
    "Rapid-response service teams for urgent repairs and breakdowns that need immediate attention in critical operating environments.",
  ],
  [
    "04",
    "Annual Maintenance Contracts",
    "Customised annual maintenance packages planned around your facility, equipment, operating schedule and service requirements.",
  ],
] as const;

export default function MaintenanceAndSupportPage() {
  return (
    <>
      <Header />
      <main className="maintenance-page" id="top">
        <section className="solution-detail-hero maintenance-hero">
          <Image
            src="/solutions/modular-cleanroom/maintenance.png"
            alt="Airtec Solutions maintenance support for a controlled cleanroom environment"
            fill
            priority
            sizes="100vw"
          />
          <div className="solution-detail-shade" />
          <div className="container solution-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span aria-current="page">Maintenance &amp; Support</span>
            </nav>
            <p className="eyebrow eyebrow-light">OUR EXPERTISE / 07</p>
            <h1>Maintenance &amp; <span>Support</span></h1>
            <p>
              Practical, responsive maintenance for cleanrooms and Modular OTs
              that need to stay clean, certified and compliant.
            </p>
          </div>
        </section>

        <section className="maintenance-intro section-pad">
          <div className="container maintenance-intro-grid">
            <div>
              <p className="eyebrow">KEEPING PERFORMANCE ON TRACK</p>
              <h2>Built environments need <em>continued care.</em></h2>
            </div>
            <div>
              <p>
                At Airtec Solutions, we believe that the operational performance
                and durability of Modular Cleanrooms and Modular Operation
                Theatres (OTs) depend on timely maintenance.
              </p>
              <p>
                Our maintenance services are planned to suit your requirements,
                helping protect hygiene, airflow, equipment performance and the
                continuity of critical operations.
              </p>
            </div>
          </div>
        </section>

        <section className="maintenance-services section-pad">
          <div className="container">
            <div className="maintenance-section-heading">
              <div>
                <p className="eyebrow eyebrow-light">OUR MAINTENANCE SERVICE INCLUDES</p>
                <h2>Support shaped around <em>your requirements.</em></h2>
              </div>
              <p>
                From routine cleaning to urgent breakdown response, our service
                approach keeps the environment ready for the work it supports.
              </p>
            </div>
            <div className="maintenance-service-grid">
              {maintenanceServices.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <b>↗</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="maintenance-commitment section-pad">
          <div className="container maintenance-commitment-grid">
            <div>
              <p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS</p>
              <h2>Cleanrooms &amp; Modular OTs kept <em>ready.</em></h2>
            </div>
            <div>
              <p>
                Whether you need planned servicing, technical checks or an
                annual maintenance contract, Airtec Solutions can help keep
                your cleanroom or Modular OT operating with confidence.
              </p>
              <strong>Keeping your Cleanrooms &amp; Modular OTs Clean, Certified &amp; Compliant.</strong>
              <Link className="button button-primary" href="/contact">
                Discuss your maintenance requirement <b>↗</b>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
