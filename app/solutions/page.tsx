import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { solutions } from "./data";

export const metadata: Metadata = {
  title: "Cleanroom & Modular OT Solutions | Airtec Solutions",
  description:
    "Explore Airtec Solutions modular operation theatres, modular cleanrooms, HVAC and HEPA filtration, laminar airflow, cleanroom equipment, panels and doors.",
  alternates: { canonical: "/solutions" },
};
const orderedSolutions = [solutions[0], solutions[1], solutions[5], solutions[2], solutions[3], solutions[4]];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="solutions-directory" id="top">
        <section className="solutions-directory-hero">
          <div className="container">
            <p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / 02</p>
            <h1>
              Engineered systems for <span>controlled environments.</span>
            </h1>
            <p>
              From modular operation theatres to cleanroom infrastructure,
              explore the systems that bring hygiene, airflow and process
              control together.
            </p>
          </div>
        </section>
        <section className="section-pad">
          <div className="container">
            <div className="solution-directory-intro">
              <p className="eyebrow">OUR CAPABILITIES</p>
              <h2>One partner for the complete environment.</h2>
              <p>
                Every Airtec solution can be planned as part of a coordinated
                turnkey project, from consultation and design through
                installation, commissioning and validation support.
              </p>
            </div>
            <div className="solution-directory-grid">
              {orderedSolutions.map((solution) => (
                <article
                  className="solution-directory-card"
                  key={solution.slug}
                >
                  <Link href={`/solutions/${solution.slug}`}>
                    <div>
                      <Image
                        src={solution.image}
                        alt={`${solution.title} by Airtec Solutions`}
                        fill
                        sizes="(max-width: 700px) 100vw, 33vw"
                      />
                    </div>
                    <span>{solution.number}</span>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                    <b>Explore solution ↗</b>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
