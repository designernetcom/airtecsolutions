import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsSlider from "@/components/SolutionsSlider";
import TurnkeySlider from "@/components/TurnkeySlider";
import Link from "next/link";

const photos = {
  hero: "/banners/1.png",
  about: "/about/about-up.png",
  ot: "/solutions/1 (1).png",
  cleanroom: "/solutions/1 (2).png",
  hvac: "/solutions/1 (3).png",
  industry: "/solutions/1 (5).png",
  lab: "/solutions/1 (6).png",
};
const solutions = [
  [
    "01",
    "Modular Operation Theatre",
    "Complete modular OT solutions designed for controlled, hygienic and efficient surgical environments.",
    "/solutions/1 (6).png",
    "Explore Modular OT",
  ],
  [
    "02",
    "Modular Cleanroom",
    "Custom-designed cleanroom systems for controlled environments across healthcare and critical industries.",
    "/solutions/1 (5).png",
    "Explore Cleanrooms",
  ],
  ["03", "Cleanroom Panels & Doors", "Engineered wall, ceiling, door and window systems for modular controlled environments.", "/solutions/1 (1).png", "View Panel Systems"],
  ["04", "HVAC & HEPA Filtration", "Air handling, filtration and airflow solutions designed around required environmental conditions.", "/solutions/1 (4).png", "Explore HVAC & Filtration"],
  ["05", "Laminar Airflow Systems", "Unidirectional airflow solutions for applications requiring controlled clean air.", "/solutions/1 (3).png", "Explore LAF"],
  ["06", "Cleanroom Equipment", "Pass Boxes, Air Showers, Sampling Booths, Dispensing Booths and other clean-air equipment.", "/solutions/1 (2).png", "View Products"],
];
const industries = [
  [
    "Hospitals & Healthcare",
    "Hygienic, controlled spaces for modern patient care.",
    "/solutions/1 (6).png",
  ],
  [
    "Pharmaceuticals",
    "Environmentally controlled manufacturing and compounding.",
    "https://www.alfalaval.rs/globalassets/blocks/industries/biotech-and-pharmaceuticals/pharma/medical_ampoule_production_line_at_pharmaceutical-_factory.jpg",
  ],
  [
    "Medical Devices",
    "Clean production environments for critical device assembly.",
    "https://cdn.expresshealthcare.in/wp-content/uploads/2020/02/13142921/medical-devices.jpg",
  ],
  [
    "Biotechnology",
    "Precision environments for advanced biological research.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReylZ_UORg6yEefapeqNGSnge7Rck8kPtSuGh5xYoiAuy_k7dqojApWYU&s=10",
  ],
  [
    "Electronics",
    "Low-contamination spaces for sensitive production.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCs9jgEZdK0Og1QBQWahzi4UejjwKkOlIFyXKEG-S9Pd9KIhHYYVU_NV0&s=10",
  ],
  [
    "Research & Laboratories",
    "Flexible, validated environments for discovery.",
    "https://heisenbergindia.com/wp-content/uploads/2022/08/research-and-development.jpg",
  ],
];
const industryGroups = [
  ["PRIMARY", "Healthcare", "Modular OT | Hospital Cleanroom | Procedure Room | LAF", "/solutions/1 (6).png"],
  ["SECONDARY", "Pharmaceutical & Medical Devices", "Cleanrooms | Sampling | Dispensing | Pass Boxes | Air Showers", "/solutions/1 (5).png"],
  ["OTHER", "Biotechnology / Electronics / Laboratories", "Controlled environments for research, sensitive production and advanced applications.", "/solutions/1 (4).png"],
];
const workflow = [
  "Consultation",
  "Site Assessment",
  "Engineering & Design",
  "Manufacturing",
  "Installation",
  "Testing & Commissioning",
  "Validation Support",
];
const featuredProjects = [
  ["Modular Operation Theatre – Pune", "Hospital | Modular OT | HVAC | HEPA | LAF", "/solutions/1 (6).png"],
  ["Pharmaceutical Cleanroom – Maharashtra", "Cleanroom | PUF/PIR Panels | AHU | HEPA | Validation Support", "/solutions/1 (5).png"],
  ["Medical Device Cleanroom – India", "ISO Classified Environment | Modular Panels | HVAC", "/solutions/1 (4).png"],
];
const technicalCapabilities = [
  ["01", "Modular Construction", "PUF | PIR | HPL | PPGI | GI | SS 304"],
  ["02", "HVAC", "AHU | Fresh Air | Return Air | Exhaust | Pressure Control"],
  ["03", "Filtration", "Pre-Filters | Fine Filters | HEPA H13/H14"],
  ["04", "Airflow", "LAF | Unidirectional Airflow | Air Changes | Pressure Cascade"],
  ["05", "Controlled Environment", "Temperature | Humidity | Differential Pressure | Cleanliness"],
  ["06", "Documentation", "GA Drawings | Specifications | Test Reports | O&M Manuals"],
];
const whyAirtec = [
  ["01", "In-House Manufacturing", "Manufacturing capabilities for modular panels, doors and cleanroom components."],
  ["02", "Complete Turnkey Solutions", "From concept, design and manufacturing to installation and commissioning."],
  ["03", "Customized Engineering", "Solutions developed around room size, process requirements, airflow and environmental conditions."],
  ["04", "Integrated HVAC & Filtration", "AHU, HEPA, LAF and airflow systems can be coordinated as part of the project."],
  ["05", "Technical Documentation", "GA drawings, specifications, equipment datasheets, test reports and applicable project documentation."],
  ["06", "After-Sales Support", "Service and AMC support for applicable installations."],
];
function Intro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero hero-modern">
          <Image
            src="/banners/1.png"
            alt="Modern controlled healthcare environment"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="hero-grid-lines" />
          <div className="hero-side-label">
            AIRTEC / 01 <span>ENGINEERED ENVIRONMENTS</span>
          </div>
          <div className="container hero-content">
            <div className="hero-copy-block">
              <div className="hero-kicker">
                <span className="kicker-dot" /> MODULAR OT & CLEANROOM SOLUTIONS
              </div>
              <h1>
                Modular OT &amp; Cleanroom Solutions
                <span>Engineered, Manufactured &amp; Installed for Critical Environments</span>
              </h1>
              <p className="hero-copy">
                Airtec Solutions designs, manufactures and installs{" "}
                <strong>
                  Modular Operation Theatres, Modular Cleanrooms, HVAC &amp; HEPA
                  Filtration Systems and Clean Air Equipment
                </strong>{" "}
                for healthcare and critical industries.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Request a Quote <b>↗</b>
                </a>
                <a className="button button-ghost" href="#projects">
                  Featured Projects <b>→</b>
                </a>
              </div>
            </div>
            <div className="hero-engineering-card">
              <div className="engineering-card-top">
                <span>01 / 04</span>
                <span>TURNKEY CAPABILITY</span>
              </div>
              <div className="engineering-orbit">
                <span>
                  CONTROLLED
                  <br />
                  ENVIRONMENT
                </span>
                <i />
                <i />
                <i />
              </div>
              <div className="engineering-card-bottom">
                <b>
                  Designed. Manufactured.
                  <br />
                  Installed. Commissioned.
                </b>
                <small>Validation Support Available as per Project Requirements</small>
                <small>
                  Concept → Design → Manufacturing → Installation →
                  Commissioning → Validation
                </small>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <div>
              <span className="hero-bottom-label">PRECISION ENGINEERING</span>
              <span className="hero-bottom-line" />
            </div>
            <div className="hero-sequence">
              <span>DESIGNED</span>
              <i />
              <span>MANUFACTURED</span>
              <i />
              <span>INSTALLED</span>
              <i />
              <span>COMMISSIONED</span>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="container">
            <div className="stats-heading stats-heading-modern">
              <div>
                <p className="eyebrow">THE AIRTEC STANDARD</p>
                <h2>Engineering Clean Environments with Precision</h2>
              </div>
              <div className="stats-intro-mark">
                <span>FIELD</span>
                <strong>01</strong>
                <i />
              </div>
            </div>
            <div className="stats-grid stats-grid-modern">
              {/* TODO: Replace placeholder statistics with verified Airtec Solutions data before production. */}
              {[
                ["15+", "Years Experience"],
                ["500+", "Projects / Customers"],
                ["20+", "Technical Team"],
                ["Pan India", "Installation & Service"],
                ["Turnkey", "Engineering Solutions"],
              ].map(([value, label], index) => (
                <div
                  className="stat stat-modern"
                  key={label}
                  style={{ "--stat-index": index } as React.CSSProperties}
                >
                  <div className="stat-meta">
                    <span>0{index + 1}</span>
                    <i />
                  </div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                  <b className="stat-arrow">↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="about-section container section-pad" id="about">
          <div className="about-visual about-visual-premium">
            <div className="about-image-frame">
              <Image
                src={photos.about}
                alt="Engineering team working in a controlled environment"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <div className="about-visual-meta">
              <span>01</span>
              <b>
                ENGINEERED
                <br />
                FOR CONTROL
              </b>
              <i />
            </div>
            <div className="about-stamp">
              <span>EST.</span>
                <strong>2011</strong>
              <small>PUNE · INDIA</small>
            </div>
            <div className="about-image-caption">
              TURNKEY ENVIRONMENTS <b>↗</b>
            </div>
          </div>
          <div className="about-content about-content-premium">
            <Intro
              eyebrow="ABOUT AIRTEC SOLUTIONS"
              title="Your Partner for Modular OT & Cleanroom Engineering"
            />
            <p className="about-lead">
              Airtec Solutions is a Pune-based manufacturer and turnkey solution
              provider specializing in{" "}
              <strong>
                Modular Operation Theatres, Modular Cleanrooms, Clean Air
                Systems and associated HVAC and filtration solutions.
              </strong>
            </p>
            <p>
              We provide complete project solutions from{" "}
              <strong>
                concept and design to manufacturing, installation, commissioning
                and validation support.
              </strong>
            </p>
            <p>
              Our solutions are engineered around each project, considering
              classification, airflow, temperature, humidity, pressure
              differential, filtration, material selection, hygiene and
              operational needs.
            </p>
            <a className="text-link" href="#about">
              About Airtec Solutions <b>↗</b>
            </a>
            <div
              className="about-highlights"
              aria-label="Airtec Solutions capabilities"
            >
              {[
                [
                  "01",
                  "Complete turnkey delivery",
                  "From first brief to final validation, one accountable engineering partner.",
                ],
                [
                  "02",
                  "Built around your process",
                  "Every environment is shaped around hygiene, airflow and operational needs.",
                ],
                [
                  "03",
                  "Precision that performs",
                  "Thoughtful materials, disciplined installation and dependable commissioning.",
                ],
              ].map(([number, title, copy]) => (
                <article className="about-highlight" key={title} tabIndex={0}>
                  <span className="about-highlight-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <b className="about-highlight-arrow">↗</b>
                </article>
              ))}
            </div>
          </div>
        </section>
        <SolutionsSlider />
        <section className="about-technical-section section-pad" id="technical-capabilities"><div className="container"><div className="about-section-heading-row"><div><p className="eyebrow">TECHNICAL CAPABILITIES</p><h2>Built around <em>control.</em></h2></div><p>Our engineering scope brings the building envelope, air systems, filtration and project documentation together around each controlled environment.</p></div><div className="technical-capabilities-grid">{technicalCapabilities.map(([number, title, details]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{details}</p></div></article>)}</div></div></section>
        <section className="about-why-section section-pad" id="why-airtec"><div className="container"><div className="about-section-heading-row"><div><p className="eyebrow">WHY AIRTEC</p><h2>Why Choose <em>Airtec Solutions?</em></h2></div><p>A complete engineering partner for controlled environments, from the first project brief to ongoing support.</p></div><div className="about-reasons-grid">{whyAirtec.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
        <section className="projects-section featured-projects section-pad" id="projects">
          <div className="container">
            <div className="featured-projects-heading"><div><p className="eyebrow">SELECTED WORK / 03</p><h2>Featured <em>Projects</em></h2></div><div><p>Controlled environments delivered for healthcare, pharmaceutical and medical device applications.</p><a className="featured-projects-link" href="/#contact">View All Projects →</a></div></div>
            <div className="featured-projects-grid">{featuredProjects.map(([title, details, image]) => <article className="featured-project" key={title}><div className="featured-project-image"><Image src={image} alt={`${title} by Airtec Solutions`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="featured-project-copy"><h3>{title}</h3><p>{details}</p><span>Airtec Solutions ↗</span></div></article>)}</div>
          </div>
        </section>
        <section className="legacy-solutions-section solutions-section solutions-premium section-pad" id="legacy-solutions">
          <div className="container">
            <Intro
              eyebrow="WHAT WE DO"
              title="Our Core Solutions"
              copy="Integrated systems and specialist equipment for environments where performance, hygiene and control cannot be compromised."
            />
            <div className="solution-grid">
              {solutions.map(([num, title, copy, image, cta], index) => (
                <article className={`solution-card solution-card-${index + 1}`} key={title}>
                  <div className="card-image">
                    <Image
                      src={image}
                      alt={`${title} engineering solution`}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </div>
                  <div className="card-body">
                    <span className="card-number">{num}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <Link href={`/solutions/${["modular-operation-theater-manufacturer", "modular-clean-room-system-manufacturer", "hvac-hepa-filtration", "laminar-airflow-systems", "cleanroom-equipment", "cleanroom-panels-doors"][index]}`}>
                      {cta} <b>↗</b>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <TurnkeySlider />
        <section className="legacy-process-section process-section section-pad">
          <div className="container">
            <Intro
              eyebrow="TURNKEY ENGINEERING"
              title="Your Single-Point Partner for Modular OT & Cleanroom Solutions"
              copy="A disciplined workflow helps every system move from brief to operational environment with clarity and accountability."
            />
            <div className="process-grid">
              {workflow.map((item, i) => (
                <div className="process-step" key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <b>{item}</b>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="industries-section section-pad" id="industries">
          <div className="container">
            <Intro
              eyebrow="INDUSTRIES WE SERVE"
              title="Engineered for Critical Environments"
            />
            <div className="industry-priority-grid">{industryGroups.map(([priority, title, copy, image]) => <article className={`industry-priority-card industry-priority-${priority.toLowerCase()}`} key={priority}><div className="industry-priority-image"><Image src={image} alt={`${title} controlled environment solutions`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="industry-priority-copy"><span>{priority}</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
            <div className="industry-grid">
              {industries.map(([title, copy, image]) => (
                <article className="industry-card" key={title}>
                  <Image
                    src={image}
                    alt={`${title} controlled environment`}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <div className="industry-overlay">
                    <span className="industry-icon">＋</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <a href="#industries">
                      Explore <b>→</b>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="origin-cta-section section-pad"><div className="container"><p className="eyebrow eyebrow-light">AIRTEC SOLUTIONS / PAN INDIA</p><h2>Manufactured in Pune.<br /><em>Installed Across India.</em></h2><p>Planning a new OT or cleanroom? Share your requirement with our engineering team.</p><a className="button button-primary" href="/contact">Request a Technical &amp; Commercial Proposal <b>↗</b></a></div></section> */}
      
      </main>
      <Footer />
    </>
  );
}
