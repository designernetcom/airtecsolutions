"use client";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
const solutionSlugs = [
  "modular-operation-theater-manufacturer",
  "modular-clean-room-system-manufacturer",
  "cleanroom-panels-doors",
  "hvac-hepa-filtration",
  "laminar-airflow-systems",
  "cleanroom-equipment",
  "laminar-workstation-manufacturer",
  "pressure-module-in-pune",
  "aluminium-coving",
  "clean-air-system-manufacturer",
  "softwall-operation-theater",
  "semi-modular-operation-theater-manufacturer",
  "sterilized-operation-theater-manufacturer",
  "prefabricated-operation-theater",
  "seamless-operation-theater",
  "stainless-steel-operation-theater",
  "pu-wall-operation-theater",
  "hardwall-operation-theater",
  "single-operation-theater",
];
const solutionNames = [
  "Modular Operation Theatre",
  "Modular Cleanroom",
  "Cleanroom Panels & Doors",
  "HVAC & HEPA Filtration",
  "Laminar Airflow Systems",
  "Cleanroom Equipment",
  "Laminar Flow Workstation",
  "Positive Pressure Module",
  "Aluminium Covings",
  "Clean Air System / Air Shower",
  "Softwall Operation Theater",
  "Semi Modular Operation Theater",
  "Sterilized Operation Theater Manufacturer",
  "Prefabricated Operation Theater",
  "Seamless Operation Theater",
  "Stainless Steel Operation Theater",
  "PU Wall Operation Theater",
  "Hardwall Operation Theater",
  "Operation Theater",
];
const operationSlugs = [
  "modular-operation-theater-manufacturer",
  "softwall-operation-theater",
  "semi-modular-operation-theater-manufacturer",
  "sterilized-operation-theater-manufacturer",
  "prefabricated-operation-theater",
  "seamless-operation-theater",
  "stainless-steel-operation-theater",
  "pu-wall-operation-theater",
  "hardwall-operation-theater",
  "single-operation-theater",
];
const operationNames = [
  "Modular Operation Theatre",
  "Softwall Operation Theater",
  "Semi Modular Operation Theater",
  "Sterilized Operation Theater",
  "Prefabricated Operation Theater",
  "Seamless Operation Theater",
  "Stainless Steel Operation Theater",
  "PU Wall Operation Theater",
  "Hardwall Operation Theater",
  "Operation Theater",
];
const productSlugs = [
  "cleanroom-panels",
  "hpl-puf-panels",
  "hepa-filter",
  "ahu",
  "laminar-airflow",
  "pass-box",
  "air-shower",
  "air-curtain",
  "cleanroom-doors",
  "cleanroom-windows",
  "cleanroom-flooring",
  "sampling-booth",
  "dispensing-booth",
  "ot-control-panel",
  "ot-lights",
];
const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Solutions", href: "/solutions", children: solutionNames },
  { label: "Operation Theaters", href: "/solutions/operation-theater-manufacturer", children: operationNames },
  {
    label: "Products",
    href: "/products",
    children: [
      "Cleanroom Panels",
      "HPL / PUF Panels",
      "HEPA Filter",
      "AHU",
      "Laminar Airflow",
      "Pass Box",
      "Air Shower",
      "Air Curtain",
      "Cleanroom Doors",
      "Cleanroom Windows",
      "Cleanroom Flooring",
      "Sampling Booth",
      "Dispensing Booth",
      "OT Control Panel",
      "OT Lights",
    ],
  },
  {
    label: "Industries",
    href: "/industries",
  
  },
//   { label: "Projects", href: "/#projects" },
//   { label: "Quality", href: "/#quality" },
//   { label: "Blog", href: "/#resources" },
  { label: "Contact", href: "/#contact" },
];
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="/" aria-label="Airtec Solutions home">
          <BrandLogo />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`main-nav ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <div className="nav-item" key={item.label}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
                {item.children && <span className="chevron">⌄</span>}
              </a>
              {item.children && (
                <div
                    className={`dropdown ${item.label.toLowerCase().replace(/\s+/g, "-")}-dropdown`}
                >
                  {item.children.map((child, index) => (
                    <a
                      href={
                        item.label === "Solutions"
                          ? `/solutions/${solutionSlugs[index]}`
                          : item.label === "Operation Theaters"
                            ? `/solutions/${operationSlugs[index]}`
                          : item.label === "Products"
                            ? `/products/${productSlugs[index]}`
                            : item.href
                      }
                      key={child}
                    >
                      {child}
                      <b>↗</b>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mobile-actions">
            <a className="button button-dark" href="/#contact">
              Request a Quote
            </a>
          </div>
        </nav>
        <div className="header-actions">
          <a className="header-quote" href="/#contact">
            Request a Quote <b>↗</b>
          </a>
        </div>
      </div>
    </header>
  );
}
