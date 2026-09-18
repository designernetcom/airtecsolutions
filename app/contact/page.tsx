import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Airtec Solutions | Modular OT & Cleanroom Enquiry",
  description: "Discuss your Modular OT, cleanroom, HVAC, HEPA filtration or clean-air equipment project with Airtec Solutions in Pune.",
  alternates: { canonical: "/contact" },
};

const projectTypes = ["Modular Operation Theatre", "Modular Cleanroom", "Pharmaceutical Cleanroom", "Medical Device Cleanroom", "HPL / PUF Cleanroom Panel", "HVAC / AHU", "HEPA Filtration", "Laminar Airflow", "Pass Box", "Air Shower", "Sampling Booth", "Cleanroom Door", "Cleanroom Window", "AMC / Service", "Other"];

export default function ContactPage() {
  return <><Header /><main className="contact-page" id="top">
    <section className="contact-hero"><div className="container"><p className="eyebrow eyebrow-light">CONTACT AIRTEC SOLUTIONS / 06</p><h1>Let&apos;s discuss <span>your project.</span></h1><p>Tell us what you need and our engineering team will help you develop the right controlled-environment solution.</p></div></section>
    <section className="contact-main section-pad"><div className="container contact-layout"><div className="contact-intro"><p className="eyebrow">TELL US WHAT YOU NEED</p><h2>Build the right environment for the work it supports.</h2><p>Whether you are planning a new Modular OT, cleanroom, pharmaceutical facility, medical device manufacturing area or clean-air system, our engineering team can help you develop the right solution.</p><div className="contact-details"><h3>Airtec Solutions</h3><p>S.No.687, Sitaram Heights, Adinath Nagar,<br />Near Ashirwad Gas Agency, Bhosari,<br />Pune 411039, Maharashtra, India</p><a href="tel:+918600321114">+91 8600321114</a><a href="tel:+918600321115">+91 8600321115</a><a href="mailto:sales@airtecsolutions.in">sales@airtecsolutions.in</a><a href="mailto:accounts@airtecsolutions.in">accounts@airtecsolutions.in</a></div></div>
      <form className="contact-form" action="mailto:sales@airtecsolutions.in" method="post" encType="text/plain"><h2>Project enquiry</h2><div className="contact-form-grid"><label>Name *<input name="name" required /></label><label>Company / Hospital *<input name="company" required /></label><label>Mobile Number *<input name="mobile" type="tel" required /></label><label>Email Address *<input name="email" type="email" required /></label><label>City / Location *<input name="location" required /></label><label>Project Type *<select name="projectType" required><option value="">Select project type</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label><label>Required Area<input name="area" placeholder="e.g. 2,000 sq. ft." /></label><label>Project Stage<select name="stage" defaultValue=""><option value="">Select stage</option><option>Planning</option><option>Design</option><option>Under construction</option><option>Expansion / renovation</option></select></label><label>Expected Completion<input name="completion" placeholder="Month / year" /></label><label>Upload Drawing / BOQ<input name="attachment" type="file" /></label></div><label>Your Requirement<textarea name="requirement" rows={5} placeholder="Tell us about your project, process or technical requirements" /></label><button className="button button-primary" type="submit">Send project enquiry <b>↗</b></button><a className="contact-whatsapp" href="https://wa.me/918600321114" target="_blank" rel="noreferrer">WhatsApp our engineer <b>↗</b></a></form>
    </div></section>
    <section className="contact-types section-pad"><div className="container"><p className="eyebrow">PROJECT TYPES</p><h2>Select your requirement.</h2><div className="contact-type-list">{projectTypes.map((type) => <label key={type}><input type="checkbox" name="requirements" value={type} /> <span>{type}</span></label>)}</div></div></section>
  </main><Footer /></>;
}
