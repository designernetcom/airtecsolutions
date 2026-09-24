import BrandLogo from "./BrandLogo";

const columns = [
  [
    "Solutions",
    [
      "Modular Operation Theatre",
      "Modular Cleanroom",
      "Hospital Cleanroom",
      "Pharmaceutical Cleanroom",
      "Medical Device Cleanroom",
      "Laboratory Cleanroom",
    ],
  ],
  [
    "Products",
    [
      "Cleanroom Panels",
      "HPL / PUF Panels",
      "HEPA Filters",
      "AHU",
      "Laminar Airflow",
      "Pass Box",
      "Air Shower",
      "Sampling Booth",
      "Cleanroom Doors",
      "Cleanroom Windows",
    ],
  ],
  [
    "Company",
    [
      ["About Us", "/about-us"],
      ["Projects", "/#projects"],
      ["Quality & Certifications", "/#quality"],
      ["Blog", "/#resources"],
      ["Contact", "/contact"],
    ],
  ],
] as const;
const solutionHrefs = [
  "/solutions/modular-operation-theater-manufacturer",
  "/modular-clean-room",
  "/solutions/hospital-cleanroom",
  "/solutions/pharmaceutical-cleanroom",
  "/solutions/medical-device-cleanroom",
  "/solutions/laboratory-cleanroom",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="logo logo-footer" href="/">
            <BrandLogo footer />
          </a>
          <p>
            Modular OT &amp; Cleanroom Solutions
            <br />
            Designed • Manufactured • Installed • Commisioned
          </p>
        </div>
        {columns.map(([heading, items], columnIndex) => (
          <div className="footer-column" key={heading}>
            <h3>{heading}</h3>
            {items.map((item, index) => {
              const label = Array.isArray(item) ? item[0] : item;
              const href = Array.isArray(item)
                ? item[1]
                : columnIndex === 0
                  ? solutionHrefs[index]
                  : "/solutions";
              return (
                <a href={href} key={label}>
                  {label}
                </a>
              );
            })}
          </div>
        ))}
      </div>
      <div className="footer-contact-section">
        <div className="container footer-contact-inner">
          <div>
            <p className="eyebrow eyebrow-light">CONTACT AIRTEC SOLUTIONS</p>
            <h3>Let&apos;s discuss your project.</h3>
          </div>
          <div className="footer-contact-details">
            <span>
              ⌖ S.No.687, Sitaram Heights, Adinath Nagar, Near Ashirwad Gas
              Agency, Bhosari, Pune 411039, Maharashtra, India
            </span>
            <span>
              <b>Call:</b> <a href="tel:+918600321114">+91 8600321114</a> ·{" "}
              <a href="tel:+918600321115">+91 8600321115</a>
            </span>
            <span>
              <b>Email:</b>{" "}
              <a href="mailto:sales@airtecsolutions.in">
                sales@airtecsolutions.in
              </a>{" "}
              ·{" "}
              <a href="mailto:accounts@airtecsolutions.in">
                accounts@airtecsolutions.in
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© Airtec Solutions. All Rights Reserved.</span>
        <span>
          Designed &amp; Developed by{" "}
          <a
            href="https://www.netcom-india.com/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Netcom Business Solutions Pvt Ltd
          </a>
        </span>
      </div>
    </footer>
  );
}
