import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industries We Serve | Airtec Solutions",
  description:
    "Airtec Solutions provides Modular OT, cleanroom, HVAC, HEPA filtration and clean-air solutions for healthcare, pharmaceutical, medical device and critical industries.",
  alternates: { canonical: "/industries" },
};
const industries = [
  [
    "01",
    "PRIMARY",
    "Healthcare",
    "Modular Operation Theatres, hospital cleanrooms, procedure rooms and laminar airflow systems for hygienic patient-care environments.",
    "/solutions/1 (6).png",
    "/solutions/modular-operation-theater-manufacturer",
  ],
  [
    "02",
    "SECONDARY",
    "Pharmaceutical & Medical Devices",
    "Controlled cleanrooms, sampling and dispensing areas, pass boxes and air showers for critical production processes.",
    "/solutions/1 (5).png",
    "/solutions/modular-clean-room-system-manufacturer",
  ],
  [
    "03",
    "OTHER",
    "Biotechnology, Electronics & Laboratories",
    "Flexible controlled environments for research, sensitive production, assembly and advanced laboratory applications.",
    "/solutions/1 (4).png",
    "/solutions/modular-clean-room-system-manufacturer",
  ],
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="industries-page" id="top">
        <section className="industries-page-hero">
          <div className="container">
            <p className="eyebrow eyebrow-light">INDUSTRIES WE SERVE / 05</p>
            <h1>
              Engineered for <span>critical environments.</span>
            </h1>
            <p>
              Airtec Solutions combines modular construction, HVAC, filtration
              and clean-air systems around the processes and people each
              industry supports.
            </p>
          </div>
        </section>
        <section className="industries-page-content section-pad">
          <div className="container">
            <div className="industries-page-intro">
              <p className="eyebrow">OUR INDUSTRY FOCUS</p>
              <h2>Solutions shaped around your application.</h2>
              <p>
                From surgical care to controlled manufacturing and research, our
                engineering team develops practical environments around required
                hygiene, airflow, pressure and cleanliness conditions.
              </p>
            </div>
            <div className="industries-page-grid">
              {industries.map(
                ([number, priority, title, copy, image, solution]) => (
                  <article
                    key={number}
                    className={`industry-page-card industry-page-${priority.toLowerCase()}`}
                  >
                    <div className="industry-page-image">
                      <Image
                        src={image}
                        alt={`${title} controlled environment solutions`}
                        fill
                        sizes="(max-width: 700px) 100vw, 33vw"
                      />
                    </div>
                    <div className="industry-page-copy">
                      <span>
                        {number} / {priority}
                      </span>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                      <Link href={solution}>Explore related solutions ↗</Link>
                    </div>
                  </article>
                ),
              )}
            </div>
            <div className="industries-page-cta">
              <h2>Planning a controlled environment?</h2>
              <Link className="button button-primary" href="/contact">
                Discuss your project <b>↗</b>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
