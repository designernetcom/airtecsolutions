"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

const solutionPages = [
  ["Modular Operation Theatre", "/solutions/modular-operation-theater-manufacturer"],
  ["Modular Cleanroom", "/modular-clean-room"],
  ["Hospital Cleanroom", "/solutions/hospital-cleanroom"],
  ["Pharmaceutical Cleanroom", "/solutions/pharmaceutical-cleanroom"],
  ["Medical Device Cleanroom", "/solutions/medical-device-cleanroom"],
  ["Laboratory Cleanroom", "/solutions/laboratory-cleanroom"],
] as const;

const operationPages = [
  ["Modular Operation Theater", "modular-operation-theater-manufacturer"],
  ["Softwall Operation Theater", "softwall-operation-theater"],
  ["Semi Modular Operation Theater", "semi-modular-operation-theater-manufacturer"],
  ["Prefabricated Operation Theater", "prefabricated-operation-theater"],
  ["Seamless Operation Theater", "seamless-operation-theater"],
  ["Stainless Steel Operation Theater", "stainless-steel-operation-theater"],
  ["PU Wall Operation Theater", "pu-wall-operation-theater"],
  ["Hardwall Operation Theater", "hardwall-operation-theater"],
] as const;

const productPages = [
  ["Cleanroom Panels", "cleanroom-panels"], ["HPL / PUF Panels", "hpl-puf-panels"],
  ["HEPA Filter", "hepa-filter"], ["AHU", "ahu"], ["Laminar Airflow", "laminar-airflow"],
  ["Positive Pressure Unit", "pressure-module-manufacturer"],
  ["Pass Box", "pass-box"], ["Air Shower", "air-shower"], ["Air Curtain", "air-curtain"],
  ["Cleanroom Doors", "cleanroom-doors"], ["Cleanroom Windows", "cleanroom-windows"],
  ["Cleanroom Flooring", "cleanroom-flooring"], ["Sampling Booth", "sampling-booth"],
  ["Dispensing Booth", "dispensing-booth"], ["OT Control Panel", "ot-control-panel"],
  ["OT Lights", "ot-lights"],
] as const;

type NavItem = {
  label: string;
  href: string;
  children?: readonly (readonly [string, string])[];
};

const nav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Solutions", href: "/solutions", children: solutionPages },
  { label: "Operation Theaters", href: "/solutions/modular-operation-theater-manufacturer", children: operationPages },
  { label: "Products", href: "/products", children: productPages },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="logo" href="/" aria-label="Airtec Solutions home"><BrandLogo /></Link>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => { setOpen(!open); if (open) setMobileDropdown(null); }}>
          <span /><span /><span />
        </button>
        <nav className={`main-nav ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <div className={`nav-item ${mobileDropdown === item.label ? "mobile-dropdown-open" : ""}`} key={item.label}>
                <Link
                  href={item.href}
                  className={mobileDropdown === item.label ? "mobile-dropdown-open" : ""}
                  onClick={(event) => {
                    if (item.children && window.matchMedia("(max-width: 800px)").matches) {
                      event.preventDefault();
                      setMobileDropdown((current) => current === item.label ? null : item.label);
                      return;
                    }
                    setOpen(false);
                    setMobileDropdown(null);
                  }}
                  aria-expanded={item.children ? mobileDropdown === item.label : undefined}
                >
                {item.label}{item.children && <span className="chevron">⌄</span>}
              </Link>
              {item.children && (
                <div className={`dropdown ${item.label.toLowerCase().replace(/\s+/g, "-")}-dropdown`}>
                  {item.children.map(([label, slug]) => (
                    <div className="dropdown-item-wrapper" key={label}>
                      <Link
                        href={item.label === "Solutions" ? slug : item.label === "Operation Theaters" ? `/solutions/${slug}` : slug === "pressure-module-manufacturer" ? "/pressure-module-manufacturer" : `/products/${slug}`}
                        onClick={() => { setOpen(false); setMobileDropdown(null); }}
                      >
                        {label}<b>↗</b>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mobile-actions"><Link className="button button-dark" href="/#contact">Request a Quote</Link></div>
        </nav>
        <div className="header-actions"><Link className="header-quote" href="/#contact">Request a Quote <b>↗</b></Link></div>
      </div>
    </header>
  );
}
