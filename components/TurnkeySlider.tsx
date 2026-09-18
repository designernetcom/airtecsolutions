const stages = [
  ["01", "Consultation", "We understand your process, performance requirements and project priorities before any design work begins."],
  ["02", "Site Assessment", "Our team studies the site, services, workflow and installation conditions to define a practical project brief."],
  ["03", "Engineering & Design", "Every detail is developed around airflow, hygiene, classification, pressure, temperature and operational needs."],
  ["04", "Manufacturing", "Precision-built panels, systems and equipment are produced with consistency, quality and traceability."],
  ["05", "Installation", "Experienced teams bring the design to life with disciplined coordination and minimal site disruption."],
  ["06", "Testing & Commissioning", "Systems are tested, balanced and commissioned so the environment performs as engineered."],
  ["07", "Validation Support", "Clear documentation and validation support help your facility move confidently into operation."],
] as const;

export default function TurnkeySlider() {
  return (
    <section className="process-section turnkey-timeline-section section-pad" id="turnkey">
      <div className="container">
        <div className="turnkey-heading">
          <div>
            <p className="eyebrow eyebrow-light">TURNKEY ENGINEERING / 03</p>
            <h2><em>Your Single-Point Partner for Modular OT &amp; Cleanroom Solutions</em></h2>
          </div>
          <p className="section-copy">A disciplined workflow helps every system move from brief to operational environment with clarity and accountability.</p>
        </div>

        <div className="turnkey-timeline" aria-label="Project delivery workflow">
          {stages.map(([number, title, copy], index) => (
            <article className={`turnkey-timeline-item ${index % 2 ? "is-right" : "is-left"}`} key={number}>
              <div className="turnkey-timeline-marker"><span>{number}</span></div>
              <div className="turnkey-timeline-card">
                <span className="turnkey-kicker">STAGE {number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <b className="turnkey-timeline-arrow">↗</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
