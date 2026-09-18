"use client";

import Image from "next/image";
import { useState } from "react";

const solutionSlides = [
  ["01", "Modular Operation Theatre", "Complete modular OT solutions designed for controlled, hygienic and efficient surgical environments.", "/solutions/1 (6).png", "Explore Modular OT"],
  ["02", "Modular Cleanroom", "Custom-designed cleanroom systems for controlled environments across healthcare and critical industries.", "/solutions/1 (5).png", "Explore Cleanrooms"],
  ["03", "Cleanroom Panels & Doors", "Engineered wall, ceiling, door and window systems for modular controlled environments.", "/solutions/1 (1).png", "View Panel Systems"],
  ["04", "HVAC & HEPA Filtration", "Air handling, filtration and airflow solutions designed around required environmental conditions.", "/solutions/1 (4).png", "Explore HVAC & Filtration"],
  ["05", "Laminar Airflow Systems", "Unidirectional airflow solutions for applications requiring controlled clean air.", "/solutions/1 (3).png", "Explore LAF"],
  ["06", "Cleanroom Equipment", "Pass Boxes, Air Showers, Sampling Booths, Dispensing Booths and other clean-air equipment.", "/solutions/1 (2).png", "View Products"],
] as const;

export default function SolutionsSlider() {
  const [active, setActive] = useState(0);
  const slide = solutionSlides[active];

  const move = (direction: number) => {
    setActive((current) => (current + direction + solutionSlides.length) % solutionSlides.length);
  };

  return (
    <section className="solutions-section solutions-slider-section section-pad" id="solutions">
      <div className="container">
        <div className="solutions-slider-heading">
          <div>
            <p className="eyebrow">WHAT WE DO / 02</p>
            <h2>Our Core <em>Solutions</em></h2>
          </div>
          <p className="section-copy">Integrated systems and specialist equipment for environments where performance, hygiene and control cannot be compromised.</p>
        </div>

        <div className="solutions-slider-shell">
          <div className="solutions-slider-visual">
            <Image src={slide[3]} alt={`${slide[1]} engineering solution`} fill priority={active === 0} sizes="(max-width: 800px) 100vw, 56vw" key={slide[3]} />
            <div className="solutions-slider-shade" />
            <div className="solutions-slider-index"><span>{slide[0]}</span><i /><small>06 / SOLUTIONS</small></div>
            <div className="solutions-slider-label">PRECISION ENGINEERED <b>↗</b></div>
          </div>
          <div className="solutions-slider-content" key={slide[0]}>
            <span className="solutions-slider-kicker">AIRTEC CAPABILITY</span>
            <h3>{slide[1]}</h3>
            <p>{slide[2]}</p>
            <a className="solutions-slider-link" href="#contact">{slide[4]} <b>↗</b></a>
            <div className="solutions-slider-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Previous solution">←</button>
              <div className="solutions-slider-progress"><span style={{ width: `${((active + 1) / solutionSlides.length) * 100}%` }} /></div>
              <button type="button" onClick={() => move(1)} aria-label="Next solution">→</button>
            </div>
          </div>
        </div>

        <div className="solutions-slider-dots" aria-label="Choose a solution">
          {solutionSlides.map(([number, title], index) => (
            <button key={number} type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Show ${title}`} aria-current={index === active ? "true" : undefined}>
              <span>{number}</span><b>{title}</b>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
