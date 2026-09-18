import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Airtec Solutions | Cleanroom & Modular OT Engineering",
  description: "Meet Airtec Solutions. Established in Pune in 2011, we design, manufacture and install modular operation theatres, cleanrooms and clean-air systems.",
  alternates: { canonical: "/about-us" },
};

const expertise = [
  { title: "Modular operation theatres", copy: "Thoughtfully planned environments for the people delivering critical care.", image: "/solutions/1 (6).png", slug: "modular-operation-theater-manufacturer", label: "HEALTHCARE ENVIRONMENTS" },
  { title: "Modular cleanrooms", copy: "Integrated spaces that bring process, people and contamination control together.", image: "/solutions/1 (5).png", slug: "modular-clean-room-system-manufacturer", label: "CONTROLLED ENVIRONMENTS" },
  { title: "Clean air & filtration", copy: "Purpose-built HVAC, HEPA filtration and equipment for sensitive operations.", image: "/solutions/1 (4).png", slug: "hvac-hepa-filtration", label: "AIR ENGINEERING" },
];
const process = [
  ["Understand", "We start with your application, workflow and the conditions your facility needs."],
  ["Engineer", "We coordinate room design, materials and air systems around your requirements."],
  ["Execute", "Manufacturing and installation come together through a clear project plan."],
  ["Support", "Testing, handover and responsive service help keep your environment dependable."],
];
const values = [
  ["Quality in every detail", "From raw material selection to the finished installation, consistency guides our decisions."],
  ["Engineering with purpose", "Every system starts with a real requirement and a sound technical response."],
  ["Reliability for the long run", "We design with performance, maintenance and everyday operation in mind."],
  ["Your requirements first", "We listen, collaborate and build around the way your facility works."],
  ["Always moving forward", "We keep improving our products, processes and project execution."],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}</svg>;
}
function Mark({ kind }: { kind: "target" | "spark" }) {
  return <svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">{kind === "target" ? <><circle cx="20" cy="20" r="14" /><circle cx="20" cy="20" r="8" /><circle cx="20" cy="20" r="2" /><path d="M20 1v5m0 28v5M1 20h5m28 0h5" /></> : <><path d="m20 2 4.5 13.5L38 20l-13.5 4.5L20 38l-4.5-13.5L2 20l13.5-4.5L20 2Z" /><path d="m7 7 6 6m14 14 6 6M7 33l6-6M27 13l6-6" /></>}</svg>;
}

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className={styles.page} id="top">
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About us</span></nav>
              <p className={styles.eyebrow}><span className={styles.dot} /> PRECISION. PURPOSE. PEOPLE.</p>
              <h1 id="about-title">Better spaces.<br />Cleaner air.<br /><span>Greater possibilities.</span></h1>
              <p className={styles.heroDescription}>We engineer controlled environments that help people do extraordinary things. Built with precision. Backed by a partner who cares.</p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/contact">Let’s build together <Arrow diagonal /></Link>
                <a className={styles.storyLink} href="#our-story">Discover our story <span aria-hidden="true">↓</span></a>
              </div>
              <div className={styles.heroFootnote}><span className={styles.smallCross} aria-hidden="true">+</span> ENGINEERED IN PUNE. BUILT AROUND YOU.</div>
            </div>
            <div className={styles.heroVisual}>
              <Image src="/solutions/1 (5).png" alt="A cleanroom with glass partitions, integrated filtration and protected work areas" fill loading="eager" fetchPriority="high" sizes="(max-width: 800px) 100vw, 50vw" />
              <div className={styles.imageTopline}><span><i /> CONTROLLED BY DESIGN</span><span>01 / AIRTEC</span></div>
              <div className={styles.imageCaption}><span>Precision you can see.<br /><strong>Confidence you can build on.</strong></span><span className={styles.imageCross} aria-hidden="true">+</span></div>
              <div className={styles.foundedBadge}><span>OUR JOURNEY BEGAN</span><strong>2011<span aria-hidden="true">↗</span></strong><span>PUNE, MAHARASHTRA</span></div>
            </div>
          </div>
        </section>
        <div className={styles.factsStrip}>
          <dl className={`${styles.container} ${styles.factsGrid}`}>
            <div><dt>Since 2011</dt><dd>A foundation of experience</dd></div>
            <div><dt>End-to-end</dt><dd>Design through delivery</dd></div>
            <div><dt>Built for you</dt><dd>Application-led solutions</dd></div>
            <div><dt>One partner</dt><dd>Accountability at every step</dd></div>
          </dl>
        </div>
        <section className={`${styles.section} ${styles.story}`} id="our-story" aria-labelledby="story-title">
          <div className={`${styles.container} ${styles.storyGrid}`}>
            <div className={styles.storyVisual}>
              <div className={styles.storyImage}><Image src="/solutions/1 (6).png" alt="Modular operation theatre with coordinated ceiling, lighting and air systems" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
              <div className={styles.storyImageNote}><span className={styles.dot} /> THE DETAILS MAKE THE DIFFERENCE.</div>
              <div className={styles.storySeal}><Mark kind="target" /><span>Purpose-built.<br /><strong>People-focused.</strong></span></div>
            </div>
            <div className={styles.storyCopy}>
              <p className={styles.eyebrow}>01 / THE AIRTEC STORY</p>
              <h2 id="story-title">Behind every critical space,<br /><span>a committed partner.</span></h2>
              <p className={styles.lead}>Better environments begin with a better understanding of what happens inside them.</p>
              <p>Established in Pune, Maharashtra, in 2011, Airtec Solutions brings together engineering, manufacturing and project execution to create cleaner, safer and more controlled environments.</p>
              <p>From modular operation theatres and cleanrooms to HVAC, HEPA filtration and clean-air equipment, we build around the functional and technical needs of your facility. Every material, interface and installation detail has a role to play.</p>
              <div className={styles.storyPrinciple}><span aria-hidden="true">↗</span><p>Our commitment is simple.<br /><strong>Get the details right. Stand behind the work.</strong></p></div>
            </div>
          </div>
        </section>
        <section className={styles.purpose} aria-labelledby="purpose-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / WHAT DRIVES US</p><h2 id="purpose-title">A clear purpose.<br /><span>A shared direction.</span></h2></div><p>Because the spaces we create support work that matters.</p></div>
            <div className={styles.purposeGrid}>
              <article className={styles.missionCard}><div className={styles.cardTop}><Mark kind="target" /><span>OUR MISSION</span></div><h3>Precision in our work.<br />Confidence in yours.</h3><p>To provide reliable, technically sound and cost-effective controlled-environment solutions through engineering excellence, quality manufacturing and professional project execution.</p><span className={styles.cardBottom}>BUILT ON SOUND ENGINEERING <Arrow diagonal /></span></article>
              <article className={styles.visionCard}><div className={styles.cardTop}><Mark kind="spark" /><span>OUR VISION</span></div><h3>A trusted partner.<br />A cleaner tomorrow.</h3><p>To become a trusted Indian engineering partner for modular operation theatres, cleanrooms and clean-air solutions, supporting the facilities that move healthcare and industry forward.</p><span className={styles.cardBottom}>LOOKING AHEAD, TOGETHER <Arrow diagonal /></span></article>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.expertise}`} aria-labelledby="expertise-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>03 / OUR EXPERTISE</p><h2 id="expertise-title">Different spaces.<br /><span>The same attention to detail.</span></h2></div><Link className={styles.textLink} href="/solutions">Explore all solutions <Arrow diagonal /></Link></div>
            <div className={styles.expertiseGrid}>{expertise.map((item, index) => <Link className={styles.expertiseCard} href={`/solutions/${item.slug}`} key={item.slug}><div className={styles.expertiseImage}><Image src={item.image} alt={item.title} fill sizes="(max-width: 520px) 100vw, (max-width: 800px) 50vw, 33vw" /><span>0{index + 1}</span><span className={styles.cardArrow}><Arrow diagonal /></span></div><div className={styles.expertiseCopy}><span>{item.label}</span><h3>{item.title}</h3><p>{item.copy}</p></div></Link>)}</div>
            <div className={styles.industryRow}><span>SUPPORTING CRITICAL INDUSTRIES</span><p>Healthcare <i /> Pharmaceuticals <i /> Biotechnology <i /> Medical devices <i /> Research</p><Link href="/industries" aria-label="Explore the industries we serve"><Arrow /></Link></div>
          </div>
        </section>
        <section className={styles.process} aria-labelledby="process-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>04 / THE WAY WE WORK</p><h2 id="process-title">From the first conversation<br /><span>to the final detail.</span></h2></div><p>A connected approach that keeps your requirements at the centre, at every stage.</p></div>
            <ol className={styles.processGrid}>{process.map(([title, copy], index) => <li key={title}><div className={styles.processNumber}><span>0{index + 1}</span><Arrow /></div><h3>{title}</h3><p>{copy}</p></li>)}</ol>
          </div>
        </section>
        <section className={`${styles.section} ${styles.values}`} aria-labelledby="values-title">
          <div className={`${styles.container} ${styles.valuesGrid}`}>
            <div className={styles.valuesIntro}><p className={styles.eyebrow}>05 / OUR VALUES</p><h2 id="values-title">What we stand for.<br /><span>What you can count on.</span></h2><p>Strong partnerships are built on more than systems. They’re built on the principles behind them.</p><div className={styles.valuesArtwork} aria-hidden="true"><div /><div /><div /><span>QUALITY<br /><strong>by design.</strong></span></div></div>
            <div className={styles.valuesList}>{values.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><span className={styles.valueCheck} aria-hidden="true">✓</span></article>)}</div>
          </div>
        </section>
        <section className={styles.cta} aria-labelledby="cta-title"><div className={`${styles.container} ${styles.ctaInner}`}><div><p className={styles.eyebrow}>YOUR NEXT SPACE STARTS HERE</p><h2 id="cta-title">Let’s make room<br />for <span>better possibilities.</span></h2><p>Tell us what you’re planning. We’ll help bring it together.</p></div><div className={styles.ctaActions}><Link className={styles.primaryButton} href="/contact">Discuss your project <Arrow diagonal /></Link><a href="mailto:sales@airtecsolutions.in">sales@airtecsolutions.in <Arrow /></a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
