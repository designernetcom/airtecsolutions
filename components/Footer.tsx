import Link from "next/link";
import BrandLogo from "./BrandLogo";

const solutionItems = [
  ["Modular Operation Theatre", "/solutions/modular-operation-theater-manufacturer"],
  ["Modular Cleanroom", "/modular-clean-room"],
  ["Hospital Cleanroom", "/solutions/hospital-cleanroom"],
  ["Pharmaceutical Cleanroom", "/solutions/pharmaceutical-cleanroom"],
  ["Medical Device Cleanroom", "/solutions/medical-device-cleanroom"],
  ["Laboratory Cleanroom", "/solutions/laboratory-cleanroom"],
] as const;

const productColumns = [
  ["Modular Clean Room", "Cleanroom Panels", "HPL / PUF Panels", "HEPA Filters", "AHU", "Laminar Airflow", "Pass Box", "Air Shower", "Air Curtain"],
  ["Cleanroom Doors", "Cleanroom Windows", "Sampling Booth", "Dispensing Booth", "Cleanroom Flooring", "OT Control Panel", "OT Lights"],
] as const;

const companyItems = [
  ["About Us", "/about-us"],
  ["Projects", "/#projects"],
  ["Quality & Certifications", "/#quality"],
  ["Blog", "/#resources"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo logo-footer" href="/"><BrandLogo footer /></Link>
          <p>Modular OT &amp; Cleanroom Solutions<br />Designed • Supplied • Manufactured • Installed • Commissioned</p>
        </div>
        <div className="footer-column">
          <h3>Solutions</h3>
          {solutionItems.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
        </div>
        <div className="footer-column footer-products-column">
          <h3>Products</h3>
          <div className="footer-products-columns">
            {productColumns.map((items, index) => (
              <div key={index}>
                {items.map((item) => <Link href={item === "Modular Clean Room" ? "/modular-clean-room" : "/products"} key={item}>{item}</Link>)}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          {companyItems.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
        </div>
      </div>
      <div className="footer-contact-section">
        <div className="container footer-contact-inner">
          <div>
            <p className="eyebrow eyebrow-light">CONTACT AIRTEC SOLUTIONS</p>
            <h3>Let&apos;s discuss your project.</h3>
          </div>
          <div className="footer-contact-details">
            <span><b>Address:</b> S.No. 687, Sitaram Heights, Adinath Nagar, Near Ashirwad Gas Agency, Bhosari, Pune - 411039, Maharashtra, India</span>
            <span><b>Call:</b> <a href="tel:+918600321114">+91 8600321114</a> | <a href="tel:+918600321115">+91 8600321115</a></span>
            <span><b>Email:</b> <a href="mailto:sales@airtecsolutions.in">sales@airtecsolutions.in</a> | <a href="mailto:accounts@airtecsolutions.in">accounts@airtecsolutions.in</a></span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© Airtec Solutions. All Rights Reserved.</span>
        <span>Designed &amp; Developed by <a href="https://www.netcom-india.com/index.html" target="_blank" rel="noreferrer">Netcom Business Solutions Pvt Ltd</a></span>
      </div>
    </footer>
  );
}
