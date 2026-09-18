import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSolution, solutions, solutionStaticSlugs } from "../data";

const modularOtApplications = [
  "General Surgery OT", "Orthopaedic OT", "Cardiac OT", "Ophthalmic OT", "ENT OT",
  "Gynecology OT", "Neurosurgery OT", "IVF / Procedure Areas", "Hybrid / Specialized OT applications", "Recovery and associated controlled areas",
];

const modularOtFeatures = [
  ["Hygienic Interior Surfaces", "Smooth and easy-to-clean interior surfaces designed to minimize dirt accumulation."],
  ["Modular Construction", "Factory-manufactured components enable controlled installation and future modification."],
  ["Controlled Air Environment", "HVAC, HEPA filtration and airflow systems can be configured according to project requirements."],
  ["Pressure Control", "Designed to maintain the required positive-pressure relationship with adjacent areas."],
  ["Hermetically Sealed Doors", "OT doors can be provided with suitable sealing arrangements for controlled environments."],
  ["Integrated Services", "Electrical, HVAC, lighting, control and other services can be coordinated within the OT design."],
  ["Customized Configuration", "OT size, panel construction, ceiling system and equipment configuration can be customized."],
];

const modularOtTypes = [
  ["PPGI Modular OT", "Cost-effective modular construction using powder-coated GI/PPGI panel systems."],
  ["PIR / PUF Modular OT", "Insulated sandwich-panel construction for controlled environments."],
  ["HPL Modular OT", "Premium decorative and hygienic surface option for selected healthcare applications."],
  ["Stainless Steel Modular OT", "SS 304 interior construction for applications requiring enhanced durability and hygiene."],
  ["Semi-Modular OT", "Combination of conventional civil construction and modular OT systems."],
  ["Laminar Flow OT", "OT systems incorporating ceiling-mounted or suitable LAF systems according to application requirements."],
];

const modularOtSpecifications = [
  ["Material", "PPGI"],
  ["Build type", "Semi-modular"],
  ["Country of origin", "Made in India"],
  ["Key feature", "Easy to handle; coordinated around the operating machines and tools required in the OT"],
  ["Brand", "Airtec Solutions"],
  ["Usage", "Hospital"],
];

const modularOtCoreAdvantages = [
  "Easy-to-handle modular components",
  "Coordinated around operating machines and OT tools",
  "High-workability modular operation theatre layout",
  "Planned around applicable NABH guidelines",
  "Stainless steel / aluminium LAF HEPA bed options",
  "Epoxy / PU flooring options",
];

const semiModularOtSpecifications = [
  ["Material", "GI"],
  ["Built type", "GI painted"],
  ["Service location", "All India"],
  ["Feature", "High quality finish, long durability and robustness"],
  ["Country of origin", "Made in India"],
  ["Brand", "Airtec Solutions"],
  ["Usage", "Hospital"],
];

const semiModularOtBenefits = [
  ["Practical Integration", "A semi-modular build can be planned around the existing civil shell while bringing hygienic, finished OT elements into the critical surgical zone."],
  ["Durable GI Finish", "GI-painted construction provides a robust, fine-finished surface designed for routine healthcare use."],
  ["Project-led Planning", "The layout can be coordinated around the operating equipment, workflow and supporting services required by the hospital."],
  ["Trusted Delivery", "Manufactured by Airtec Solutions in India and available for hospital projects across the country."],
];

const semiModularOtScope = [
  "Fine-finished GI steel structure",
  "Sterile coating for a hygienic interior finish",
  "Coordination around operation theater equipment",
  "Suitable planning for hospitals and institutional projects",
];

const sterilizedOtSpecifications = [
  ["Material", "PPGI"],
  ["Built type", "Modular"],
  ["Service location", "All India"],
  ["Feature", "High quality finish, long durability and robustness"],
  ["Country of origin", "Made in India"],
  ["Brand", "Airtec Solutions"],
  ["Usage", "Hospital"],
];

const sterilizedOtScope = [
  "Pre-fabricated PPGI modular structure",
  "Fine-finished steel structure with sterile coating",
  "Application across operation theaters and institutional facilities",
  "Project coordination and supply across India",
];

const prefabricatedOtSpecifications = [
  ["Material", "Pre fabrication"],
  ["Built type", "Modular"],
  ["Country of origin", "Made in India"],
  ["Brand", "Airtec Solutions"],
  ["Usage", "Hospital"],
  ["Features", "Easy install, portable"],
];

const prefabricatedOtScope = [
  "Planning and design for the advanced OT environment",
  "Pre-fabricated modular production",
  "Installation and commissioning support",
  "After-sales service backed by HVAC expertise",
];

const seamlessOtSpecifications = [
  ["Material", "Stainless steel"],
  ["Built type", "Modular"],
  ["Country of origin", "Made in India"],
  ["Feature", "Bacteria, mould and yeast growth protection; moisture and freeze resistance"],
  ["Brand", "Airtec Solutions"],
  ["Usage", "Hospital"],
  ["Durability", "15 years"],
];

const seamlessOtScope = [
  "Continuous highly filtered, bacteria-free air under positive pressure",
  "Seamless interior that is easy to clean and steam clean",
  "Anti-bacterial paint and vapour-permeable surface options",
  "Compact strong structure with convenient quick installation",
];

const stainlessSteelOtSpecifications = [
  ["Material", "Stainless steel"],
  ["Built type", "Modular"],
  ["Brand", "Airtec Solutions"],
  ["Usage", "Hospital"],
  ["Features", "Expertly crafted; rightly spacious; elevated durability"],
];

const stainlessSteelOtScope = [
  "Expertly crafted stainless-steel modular structure",
  "Spacious planning for surgical workflow and equipment",
  "Elevated durability for demanding hospital use",
  "Manufactured and supplied by Airtec Solutions",
];

const operationTheaterSlugs = [
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

const cleanroomApplications = [
  "Pharmaceutical Manufacturing", "Medical Device Manufacturing", "Ophthalmic / Eye Lens Manufacturing", "Biotechnology", "Healthcare",
  "Electronics", "Research & Development", "Laboratory Applications", "Food & Specialty Processing", "Precision Manufacturing",
];

const cleanroomBenefits = [
  ["Unmatched Contamination Control", "Advanced HEPA / ULPA filtration and controlled airflow help minimize airborne particles, microbes and dust."],
  ["Scalable & Flexible Designs", "Modular systems can be planned around a compact laboratory or a large-scale facility, with future expansion in mind."],
  ["Energy-Efficient Technology", "Optimized airflow and filtration help balance power demand with the air-quality targets of regulated environments."],
  ["Faster Installation & Minimal Downtime", "Factory-manufactured modules enable faster on-site installation with less disruption than conventional construction."],
];

const cleanroomSpecifications = [
  ["Material", "PPGI"], ["Door finishing", "Powder coated"], ["Height", "Tailor made as per requirement"], ["Noise", "Less than 60 dB"], ["Brand", "Airtec Solutions"], ["Colour", "RAL 9002"], ["Panel thickness", "60 mm, 80 mm or 100 mm"], ["Voltage", "440 V"], ["Frequency", "50 Hz"], ["Size", "As per requirement"], ["Filter", "HEPA filter"], ["Door size", "900 × 2100 / 1500 × 2100 mm"], ["Flooring finish", "Epoxy or vinyl flooring"], ["Wall panel", "PPGI"], ["Airflow", "Project-specific airflow design"], ["Country of origin", "Made in India"],
];

const cleanroomConstruction = [
  ["Wall Panels", ["PUF sandwich panels", "PIR sandwich panels", "HPL-faced panels", "GI / PPGI panels", "Stainless Steel 304 panels", "Other customized constructions"]],
  ["Ceiling Systems", ["Suspended cleanroom ceiling", "Modular ceiling panels", "Walkable ceiling systems where structurally designed and certified", "Service-access arrangements"]],
  ["Flooring", ["PVC flooring", "Conductive / ESD flooring", "PU flooring", "Epoxy flooring", "Other project-specific flooring systems"]],
  ["Doors", ["Single-leaf cleanroom doors", "Double-leaf doors", "Sliding doors", "Hermetically sealed doors", "Interlocked doors", "Customized cleanroom doors"]],
  ["Windows", ["Double-glazed cleanroom viewing windows", "Flush-mounted viewing windows", "Customized sizes"]],
];

const cleanroomStandards = ["ISO 14644 series", "Applicable GMP requirements", "Project-specific pharmaceutical requirements", "Healthcare facility requirements", "Client specifications"];

const modularCleanroomDefinition = [
  `The term "modular clean room system" refers to an artificially constructed enclosure that utilizes insulated ceiling and wall panels, HEPA or ULPA filters, and air conditioning units, as well as doors and windows that are tightly sealed to prevent any leakage. Distinct from ordinary construction made of brick or mortar, this system is assembled from standardized components. The main advantage of this system is that any stage of its construction is faster and simpler compared to a brick or mortar fabrication, which makes it possible to make configuration changes if necessary and expand the walls of the clean room when more space is required.`,
  "To be more accurate, this system comprises systems of filters located in the air supply, which enable them to filter the air before it reaches the clean room. However, in order to keep the airflow in a controlled state, a certain airflow pressure is maintained. Moreover, one should bear in mind that air temperature, humidity, and velocity should remain within the required range, which in turn guarantees the effectiveness of the operation of such clean rooms.",
];

const modularCleanroomControls = [
  ["Filtered air supply", "HEPA filters that are 99.97 percent efficient at 0.3 microns or ULPA filters remove particles from the air before the air goes into the room."],
  ["Pressure control", "Positive pressure makes sure that outside dirt does not come in, and negative pressure makes sure that dangerous or sickness-causing stuff stays inside an area."],
  ["Sealed panels and joints", "Panels made of GI, PPGI or stainless steel with sealed joints stop particles from coming in through the walls, ceiling or floor."],
  ["Airflow pattern", "Airflow or non-unidirectional airflow is selected based on the level of cleanliness that is needed."],
  ["Continuous monitoring", "Pressure difference meters and also temperature and humidity sensors check the conditions all the time to make sure the room is always within the limits that have been approved."],
];

const modularCleanroomTypes = [
  ["Pharmaceutical Clean Rooms", "These are ISO 5 to ISO 8 rated rooms used for formulation, filling and packaging areas. They are built to meet cGMP standards for pharmaceutical production."],
  ["Modular Operation Theatres", "These are operating rooms with laminar airflow ceilings, surgical pendants and antibacterial finishes. They are built to support clean surgical procedures."],
  ["Biotechnology and Research Clean Rooms", "These clean rooms control contamination. They are used in research and development, tissue culture and diagnostic testing. They are ideal for laboratory work."],
  ["Electronics and Semiconductor Clean Rooms", "These clean rooms use dissipative wall panels and flooring. They are built to support the manufacturing of PCBs and other precision electronic components."],
  ["Food Processing Clean Rooms", "These are hygienic, easy-to-clean rooms that meet food safety standards. They are used in food production environments where cleanliness is critical."],
  ["Soft wall Clean Rooms", "These are compact. Can be moved easily. They are great for labs or temporary production zones where a clean environment is needed quickly."],
];

const modularCleanroomManufacturing = [
  "In-house fabrication of wall panels, ceiling systems, doors and coving.",
  "HEPA and ULPA filter integration, sourced from established filtration manufacturers.",
  "Epoxy and vinyl flooring options for static control and easy sanitation.",
  "Aluminium extruded framework with powder-coated or stainless steel finishes for corrosion resistance.",
  "Execution capacity for both small lab-scale rooms and large multi-zone facilities.",
  "Design, fabrication, installation and post-installation validation support handled by one team, which reduces the coordination delays that come with multiple vendors.",
];

const modularCleanroomBenefits = [
  "Better contamination control through HEPA or ULPA filtration and sealed panel construction.",
  "A scalable design that adapts as your production or lab space needs grow.",
  "Faster installation compared to conventional civil construction, with minimal disruption to your ongoing operations.",
  "Energy-efficient airflow management that keeps running costs in check without compromising air quality.",
  "Regulatory readiness, since the system is designed against ISO and GMP benchmarks right from the start.",
  "Long-term flexibility, as panels and doors can be reconfigured or relocated if your layout changes later.",
];

const modularCleanroomWhyChoose = [
  "Manufacturer direct pricing, with no middleman markup.",
  "A location advantage that allows quicker site visits, dispatch, and after-sales support across Pune and Maharashtra.",
  "Customization of room size, ISO class, panel material, and door type based on your specific project.",
  "Design and development, along with ongoing maintenance and support, all handled in-house.",
  "Proven experience across operation theaters, laminar airflow systems, pass boxes, pressure modules, and clean room doors.",
];

const modularCleanroomFaqs = [
  ["What is the difference between a clean room and a conventional clean room?", "A modular clean room is made from prefabricated panels and components that are assembled at the site. This means the installation is quicker and makes future changes easier. In contrast, a conventional clean room is built on-site using brick and mortar. Once it is complete, it is much harder to modify or change."],
  ["Which ISO class is right for my facility?", "The right ISO class depends on what you're doing. For example, pharmaceutical filling lines usually require ISO 5 to ISO 7. General pharmaceutical manufacturing areas often use ISO 8. In electronics and semiconductor work, tighter classes like ISO 4 to ISO 6 are common. Our team reviews your process. How sensitive your product is determines the best ISO class."],
  ["How long does it take to install a clean room system?", "Installation time varies based on the size and complexity of the room. However, modular clean rooms are generally much faster to install than traditional ones. This is because the panels, doors, and ceiling parts are made in advance and just need to be put on-site instead of being built from the ground up."],
  ["Can an existing clean room be modified later?", "Yes. Since modular clean rooms are built from panels, not walls, it's easy to reconfigure them. You can expand a room, move walls, or change the layout with minimal disruption. This is very different from clean rooms, which require tearing down and rebuilding when changes are needed."],
  ["Do you provide clean room systems outside Pune and Maharashtra?", "Yes. Although our main manufacturing and service area is Pune and Maharashtra, Airtec Solutions Installs modular cleanroom systems for customers all over India."],
];

const workstationSpecifications = [
  ["Brand", "Airtec Solutions"], ["Type", "Vertical"], ["Material", "Stainless Steel / Mild Steel"], ["Surface finish", "Colour coated"], ["Usage", "Cleanroom"], ["Colour", "Silver"], ["Voltage", "220 V"], ["Noise level", "Up to 65 dB"],
];

const workstationAdvantages = [
  ["Contamination Control", "A controlled, filtered air zone helps minimize contamination risk and protect process integrity."],
  ["Precision", "A stable workspace supports tasks that demand accuracy, consistency and attention to detail."],
  ["Flexibility", "Multiple sizes and configurations can be selected around available space and application requirements."],
  ["Operational Efficiency", "A cleaner work environment helps reduce errors, rework and process interruptions."],
];

const pressureModuleSpecifications = [
  ["Brand", "Airtec Solutions"], ["Usage", "Cleanrooms"], ["Material", "GI powder coated"], ["Colour", "RAL 9002"], ["Features", "Long-lasting, reliable, high finish"], ["Automation grade", "Automatic"], ["Voltage", "230 V"], ["Country of origin", "Made in India"], ["Type", "Corrosion resistant"],
];

const pressureModuleComponents = ["Pre-filter", "Cooling coil", "Blower section", "HEPA filter chamber", "Condenser unit connection"];

const pressureModuleFeatures = [
  ["Precision-engineered", "Designed to support effective contamination control in compact controlled environments."],
  ["Durable construction", "GI powder-coated construction provides a dependable, corrosion-resistant finish."],
  ["Reliable airflow", "Coordinated blower and HEPA filtration sections help deliver consistent filtered airflow."],
  ["Competitive value", "A practical industrial solution for projects that need controlled air performance."],
];

const aluminiumCovingSpecifications = [
  ["Material", "Aluminium"], ["Usage / application", "Modular Cleanrooms, Modular Operation Theatres"], ["Coverage area", "1 piece = 10 / 12 RFT"], ["Grade standard", "Industrial"], ["Finishing type", "Anodized"], ["Country of origin", "Made in India"],
];

const aluminiumCovingAccessories = ["Aluminium powder-coated / anodized covings", "PVC covings", "90° cove pieces", "180° cove pieces", "Room-corner pieces"];

const cleanAirSystemSpecifications = [
  ["System", "Air shower"], ["Brand", "Airtec Solutions"], ["Material", "Stainless Steel / Mild Steel"], ["Usage / application", "Hospital and controlled environments"], ["Finish", "SS finish / powder coated"], ["Automation grade", "Fully automatic"], ["Frequency", "50 Hz"], ["Air velocity", "15 ± m/s through multiple nozzles"], ["Electrical supply", "Project-specific; 240 V or three-phase 440 V options"],
];

const cleanAirSystemFeatures = [
  ["HEPA filtration", "HEPA filters with 99.97% efficiency down to 0.3 microns support a cleaner personnel-entry air wash."],
  ["Pre-filtration", "Replaceable pre-filters help arrest larger dust particles and extend the life of the absolute filters."],
  ["High-capacity blower", "FRP blower with aluminium impeller configuration can create a high-velocity clean-air wash."],
  ["Interlocked access", "Electromagnetic locks, emergency push buttons and indication lights help manage traffic flow."],
];

const cleanAirSystemBuild = ["18-gauge oven-baked CRCA powder-coated body", "Optional Stainless Steel 304 construction", "Oven-baked aluminium nozzles for corrosion protection", "Heavy-duty aluminium-framed glass doors", "Hydraulic door closer", "PVC or optional SS flooring for easy cleaning", "Digital-display microprocessor control panel", "Static and dynamic blower design for reduced noise"];

const operationTheaterIntroduction = [
  "Setting up a hospital’s suite is one of the most important decisions a healthcare facility will ever make.",
  "A surgical suite that is not designed properly can weaken infection control, affect results, and reduce how well staff work. On the other hand, a well-built operation theater becomes the heart of safe and smooth patient care.",
  "We are a trusted operation theater manufacturer in Maharashtra. We provide modular OT solutions. From initial design and construction to installation and after-sales service. Our team designs operation theaters that follow hygiene rules, airflow requirements, and safety standards. At the time we keep them fully adjustable to fit a hospital’s daily operations and budget.",
  "Whether you are building a surgical facility or improving an existing operation theater, we mix engineering accuracy with real hospital experience. This helps us create a theater that works reliably every day.",
];

const operationTheaterManufacturing = ["Producing panels", "Integration of HVAC ducting and control panels", "Cabina distribution panels", "Finishing surfaces", "Quality testing before shipment"];
const operationTheaterWorking = [
  ["Air Handling Unit (AHU)", "This unit pulls in air from inside the room, adjusts it to the temperature and humidity, and then sends it into the modular operation theater."],
  ["HEPA Filtration and Laminar Airflow", "The air goes through HEPA filters and sometimes ULPA filters, which are placed in the ceiling. These filters clean the air completely so only particle-free air flows down directly over the operating table."],
  ["Positive Pressure Cascade", "The operation theater is kept at an air pressure higher than the areas around it. This means air flows out through any gaps in doors or seams, blocking pollution from coming in."],
  ["Sealed Panel System", "The walls and ceiling are made of panels with hidden joints. These joints keep dust from building up and make the surfaces easy to clean and disinfect."],
  ["Control Panel Monitoring", "Surgeons and staff can change the temperature, humidity, and air pressure in real time using a control panel. This happens without breaking the environment."],
];
const operationTheaterSafety = [
  ["Infection risk", "The constant flow of air filtered through HEPA makes it much less likely for bacteria or particles to reach the surgical area."],
  ["Consistent climate control", "The temperature and humidity stay steady. This protects the patient’s body and keeps medical equipment working correctly."],
  ["Seamless cleanable surfaces", "The panels have anti-microbial coatings and are non-porous. This stops germs from growing. Makes cleaning easier each day."],
  ["Electrical and gas safety", "Power supplies are isolated insulation. Medical gas lines are routed properly. This lowers the risk of fire or electric shock in the Modular Operation Theater."],
  ["Reduced downtime", "Because the Modular Operation Theater is built in sections, it can be set up faster. It also allows for upgrades or replacing panels. This means the Modular Operation Theater is out of service."],
];
const operationTheaterProducts = [
  ["Modular OT Panels", "These panels are made from prefinished iron or stainless steel. They come with an anti-microbial powder coating. The design ensures that the joints are dust-free."],
  ["OT Doors", "These doors are hermetically sealed. They swing. They have vision panels. They are built to operate smoothly and to close airtight."],
  ["Laminar Plenum Systems", "HEPA-filtered plenum units provide airflow over the operating table. They keep the environment at Class 100 or ISO Class 5 when needed."],
  ["Air Handling Units (AHUs)", "These AHUs are custom-sized. They have multi-stage filtration: a pre-filter, a filter, and HEPA. They control temperature, humidity, and air quality."],
  ["OT Control Panels & Surgeon Control Units", "These panels are touch-enabled. They let you manage lighting, temperature, humidity, and pressure differences inside the operating theater."],
  ["Vision Panels, Flooring & Ceiling Systems", "The flooring is anti-static and anti-microbial, made from vinyl or epoxy. The ceiling system is seamless. Together they finish the envelope."],
  ["Speciality OTs", "Orthopedic OTs, IVF/ART OTs, and hybrid OTs. Each of these has airflow patterns and equipment arranged for the procedure."],
];
const operationTheaterReasons = [
  "We are based here in Maharashtra. That means we can visit hospital sites quickly, take measurements on the spot, and respond to service needs fast. No long. Delays.",
  "We make everything ourselves, from the panels to the HVAC systems to the control units. We don’t outsource core parts. This gives us control over quality and timelines.",
  "Every hospital is different. We don’t use one-size-fits-all designs. We look at your floor plan and build the OT around it. Customizing dimensions, door placements, and airflow just for your space.",
  "We keep things clear and open. Before and after installation, you get documentation, material lists, and test reports. You know exactly what’s going in and how it’s performing.",
  "We don’t stop after installation. We offer AMC annual maintenance contracts. For filter changes, AHU servicing, and panel upkeep. This keeps your OT running safely and compliant all year.",
];
const operationTheaterFaqs = [
  ["What is the difference between a modular and a conventional operation theater?", "A modular OT is made from factory-built, finished panels with built-in airflow and pressure control. It goes up faster. Reduces infection risks. A conventional OT is built on-site with concrete and plaster. It takes time and has more seams and surfaces where germs can hide."],
  ["How long does it take to install an operation theater?", "Time depends on the size and how much customization is needed. Modular OTs need far less on-site work. Most parts come pre-made. Are just assembled at the site. So it’s much faster than construction."],
  ["What air quality standard should a modular OT meet?", "Most general surgery OTs aim for ISO Class 7 or 8. For surgeries like cardiac or orthopaedic implants, the area over the patient needs ISO Class 5 air. This is done using HEPA-filtered airflow systems."],
  ["Can an existing operation theater be upgraded to a system?", "Yes. You don’t need to tear down the room. We can add walls and ceilings, install new AHUs, and set up laminar airflow. As long as the room has enough ceiling height and space for ducts, it’s possible."],
  ["Do you provide operation theater setup outside Pune and Mumbai well?", "Yes. We work with hospitals across Maharashtra. In Pune, Mumbai, Nashik, Nagpur, and nearby areas. We come to your site for visits, installation, and ongoing support."],
];

export function generateStaticParams() {
  return solutionStaticSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  if (!solution) return {};
  const pageTitle = solution.slug === "operation-theater-manufacturer"
    ? "Operation Theater Manufacturer in Maharashtra | Modular OT Solutions"
    : `${solution.title} | Airtec Solutions`;
  return {
    title: pageTitle,
    description: solution.description,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: pageTitle,
      description: solution.description,
      type: "website",
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const solution = getSolution((await params).slug);
  if (!solution) notFound();
  const related = solutions
    .filter((item) => item.slug !== solution.slug)
    .slice(0, 3);
  const isModularOt = solution.slug === "modular-operation-theater-manufacturer";
  const isModularCleanroom = solution.slug === "modular-clean-room-system-manufacturer";
  const isLaminarWorkstation = solution.slug === "laminar-workstation-manufacturer";
  const isPressureModule = solution.slug === "pressure-module-in-pune";
  const isAluminiumCoving = solution.slug === "aluminium-coving";
  const isCleanAirSystem = solution.slug === "clean-air-system-manufacturer";
  const isSemiModularOt = solution.slug === "semi-modular-operation-theater-manufacturer";
  const isSterilizedOt = solution.slug === "sterilized-operation-theater-manufacturer";
  const isPrefabricatedOt = solution.slug === "prefabricated-operation-theater";
  const isSeamlessOt = solution.slug === "seamless-operation-theater";
  const isStainlessSteelOt = solution.slug === "stainless-steel-operation-theater";
  const isPuWallOt = solution.slug === "pu-wall-operation-theater";
  const isHardwallOt = solution.slug === "hardwall-operation-theater";
  const isSingleOt = solution.slug === "single-operation-theater";
  const isOperationTheaterHub = solution.slug === "operation-theater-manufacturer";
  const operationTheaterSolutions = solutions.filter((item) => operationTheaterSlugs.includes(item.slug));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.description,
    provider: { "@type": "Organization", name: "Airtec Solutions" },
    areaServed: "India",
  };
  return (
    <>
      <Header />
      <main className="solution-detail" id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <section className="solution-detail-hero">
          <Image
            src={solution.image}
            alt={`${solution.title} engineered by Airtec Solutions`}
            fill
            priority
            sizes="100vw"
          />
          <div className="solution-detail-shade" />
          <div className="container solution-detail-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/solutions">Solutions</Link>
              <span>/</span>
              <span>{solution.shortTitle}</span>
            </nav>
            <p className="eyebrow eyebrow-light">
              AIRTEC CAPABILITY / {solution.number}
            </p>
            <h1>{solution.title}</h1>
            <p>{solution.description}</p>
          </div>
        </section>
        <section className="solution-detail-body section-pad">
          <div className="container solution-detail-grid">
            <article>
              <p className="eyebrow">ENGINEERED AROUND YOUR PROCESS</p>
              <h2>Controlled environments built to perform.</h2>
              <p className="solution-detail-lead">{solution.intro}</p>
              <div className="solution-detail-columns">
                <div>
                  <h3>What this solution delivers</h3>
                  <ul>
                    {solution.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Typical applications</h3>
                  <ul>
                    {solution.applications.map((application) => (
                      <li key={application}>{application}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link className="button button-primary" href="/#contact">
                Discuss your requirement <b>↗</b>
              </Link>
            </article>
            <aside className="solution-detail-aside">
              <span>TURNKEY DELIVERY</span>
              <strong>
                Concept
                <br />
                to
                <br />
                <em>commissioning.</em>
              </strong>
              <i />
              <p>
                Design, manufacturing, installation and commissioning support
                from one accountable engineering partner.
              </p>
              <Link href="/about-us">About Airtec Solutions ↗</Link>
            </aside>
          </div>
        </section>
        {isOperationTheaterHub && (
          <>
            <section className="ot-page-intro section-pad"><div className="container ot-page-intro-grid"><div>{operationTheaterIntroduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="ot-page-image"><Image src="/solutions/1 (6).png" alt="Professional modular operation theater interior by Airtec Solutions" fill sizes="(max-width: 800px) 100vw, 48vw" /></div></div></section>
            <section className="ot-about section-pad"><div className="container ot-about-grid"><div><p className="eyebrow">ABOUT US</p><h2>About Us</h2><p>We design and manufacture modular operation theaters by ourselves. Therefore, we have total control of the quality of raw materials and any fabrication tolerances, as well as finishing standards throughout the entire process of producing such operating rooms.</p><p>Our manufacturing facility is responsible for:</p></div><div className="ot-number-list">{operationTheaterManufacturing.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}<p>Since we manage the entire process, hospitals collaborating with us are safer, as they receive the same level of quality every time they order, know the time frames, and do not have to deal with many suppliers for different components.</p></div></div></section>
            <section className="ot-what section-pad"><div className="container ot-what-grid"><div className="ot-page-image"><Image src="/solutions/1 (6).png" alt="Clean modular operation theater environment" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div><p className="eyebrow">THE BASICS</p><h3>What is an operation theater?</h3><p>The operation theater (OT) is a specific type of area provided in a hospital where operations are done in sterile conditions. This area differs from regular hospital areas, as it is constructed in a way that allows for the management of air quality, temperature, and humidity, as well as microbial contamination.</p><p>The knowledge of how the operation theater operates and what makes it effective is crucial for hospital managers, architects, and planners in making the right choices regarding the construction or improvement of the area.</p></div></div></section>
            <section className="ot-working section-pad"><div className="container"><p className="eyebrow">HOW AN OPERATION THEATER WORKS</p><h4>How an operation theater works</h4><p className="ot-section-lead">A operation theater works like a sealed and pressurized room. It constantly. Moves air to make sure the level of contamination stays below strict safety limits. The main parts that make this happen include:</p><div className="ot-card-grid">{operationTheaterWorking.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
            <section className="ot-safety section-pad"><div className="container"><p className="eyebrow">SAFETY BENEFITS</p><h3>Safety Benefits of an Engineered Operation Theater</h3><div className="ot-card-grid">{operationTheaterSafety.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
            <section className="ot-products section-pad"><div className="container"><p className="eyebrow eyebrow-light">OUR RANGE</p><h2>Our Range of Operation Theater Products</h2><p className="ot-section-lead">We supply a full range of OT components and turnkey systems. These include:</p><div className="ot-product-grid">{operationTheaterProducts.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
            <section className="ot-reasons section-pad"><div className="container"><p className="eyebrow">MAHARASHTRA DELIVERY</p><h2>Why Hospitals in Maharashtra Choose Us</h2><div className="ot-reason-grid">{operationTheaterReasons.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div></div></section>
            <section className="ot-faq section-pad"><div className="container"><div className="ot-faq-heading"><p className="eyebrow">FAQ</p><h2>Frequently Asked Questions</h2></div><div className="cleanroom-faq-list">{operationTheaterFaqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>
            <section className="ot-final-cta section-pad"><div className="container"><p className="eyebrow eyebrow-light">COMPLETE CONTROLLED ENVIRONMENTS</p><h2>Get a Customized OT Quote</h2><p>As a complete modular operation theater manufacturer in Maharashtra, we go beyond OT construction alone. Hospitals and pharma facilities looking to build fully controlled environments can also rely on us as a Modular Clean Room manufacturer in Maharashtra, delivering panel systems and airflow designs suited to ICU, CSSD, and laboratory spaces. Together with our expertise as a Clean Air System manufacturer, we help healthcare and industrial clients maintain the filtration, pressure, and air-quality standards required across sterile environments, not just the operation theater alone.</p><Link className="button button-light" href="/#contact">Get a Customized OT Quote <b>↗</b></Link></div></section>
          </>
        )}
        {isModularOt && (
          <>
            <section className="modular-ot-intro section-pad">
              <div className="container modular-ot-intro-grid">
                <div>
                  <p className="eyebrow">MODULAR OPERATION THEATRES</p>
                  <h2>Advanced Modular OT Systems Designed Around Your Surgical Environment</h2>
                </div>
                <div>
                  <p>Airtec Solutions provides customized Modular Operation Theatre solutions for hospitals and healthcare facilities.</p>
                  <p>Our OT systems can integrate <strong>modular wall and ceiling panels, HVAC systems, HEPA filtration, Laminar Airflow, hermetically sealed doors, OT lighting, control systems, flooring and associated services</strong> according to project requirements.</p>
                  <Link className="button button-primary" href="/#contact">Explore Modular OT <b>↗</b></Link>
                </div>
              </div>
            </section>
            <section className="modular-ot-profile section-pad">
              <div className="container modular-ot-profile-grid">
                <div className="modular-ot-profile-copy">
                  <p className="eyebrow">PRODUCT PROFILE / 01</p>
                  <h2>Modular Operation Theater <em>Manufacturer</em></h2>
                  <p className="modular-ot-profile-lead">Pre-fabricated operating theatre environments manufactured for hospitals, research institutes and medical colleges.</p>
                  <p>Airtec Solutions manufactures Modular Operation Theatre systems using raw materials selected in line with relevant quality requirements. Our fine-finished steel structures and sterile coating details are developed to deliver a robust, durable and high-quality clinical interior.</p>
                  <p>Modern modular OTs help healthcare teams create a safer, more effective surgical environment. Each project is planned around the clinical workflow, required flexibility and applicable NABH guidelines for advanced medical workspaces.</p>
                </div>
                <div className="modular-ot-spec-card">
                  <div className="modular-ot-spec-top"><span>ENGINEERED IN INDIA</span><b>01 / OT</b></div>
                  <h3>Technical snapshot</h3>
                  <dl>{modularOtSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                </div>
              </div>
              <div className="container modular-ot-advantage-wrap">
                <div className="modular-ot-advantage-heading"><p className="eyebrow">CORE ADVANTAGES</p><h2>Details that help your OT work <em>harder.</em></h2></div>
                <div className="modular-ot-advantage-list">{modularOtCoreAdvantages.map((advantage, index) => <span key={advantage}><b>{String(index + 1).padStart(2, "0")}</b>{advantage}</span>)}</div>
              </div>
            </section>
            <section className="modular-ot-applications">
              <div className="container">
                <p className="eyebrow eyebrow-light">APPLICATIONS</p>
                <div className="modular-ot-applications-heading"><h2>Designed for every surgical discipline.</h2><p>Flexible planning for mainstream, specialist and associated controlled healthcare areas.</p></div>
                <div className="modular-ot-applications-grid">{modularOtApplications.map((application, index) => <span key={application}><b>{String(index + 1).padStart(2, "0")}</b>{application}</span>)}</div>
              </div>
            </section>
            <section className="modular-ot-features section-pad">
              <div className="container">
                <div className="modular-ot-section-heading"><p className="eyebrow">MODULAR OT FEATURES</p><h2>Key Features of Our Modular OT Systems</h2></div>
                <div className="modular-ot-feature-grid">{modularOtFeatures.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
              </div>
            </section>
            <section className="modular-ot-types section-pad">
              <div className="container modular-ot-types-grid">
                <div><p className="eyebrow eyebrow-light">MODULAR OT TYPES</p><h2>Modular OT <em>Configurations</em></h2><p>Choose a construction and clean-air approach that fits your facility, budget and clinical requirement.</p></div>
                <div className="modular-ot-type-list">{modularOtTypes.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}<Link className="button button-light" href="/#contact">Discuss your OT requirement with our engineer <b>↗</b></Link></div>
              </div>
            </section>
          </>
        )}
        {isSemiModularOt && (
          <>
            <section className="semi-ot-intro section-pad">
              <div className="container semi-ot-intro-grid">
                <div>
                  <p className="eyebrow">SEMI MODULAR OPERATION THEATER</p>
                  <h2>A robust OT finish that works with <em>your hospital.</em></h2>
                </div>
                <div>
                  <p>Airtec Solutions offers Semi Modular Operation Theater systems for hospitals that need a practical balance of conventional construction and pre-fabricated, hygienic OT finishes.</p>
                  <p>We manufacture the modular elements from raw materials selected in line with relevant quality standards, then coordinate the finished system around the needs of the surgical environment.</p>
                  <Link className="button button-primary" href="/#contact">Discuss your OT requirement <b>&#8599;</b></Link>
                </div>
              </div>
            </section>
            <section className="semi-ot-profile section-pad">
              <div className="container semi-ot-profile-grid">
                <div className="semi-ot-profile-copy">
                  <p className="eyebrow eyebrow-light">PRODUCT PROFILE / 12</p>
                  <h2>Fine-finished GI construction for a <em>sterile working environment.</em></h2>
                  <p>Our Semi Modular Operation Theater combines a GI-painted steel structure with sterile coating details to support a high-quality, durable and robust clinical interior.</p>
                  <p>It is well suited to operation theaters, research institutes and medical colleges where the room must be planned around the working equipment, clinical flow and day-to-day maintenance needs.</p>
                </div>
                <div className="semi-ot-spec-card">
                  <div><span>ENGINEERED IN INDIA</span><b>12 / SMOT</b></div>
                  <h3>Technical snapshot</h3>
                  <dl>{semiModularOtSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                </div>
              </div>
            </section>
            <section className="semi-ot-benefits section-pad">
              <div className="container">
                <div className="semi-ot-heading">
                  <p className="eyebrow">WHY SEMI MODULAR</p>
                  <h2>Built for the realities of an <em>active healthcare facility.</em></h2>
                </div>
                <div className="semi-ot-benefit-grid">{semiModularOtBenefits.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
              </div>
            </section>
            <section className="semi-ot-delivery section-pad">
              <div className="container semi-ot-delivery-grid">
                <div>
                  <p className="eyebrow eyebrow-light">PROJECT SCOPE</p>
                  <h2>Planned around the people and equipment inside the <em>OT.</em></h2>
                  <p>Every project is developed around the available space, clinical workflow and the operational requirements of the hospital.</p>
                </div>
                <div className="semi-ot-scope-list">{semiModularOtScope.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}<Link className="button button-light" href="/#contact">Request a project consultation <b>&#8599;</b></Link></div>
              </div>
            </section>
          </>
        )}
        {isSterilizedOt && (
          <>
            <section className="semi-ot-intro section-pad">
              <div className="container semi-ot-intro-grid">
                <div><p className="eyebrow">STERILIZED OPERATION THEATER</p><h2>Modular precision for a <em>sterile surgical environment.</em></h2></div>
                <div><p>Airtec Solutions offers Sterilized Operation Theater systems for hospitals that require a dependable, hygienic and durable modular clinical interior.</p><p>Our pre-fabricated systems are manufactured from quality-compliant PPGI materials and can be planned for operation theaters, research institutes and medical colleges.</p><Link className="button button-primary" href="/#contact">Discuss your OT requirement <b>&#8599;</b></Link></div>
              </div>
            </section>
            <section className="semi-ot-profile section-pad">
              <div className="container semi-ot-profile-grid">
                <div className="semi-ot-profile-copy"><p className="eyebrow eyebrow-light">PRODUCT PROFILE / 13</p><h2>Sterilized Operation Theater <em>Manufacturer</em></h2><p>Under the guidance of our trained professionals, Airtec Solutions manufactures modular OT systems with a fine-finished steel structure and sterile coating details.</p><p>The result is a high-quality finish with long durability and robustness, designed to support the demanding daily environment of a hospital operation theater.</p></div>
                <div className="semi-ot-spec-card"><div><span>ENGINEERED IN INDIA</span><b>13 / SOT</b></div><h3>Technical snapshot</h3><dl>{sterilizedOtSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
              </div>
            </section>
            <section className="semi-ot-benefits section-pad"><div className="container"><div className="semi-ot-heading"><p className="eyebrow">SYSTEM HIGHLIGHTS</p><h2>Designed for quality, durability and <em>robustness.</em></h2></div><div className="semi-ot-benefit-grid">{solution.benefits.map((benefit, index) => <article key={benefit}><span>{String(index + 1).padStart(2, "0")}</span><h3>{benefit}</h3><p>Specified and coordinated around the clinical environment, workflow and maintenance needs of the hospital.</p></article>)}</div></div></section>
            <section className="semi-ot-delivery section-pad"><div className="container semi-ot-delivery-grid"><div><p className="eyebrow eyebrow-light">PROJECT SCOPE</p><h2>A pre-fabricated OT system ready for <em>critical work.</em></h2><p>Airtec Solutions brings manufacturing, finish quality and project coordination together for healthcare facilities across India.</p></div><div className="semi-ot-scope-list">{sterilizedOtScope.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}<Link className="button button-light" href="/#contact">Request a project consultation <b>&#8599;</b></Link></div></div></section>
          </>
        )}
        {isPrefabricatedOt && (
          <>
            <section className="semi-ot-intro section-pad">
              <div className="container semi-ot-intro-grid">
                <div><p className="eyebrow">PREFABRICATED OPERATION THEATER</p><h2>Advanced OT environments, ready for <em>the next step.</em></h2></div>
                <div><p>Airtec Solutions manufactures and supplies a wide range of Prefabricated Modular Operation Theatres for hospitals and healthcare facilities.</p><p>Our cost-effective critical-environment solutions are designed for tight timescales, with an easy-install, portable approach that keeps the project moving.</p><Link className="button button-primary" href="/#contact">Discuss your OT requirement <b>&#8599;</b></Link></div>
              </div>
            </section>
            <section className="semi-ot-profile section-pad">
              <div className="container semi-ot-profile-grid">
                <div className="semi-ot-profile-copy"><p className="eyebrow eyebrow-light">PRODUCT PROFILE / 14</p><h2>One specialist partner from planning through <em>after-sales.</em></h2><p>We support the complete lifecycle of a prefabricated operation theater: planning, designing, production, installation and after-sales service.</p><p>As specialists in purified heating, ventilation and air-conditioning systems, Airtec Solutions brings the HVAC knowledge needed to create a controlled, dependable surgical environment.</p></div>
                <div className="semi-ot-spec-card"><div><span>ENGINEERED IN INDIA</span><b>14 / POT</b></div><h3>Technical snapshot</h3><dl>{prefabricatedOtSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
              </div>
            </section>
            <section className="semi-ot-benefits section-pad"><div className="container"><div className="semi-ot-heading"><p className="eyebrow">SYSTEM HIGHLIGHTS</p><h2>Portable, practical and built around <em>your timeline.</em></h2></div><div className="semi-ot-benefit-grid">{solution.benefits.map((benefit, index) => <article key={benefit}><span>{String(index + 1).padStart(2, "0")}</span><h3>{benefit}</h3><p>Configured to support a smooth, coordinated delivery for advanced hospital operation theaters.</p></article>)}</div></div></section>
            <section className="semi-ot-delivery section-pad"><div className="container semi-ot-delivery-grid"><div><p className="eyebrow eyebrow-light">DELIVERY SUPPORT</p><h2>From a clear plan to a working <em>critical environment.</em></h2><p>Our team stays involved through production, installation and after-sales service, giving your hospital one accountable project partner.</p></div><div className="semi-ot-scope-list">{prefabricatedOtScope.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}<Link className="button button-light" href="/#contact">Request a project consultation <b>&#8599;</b></Link></div></div></section>
          </>
        )}
        {isSeamlessOt && (
          <>
            <section className="semi-ot-intro section-pad">
              <div className="container semi-ot-intro-grid">
                <div><p className="eyebrow">SEAMLESS OPERATION THEATER</p><h2>A cleaner, more resilient surface for <em>critical surgery.</em></h2></div>
                <div><p>Airtec Solutions manufactures Seamless Operation Theater systems for hospitals that need a hygienic, durable and easy-to-service modular environment.</p><p>A continuous flow of highly filtered, bacteria-free air is reticulated under positive pressure into the operating field while surgery-generated contaminants are removed from the site.</p><Link className="button button-primary" href="/#contact">Discuss your OT requirement <b>&#8599;</b></Link></div>
              </div>
            </section>
            <section className="semi-ot-profile section-pad">
              <div className="container semi-ot-profile-grid">
                <div className="semi-ot-profile-copy"><p className="eyebrow eyebrow-light">PRODUCT PROFILE / 15</p><h2>Seamless by design. Built for <em>long service.</em></h2><p>With anti-bacterial paint and a minimum durability of 15 to 18 years, the seamless OT finish is developed for demanding hospital use.</p><p>It is easy to clean and steam clean, ideal for high-humidity areas, and supports vapour permeability so substrate moisture can escape. The surface also helps resist bacteria, mould and yeasts, moisture and freeze-thaw conditions.</p></div>
                <div className="semi-ot-spec-card"><div><span>ENGINEERED IN INDIA</span><b>15 / SOT</b></div><h3>Technical snapshot</h3><dl>{seamlessOtSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
              </div>
            </section>
            <section className="semi-ot-benefits section-pad"><div className="container"><div className="semi-ot-heading"><p className="eyebrow">SYSTEM HIGHLIGHTS</p><h2>Performance shaped around <em>cleanability.</em></h2></div><div className="semi-ot-benefit-grid"><article><span>01</span><h3>Optimum raw materials</h3><p>Selected stainless-steel and coating materials support a dependable, high-quality clinical interior.</p></article><article><span>02</span><h3>Compact strong structure</h3><p>A robust modular build makes the OT practical to install and maintain.</p></article><article><span>03</span><h3>Quick installation</h3><p>Coordinated prefabricated elements help the project move efficiently on site.</p></article><article><span>04</span><h3>Low maintenance</h3><p>Seamless, steam-cleanable surfaces support effective serviceability over time.</p></article></div></div></section>
            <section className="semi-ot-delivery section-pad"><div className="container semi-ot-delivery-grid"><div><p className="eyebrow eyebrow-light">CLEAN-AIR PERFORMANCE</p><h2>A controlled operating field with <em>durability built in.</em></h2><p>From filtered positive-pressure airflow to resilient seamless finishes, Airtec Solutions coordinates the details that help a hospital operate with confidence.</p></div><div className="semi-ot-scope-list">{seamlessOtScope.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}<Link className="button button-light" href="/#contact">Request a project consultation <b>&#8599;</b></Link></div></div></section>
          </>
        )}
        {isStainlessSteelOt && (
          <>
            <section className="semi-ot-intro section-pad">
              <div className="container semi-ot-intro-grid">
                <div><p className="eyebrow">STAINLESS STEEL OPERATION THEATER</p><h2>Strength and space for the demands of <em>advanced surgery.</em></h2></div>
                <div><p>Airtec Solutions manufactures and supplies Stainless Steel Operation Theaters for hospitals that need a robust, hygienic and thoughtfully planned modular environment.</p><p>Our systems are developed to meet the requirements of an advanced operation theater, with the room layout coordinated around the clinical workflow and equipment it supports.</p><Link className="button button-primary" href="/#contact">Discuss your OT requirement <b>&#8599;</b></Link></div>
              </div>
            </section>
            <section className="semi-ot-profile section-pad">
              <div className="container semi-ot-profile-grid">
                <div className="semi-ot-profile-copy"><p className="eyebrow eyebrow-light">PRODUCT PROFILE / 16</p><h2>Expertly crafted, rightly spacious, <em>built to last.</em></h2><p>Stainless steel gives the modular OT a strong, hygienic interior suited to the demanding daily conditions of a hospital.</p><p>Airtec Solutions combines elevated durability with considered proportions, giving surgical teams and equipment the space needed for a clear, efficient operating environment.</p></div>
                <div className="semi-ot-spec-card"><div><span>ENGINEERED IN INDIA</span><b>16 / SSOT</b></div><h3>Technical snapshot</h3><dl>{stainlessSteelOtSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
              </div>
            </section>
            <section className="semi-ot-benefits section-pad"><div className="container"><div className="semi-ot-heading"><p className="eyebrow">SYSTEM HIGHLIGHTS</p><h2>Every detail considered for <em>better OT performance.</em></h2></div><div className="semi-ot-benefit-grid"><article><span>01</span><h3>Expertly crafted</h3><p>Careful stainless-steel fabrication creates a precise, dependable modular structure.</p></article><article><span>02</span><h3>Rightly spacious</h3><p>Room planning supports movement, equipment placement and surgical workflow.</p></article><article><span>03</span><h3>Elevated durability</h3><p>A resilient material choice is suited to the intensive routine of a hospital OT.</p></article><article><span>04</span><h3>Advanced OT ready</h3><p>A coordinated system built around the requirements of modern operation theaters.</p></article></div></div></section>
            <section className="semi-ot-delivery section-pad"><div className="container semi-ot-delivery-grid"><div><p className="eyebrow eyebrow-light">MODULAR OT DELIVERY</p><h2>A durable surgical environment with <em>room to work.</em></h2><p>From the core structure to the final layout, Airtec Solutions helps create a practical OT environment for hospitals and advanced surgical teams.</p></div><div className="semi-ot-scope-list">{stainlessSteelOtScope.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}<Link className="button button-light" href="/#contact">Request a project consultation <b>&#8599;</b></Link></div></div></section>
          </>
        )}
        {isPuWallOt && (
          <>
            <section className="semi-ot-intro section-pad"><div className="container semi-ot-intro-grid"><div><p className="eyebrow">PU WALL OPERATION THEATER</p><h2>Practical walls, brighter work, <em>cleaner focus.</em></h2></div><div><p>Airtec Solutions provides PU Wall Operation Theaters for hospitals that need an easy-to-install modular clinical interior with dependable illumination.</p><p>The paint-coated PU wall system is planned with adjustable light and high illumination to support the operating environment and the team working inside it.</p><Link className="button button-primary" href="/#contact">Discuss your OT requirement <b>&#8599;</b></Link></div></div></section>
            <section className="semi-ot-profile section-pad"><div className="container semi-ot-profile-grid"><div className="semi-ot-profile-copy"><p className="eyebrow eyebrow-light">PRODUCT PROFILE / 17</p><h2>A modular PU wall system with <em>light where it matters.</em></h2><p>Our PU Wall Operation Theater combines a paint-coated surface treatment with a practical modular build for hospital applications.</p><p>Adjustable light, easy installation and high illumination make the system a straightforward choice for new operation theaters and healthcare upgrades across India.</p></div><div className="semi-ot-spec-card"><div><span>ENGINEERED IN INDIA</span><b>17 / PUOT</b></div><h3>Technical snapshot</h3><dl><div><dt>Material</dt><dd>PU</dd></div><div><dt>Built type</dt><dd>Modular</dd></div><div><dt>Surface treatment</dt><dd>Paint coated</dd></div><div><dt>Service location</dt><dd>All India</dd></div><div><dt>Country of origin</dt><dd>Made in India</dd></div><div><dt>Features</dt><dd>Adjustable light, easy to install, high illumination</dd></div><div><dt>Brand</dt><dd>Airtec Solutions</dd></div></dl></div></div></section>
            <section className="semi-ot-benefits section-pad"><div className="container"><div className="semi-ot-heading"><p className="eyebrow">SYSTEM HIGHLIGHTS</p><h2>Designed for a clear, efficient <em>operating environment.</em></h2></div><div className="semi-ot-benefit-grid"><article><span>01</span><h3>Adjustable light</h3><p>Lighting can be planned around the requirements of the operating field.</p></article><article><span>02</span><h3>Easy to install</h3><p>Modular PU wall elements support a practical, coordinated installation.</p></article><article><span>03</span><h3>High illumination</h3><p>A brighter working environment supports visibility across the OT.</p></article><article><span>04</span><h3>Paint-coated finish</h3><p>A finished surface creates a clean, consistent healthcare interior.</p></article></div></div></section>
            <section className="semi-ot-delivery section-pad"><div className="container semi-ot-delivery-grid"><div><p className="eyebrow eyebrow-light">PU WALL OT DELIVERY</p><h2>Modular clarity for <em>hospital projects.</em></h2><p>Airtec Solutions coordinates the wall system, lighting approach and installation details around the needs of your operation theater.</p></div><div className="semi-ot-scope-list"><span><b>01</b>PU modular wall construction</span><span><b>02</b>Paint-coated surface treatment</span><span><b>03</b>Adjustable light and high illumination</span><span><b>04</b>Easy installation across India</span><Link className="button button-light" href="/#contact">Request a project consultation <b>&#8599;</b></Link></div></div></section>
          </>
        )}
        {isHardwallOt && (
          <>
            <section className="semi-ot-intro section-pad"><div className="container semi-ot-intro-grid"><div><p className="eyebrow">HARDWALL OPERATION THEATER</p><h2>Solid control for <em>advanced surgery.</em></h2></div><div><p>Airtec Solutions manufactures and supplies Hardwall Operation Theatres for hospitals that need a dependable stainless-steel modular environment.</p><p>Our critical-environment solutions are cost effective for tight timescales and are supported by specialist purified heating, ventilation and air-conditioning expertise.</p><Link className="button button-primary" href="/#contact">Discuss your OT requirement <b>&#8599;</b></Link></div></div></section>
            <section className="semi-ot-profile section-pad"><div className="container semi-ot-profile-grid"><div className="semi-ot-profile-copy"><p className="eyebrow eyebrow-light">PRODUCT PROFILE / 18</p><h2>Stainless-steel hardwall construction with <em>controlled comfort.</em></h2><p>Our modular Hardwall Operation Theater is designed for the requirements of an advanced operation theater, with a robust stainless-steel structure and a controlled interior environment.</p><p>The system is specified for 50% humidity and a 42 dB noise level, giving the hospital a clear, considered foundation for surgical work.</p></div><div className="semi-ot-spec-card"><div><span>ENGINEERED IN INDIA</span><b>18 / HWOT</b></div><h3>Technical snapshot</h3><dl><div><dt>Material</dt><dd>Stainless steel</dd></div><div><dt>Built type</dt><dd>Modular</dd></div><div><dt>Country of origin</dt><dd>Made in India</dd></div><div><dt>Humidity</dt><dd>50%</dd></div><div><dt>Noise level</dt><dd>42 dB</dd></div><div><dt>Brand</dt><dd>Airtec Solutions</dd></div><div><dt>Usage</dt><dd>Hospital</dd></div></dl></div></div></section>
            <section className="semi-ot-benefits section-pad"><div className="container"><div className="semi-ot-heading"><p className="eyebrow">SYSTEM HIGHLIGHTS</p><h2>Critical environment support, coordinated <em>end to end.</em></h2></div><div className="semi-ot-benefit-grid"><article><span>01</span><h3>Stainless-steel hardwall</h3><p>A strong modular enclosure suited to demanding hospital operation theaters.</p></article><article><span>02</span><h3>Controlled humidity</h3><p>Planned around a 50% humidity specification for a considered interior climate.</p></article><article><span>03</span><h3>Low noise</h3><p>A 42 dB noise-level specification supports a calmer operating environment.</p></article><article><span>04</span><h3>HVAC expertise</h3><p>Purified heating, ventilation and air-conditioning support from planning to service.</p></article></div></div></section>
            <section className="semi-ot-delivery section-pad"><div className="container semi-ot-delivery-grid"><div><p className="eyebrow eyebrow-light">COMPLETE OT SUPPORT</p><h2>From planning and design to <em>after-sales service.</em></h2><p>Airtec Solutions stays involved through production, installation and ongoing support, giving your hospital one accountable project partner.</p></div><div className="semi-ot-scope-list"><span><b>01</b>Planning and designing</span><span><b>02</b>Production and modular fabrication</span><span><b>03</b>Installation and commissioning support</span><span><b>04</b>After-sales service</span><Link className="button button-light" href="/#contact">Request a project consultation <b>&#8599;</b></Link></div></div></section>
          </>
        )}
        {isSingleOt && (
          <>
            <section className="semi-ot-intro section-pad"><div className="container semi-ot-intro-grid"><div><p className="eyebrow">MODULAR OPERATION THEATER</p><h2>A state-of-the-art OT built for <em>confident care.</em></h2></div><div><p>Airtec Solutions offers Modular Operation Theaters designed to meet international standards of hygiene, safety and functionality.</p><p>Our PVC wall, ceiling and panel systems create a durable, infection-controlled environment with seamless integration for advanced medical equipment.</p><Link className="button button-primary" href="/#contact">Discuss your OT requirement <b>&#8599;</b></Link></div></div></section>
            <section className="semi-ot-profile section-pad"><div className="container semi-ot-profile-grid"><div className="semi-ot-profile-copy"><p className="eyebrow eyebrow-light">PRODUCT PROFILE / 19</p><h2>Designed around the people and equipment inside the <em>OT.</em></h2><p>Built with precision, this modular operation theater supports a sterile environment while keeping the room practical and easy to use for healthcare professionals.</p><p>Premium-grade materials across the walls, ceilings and panels provide durability, infection control and a clean integration with the wider clinical system.</p></div><div className="semi-ot-spec-card"><div><span>ENGINEERED IN INDIA</span><b>19 / OT</b></div><h3>Technical snapshot</h3><dl><div><dt>Material</dt><dd>PVC</dd></div><div><dt>Built type</dt><dd>Modular</dd></div><div><dt>Usage</dt><dd>Hospital</dd></div><div><dt>Brand</dt><dd>Airtec Solutions</dd></div></dl></div></div></section>
            <section className="semi-ot-benefits section-pad"><div className="container"><div className="semi-ot-heading"><p className="eyebrow">SYSTEM HIGHLIGHTS</p><h2>Control, flexibility and space for <em>better workflow.</em></h2></div><div className="semi-ot-benefit-grid"><article><span>01</span><h3>Advanced modular design</h3><p>Flexible construction supports efficient planning and future adaptability.</p></article><article><span>02</span><h3>Infection control</h3><p>Air filtration and cleanable surfaces help support a sterile environment.</p></article><article><span>03</span><h3>Spacious layout</h3><p>Room proportions are considered for smooth movement and clinical workflow.</p></article><article><span>04</span><h3>Premium durability</h3><p>High-quality materials are selected for long-lasting hospital performance.</p></article></div></div></section>
            <section className="semi-ot-delivery section-pad"><div className="container semi-ot-delivery-grid"><div><p className="eyebrow eyebrow-light">MODULAR OT DELIVERY</p><h2>A complete environment for <em>advanced surgery.</em></h2><p>Airtec Solutions coordinates the OT envelope, airflow approach and equipment integration around the needs of your healthcare team.</p></div><div className="semi-ot-scope-list"><span><b>01</b>PVC modular walls, ceilings and panels</span><span><b>02</b>Infection control and air filtration support</span><span><b>03</b>Spacious workflow-led planning</span><span><b>04</b>Integration with advanced medical equipment</span><Link className="button button-light" href="/#contact">Request a project consultation <b>&#8599;</b></Link></div></div></section>
          </>
        )}
        {isModularCleanroom && (
          <>
            <section className="cleanroom-intro section-pad">
              <div className="container cleanroom-intro-grid">
                <div><p className="eyebrow">MODULAR CLEAN ROOM SYSTEM MANUFACTURER</p><h2>Controlled environments engineered for <em>your process.</em></h2></div>
                <div><p>If you are looking for a Modular Clean Room System manufacturer, Airtec Solutions creates controlled environments that prevent contamination for pharmaceutical companies, healthcare centres, biotechnology firms, electronics companies, and research facilities throughout India. We are based in Pune, Maharashtra. As a known Modular Clean Room System manufacturer in Maharashtra, we create, build, and set up cleanroom systems that follow ISO 14644 classification standards, cGMP guidelines, and the specific rules that our customers need to meet. This includes all parts, such as wall panels, ceiling systems, airflow control, doors, and monitoring equipment.</p><p>Since 2011, our design team, our fabrication team, and our installation team have completed cleanroom projects that mix engineering with practical and quick execution so your facility starts working without unnecessary delays.</p><Link className="button button-primary" href="/#contact">Discuss your cleanroom project <b>↗</b></Link></div>
              </div>
            </section>
            <section className="cleanroom-definition section-pad"><div className="container cleanroom-definition-grid"><div><p className="eyebrow">THE BASICS / 01</p><h2>What Is a Modular Clean Room System?</h2></div><div>{modularCleanroomDefinition.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>
            <section className="cleanroom-controls section-pad"><div className="container"><div className="cleanroom-section-heading"><p className="eyebrow">CONTROLLED ENVIRONMENT</p><h2>How a Modular Clean Room Keeps a <em>Controlled Environment</em></h2></div><div className="cleanroom-control-grid">{modularCleanroomControls.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
            <section className="cleanroom-types section-pad"><div className="container"><p className="eyebrow eyebrow-light">SYSTEM TYPES / APPLICATIONS</p><div className="cleanroom-applications-heading"><h2>We make types of modular cleanroom systems designed for <em>different industries.</em></h2><p>Each clean room system can be supplied as parts. Such as wall panels, ceiling panels, doors, windows, pass boxes and air showers. Or delivered as a complete turnkey clean room facility.</p></div><div className="cleanroom-type-grid">{modularCleanroomTypes.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
            <section className="cleanroom-manufacturing section-pad"><div className="container cleanroom-manufacturing-grid"><div><p className="eyebrow eyebrow-light">MANUFACTURING CAPABILITY AND MATERIALS</p><h2>Manufacturing Capability and <em>Materials</em></h2><p>Airtec Solutions manufactures modular clean room components at our Pune facility using GI, PPGI, aluminium and stainless steel panel systems, with PUF (polyurethane foam) or rockwool core insulation for thermal stability and fire resistance. Panel thickness generally ranges from 50 mm to 100 mm, selected based on the cleanliness class and application involved.</p></div><ul>{modularCleanroomManufacturing.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</li>)}</ul></div></section>
            <section className="cleanroom-benefits-copy section-pad"><div className="container cleanroom-benefits-copy-grid"><div><p className="eyebrow">BENEFITS</p><h2>Benefits of Choosing a Modular <em>Clean Room System</em></h2></div><ul>{modularCleanroomBenefits.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</li>)}</ul></div></section>
            <section className="cleanroom-industries section-pad"><div className="container"><p className="eyebrow eyebrow-light">INDUSTRIES WE SERVE</p><div className="cleanroom-industry-list">{["Pharmaceutical manufacturing", "Hospitals and modular operating theatres", "Biotechnology and research labs", "Electronics and semiconductor units", "Food processing facilities", "Medical device manufacturing"].map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div></div></section>
            <section className="cleanroom-why section-pad"><div className="container cleanroom-why-grid"><div><p className="eyebrow">WHY CHOOSE AIRTEC SOLUTIONS</p><h2>Why Choose Airtec Solutions as Your Modular Clean Room System <em>Manufacturer</em></h2><p>Airtec Solutions has been designing, manufacturing, and installing modular clean room systems and related cleanroom products from our Pune, Maharashtra, facility since 2011. As a direct manufacturer rather than a reseller, we control the entire process, from panel fabrication to on-site installation and commissioning. That gives clients across Maharashtra and the rest of India a single point of accountability.</p></div><ul>{modularCleanroomWhyChoose.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</li>)}</ul></div></section>
            <section className="cleanroom-faq section-pad"><div className="container"><div className="cleanroom-section-heading"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Clear answers before your <em>project begins.</em></h2></div><div className="cleanroom-faq-list">{modularCleanroomFaqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section>
          </>
        )}
        {isLaminarWorkstation && (
          <>
            <section className="workstation-intro section-pad">
              <div className="container workstation-intro-grid">
                <div><p className="eyebrow">LAMINAR WORKSTATION MANUFACTURER</p><h2>Cleaner airflow for <em>critical work.</em></h2><p>Airtec Solutions provides vertical Laminar Flow Workstations in Pune, India for facilities that require dependable contamination control and a disciplined clean workspace.</p></div>
                <div className="workstation-air-visual" aria-hidden="true"><span>HEPA-FILTERED</span><i /><i /><i /><b>UNIDIRECTIONAL<br />AIRFLOW</b></div>
              </div>
            </section>
            <section className="workstation-profile section-pad">
              <div className="container workstation-profile-grid">
                <div className="workstation-profile-copy"><p className="eyebrow eyebrow-light">ADVANCED CLEANROOM SOLUTIONS</p><h2>Designed to keep your workspace <em>exceptionally clean.</em></h2><p>Our Laminar Workstations use continuous filtered airflow to create a unidirectional air pattern that helps remove airborne particles, microbes and contaminants from the critical work zone.</p><p>The result is a controlled environment that supports sensitive processes, product integrity and operational efficiency in cleanroom applications.</p><Link className="button button-light" href="/#contact">Discuss your workstation requirement <b>↗</b></Link></div>
                <div className="workstation-spec-card"><div><span>SYSTEM DATA</span><b>07 / LAF</b></div><h3>Technical profile</h3><dl>{workstationSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
              </div>
            </section>
            <section className="workstation-advantages section-pad"><div className="container"><div className="workstation-heading"><p className="eyebrow">WHY CHOOSE OUR LAMINAR WORKSTATIONS?</p><h2>Control that helps your process <em>move forward.</em></h2></div><div className="workstation-advantage-grid">{workstationAdvantages.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
          </>
        )}
        {isPressureModule && (
          <>
            <section className="pressure-module-intro section-pad"><div className="container pressure-module-intro-grid"><div><p className="eyebrow">PRESSURE MODULE / PUNE</p><h2>Positive pressure for <em>cleaner, safer zones.</em></h2><p>Airtec Solutions offers Positive Pressure Modules and Negative Pressure Modules designed to create a clean, controlled environment within compact enclosures and focused work zones.</p></div><div className="pressure-module-flow" aria-hidden="true"><span>AMBIENT AIR</span><i /><i /><i /><b>FILTERED AIR<br />TO ROOM</b></div></div></section>
            <section className="pressure-module-profile section-pad"><div className="container pressure-module-profile-grid"><div className="pressure-module-profile-copy"><p className="eyebrow eyebrow-light">CONTROLLED AIR ENGINEERING</p><h2>A compact system with a <em>clear purpose.</em></h2><p>The working principle of a positive pressure module is closely aligned with laminar airflow. Ambient air enters through a rear-mounted pre-filter, is drawn through the blower assembly, then moves through the HEPA filter chamber for high-efficiency filtration.</p><p>The module circulates conditioned air inside the room while maintaining positive pressure to help reduce the entry of contaminated air. Pre-filter, cooling coil, blower section and HEPA filter work together, with a condenser-unit connection available for typical cooling of the surrounding air.</p><Link className="button button-light" href="/#contact">Discuss your pressure module <b>↗</b></Link></div><div className="pressure-module-spec-card"><div><span>SYSTEM SPECIFICATION</span><b>08 / PPM</b></div><h3>Technical profile</h3><dl>{pressureModuleSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></div></section>
            <section className="pressure-module-components section-pad"><div className="container"><div className="pressure-module-heading"><p className="eyebrow">AIRFLOW PATH</p><h2>Built around a disciplined <em>filtration sequence.</em></h2></div><div className="pressure-module-component-list">{pressureModuleComponents.map((component, index) => <span key={component}><b>{String(index + 1).padStart(2, "0")}</b>{component}<i>→</i></span>)}</div></div></section>
            <section className="pressure-module-features section-pad"><div className="container"><p className="eyebrow eyebrow-light">KEY FEATURES</p><div className="pressure-module-feature-grid">{pressureModuleFeatures.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
          </>
        )}
        {isAluminiumCoving && (
          <>
            <section className="coving-intro section-pad"><div className="container coving-intro-grid"><div><p className="eyebrow">CLEANROOM ACCESSORIES / 09</p><h2>Every cleanroom detail, <em>finished precisely.</em></h2><p>Aluminium Covings by Airtec Solutions create smooth, hygienic transitions at internal wall, ceiling and corner junctions in Modular Cleanrooms and Modular Operation Theatres.</p></div><div className="coving-corner-visual" aria-hidden="true"><i /><i /><span>90° / 180°<br />COVE DETAIL</span></div></div></section>
            <section className="coving-profile section-pad"><div className="container coving-profile-grid"><div className="coving-profile-copy"><p className="eyebrow eyebrow-light">MODULAR SYSTEM INTEGRATION</p><h2>Small accessory.<br /><em>Critical finish.</em></h2><p>Complete cleanroom and Modular OT accessories support a controlled environment by helping manage contamination, static, microorganisms, humidity and other critical operating conditions.</p><p>Whatever your cleanroom requirement, Airtec can provide the coordinated accessory system and installation support needed to align with your production schedule.</p><Link className="button button-light" href="/#contact">Discuss your cleanroom accessory needs <b>↗</b></Link></div><div className="coving-spec-card"><div><span>PRODUCT DATA</span><b>09 / COV</b></div><h3>Technical specification</h3><dl>{aluminiumCovingSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></div></section>
            <section className="coving-range section-pad"><div className="container"><div className="coving-heading"><p className="eyebrow">ACCESSORY RANGE</p><h2>A coordinated finish for <em>every junction.</em></h2></div><div className="coving-range-list">{aluminiumCovingAccessories.map((accessory, index) => <article key={accessory}><span>{String(index + 1).padStart(2, "0")}</span><h3>{accessory}</h3><b>↗</b></article>)}</div></div></section>
            <section className="coving-delivery"><div className="container coving-delivery-inner"><div><p className="eyebrow eyebrow-light">ADDITIONAL INFORMATION</p><h2>Made for the pace of your project.</h2></div><div><span><b>1000</b><small>Production capacity</small></span><span><b>1–2 weeks</b><small>Typical delivery time</small></span></div></div></section>
          </>
        )}
        {isCleanAirSystem && (
          <>
            <section className="air-system-intro section-pad"><div className="container air-system-intro-grid"><div><p className="eyebrow">CLEAN AIR SYSTEM MANUFACTURER</p><h2>Clean entry, <em>controlled environment.</em></h2><p>Airtec Air Showers are fully automatic, electrically operated units that provide personnel with a high-velocity clean-air wash before they enter a controlled clean-air environment.</p></div><div className="air-system-tunnel" aria-hidden="true"><span>ENTRY</span><i /><i /><i /><b>HIGH-VELOCITY<br />CLEAN-AIR WASH</b><small>EXIT</small></div></div></section>
            <section className="air-system-profile section-pad"><div className="container air-system-profile-grid"><div className="air-system-profile-copy"><p className="eyebrow eyebrow-light">AIR SHOWER SYSTEMS</p><h2>Contain contaminants <em>before they enter.</em></h2><p>The air interlock system helps prevent contaminants from entering the cleanroom by containing them within the Air Shower during the cleaning cycle. Modular, joinable construction allows single-person and tunnel arrangements for spaces of different scales.</p><p>Flexible entry and exit configurations make it easier to fit the system into the available footprint while maintaining compatibility with the user environment. Every Airtec Air Shower is factory tested for high efficiency and built with corrosion-resistant powder-coated MS sheet or optional SS construction.</p><Link className="button button-light" href="/#contact">Discuss your air shower requirement <b>↗</b></Link></div><div className="air-system-spec-card"><div><span>SYSTEM DATA</span><b>10 / CAS</b></div><h3>Technical profile</h3><dl>{cleanAirSystemSpecifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></div></section>
            <section className="air-system-features section-pad"><div className="container"><div className="air-system-heading"><p className="eyebrow">FILTRATION & ACCESS CONTROL</p><h2>Performance built into <em>every entry cycle.</em></h2></div><div className="air-system-feature-grid">{cleanAirSystemFeatures.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
            <section className="air-system-build section-pad"><div className="container air-system-build-grid"><div><p className="eyebrow eyebrow-light">CONSTRUCTION & CONTROLS</p><h2>Built for a high-traffic, high-control threshold.</h2><p>Cleanroom entry equipment should withstand everyday use while helping teams keep their access process straightforward and dependable.</p></div><div className="air-system-build-list">{cleanAirSystemBuild.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div></div></section>
          </>
        )}
        <section className="related-solutions section-pad">
          <div className="container">
            <p className="eyebrow">CONTINUE EXPLORING</p>
            <div className="related-heading">
              <h2>Related solutions</h2>
              <Link href="/solutions">View all solutions ↗</Link>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <Link
                  className="related-card"
                  href={`/solutions/${item.slug}`}
                  key={item.slug}
                >
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <b>Explore ↗</b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
