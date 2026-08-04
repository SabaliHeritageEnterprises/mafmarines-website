// lib/constants.ts

export const COMPANY = {
  fullName: "Mafmarines Solutions",
  shortName: "MAFMARINES",
  name: "MAFMARINES",
  tagline: "ENGINEERING THE TIDES",
  founded: 1988,
  taglineFooter: "Engineering maritime solutions since 1988.",
};

// Navigation links – updated child services to match the new offerings
export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Vessel Inspection & Surveying", href: "/services/vessel-inspection-surveying" },
      { label: "Commercial Diving Operations", href: "/services/commercial-diving-operations" },
      { label: "Subsea Engineering & Construction", href: "/services/subsea-engineering-construction" },
      { label: "Salvage & Emergency Response", href: "/services/salvage-emergency-response" },
      { label: "Specialized Marine Services", href: "/services/specialized-marine-services" },
    ],
  },
  {
    label: "The Fleet",
    href: "/fleet",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// Global offices for the footer and contact map – East African
export const OFFICES = [
  {
    city: "Mombasa",
    country: "Kenya",
    address: "Shed 12, Kilindini Port, Mombasa, Kenya",
    coords: [-4.0435, 39.6682],
  },
  {
    city: "Dar es Salaam",
    country: "Tanzania",
    address: "Berth 8, Dar es Salaam Port, Tanzania",
    coords: [-6.7924, 39.2083],
  },
];

export const SERVICES = [
  {
    slug: "vessel-inspection-surveying",
    name: "Vessel Inspection & Surveying",
    short: "Thorough inspections covering classification, insurance claims, and damage assessments using ultrasonic gauging, sonar mapping, and ROVs.",
    long: "We deliver comprehensive vessel inspection and surveying services to ensure safety, compliance, and operational efficiency. Using advanced tools like ultrasonic thickness gauging, multi-beam sonar mapping, and remotely operated vehicles (ROVs), we evaluate hull integrity, propulsion systems, and structural components with pinpoint accuracy. Our certified surveyors provide detailed reports for classification societies, insurance underwriters, and port authorities.",
    overview: "Our inspection and surveying division is at the forefront of marine asset integrity management. We combine decades of maritime experience with state‑of‑the‑art non‑destructive testing (NDT) to provide actionable data that helps you make informed decisions about vessel maintenance, repair, and class compliance.",
    benefits: [
      "Certified surveyors with marine engineering backgrounds",
      "Advanced ultrasonic and sonar technology",
      "Digital reporting with 3D imagery and analysis",
      "Fast turnaround – reports within 48 hours",
      "Global coverage – we inspect anywhere in the world",
    ],
    process: [
      { step: "1. Consultation", desc: "We understand your vessel's operational history and specific inspection needs." },
      { step: "2. Mobilisation", desc: "Our team deploys to your vessel's location with the necessary equipment." },
      { step: "3. Inspection", desc: "We carry out thorough inspections using ultrasonic, sonar, and ROVs." },
      { step: "4. Analysis & Reporting", desc: "We process the data and deliver a comprehensive digital report." },
      { step: "5. Recommendations", desc: "We provide clear, actionable recommendations for repairs or ongoing maintenance." },
    ],
    stats: [
      { label: "Inspections Completed", value: "500+" },
      { label: "Certified Surveyors", value: "12" },
      { label: "Average Report Time", value: "48 hrs" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=400&fit=crop&sat=20",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=400&fit=crop&sat=-10",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=400&fit=crop",
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&h=800&fit=crop",
    features: [
      "Ultrasonic thickness gauging for hull and structural analysis",
      "Multi-beam sonar mapping for underwater hull inspection",
      "ROV inspections of hard-to-reach areas",
      "Damage assessments for insurance claims and repair planning",
      "Classification society compliance and certification support",
    ],
    specs: [
      { label: "Inspection Depth", value: "Up to 500m" },
      { label: "Technology", value: "Ultrasonic, Sonar, ROV" },
      { label: "Reporting", value: "Detailed digital reports with imagery" },
      { label: "Standards", value: "IMO, SOLAS, Class rules" },
    ],
  },
  {
    slug: "commercial-diving-operations",
    name: "Commercial Diving Operations",
    short: "Expert underwater welding, hull cleaning, propeller maintenance, and search & recovery of lost cargo and artifacts.",
    long: "Our certified commercial divers perform a wide range of underwater tasks including wet welding, cutting, and burning; hull and propeller cleaning; and recovery of lost anchors, containers, and even archaeological items. We operate with surface-supplied diving systems and saturation diving capabilities to ensure safety and efficiency in challenging environments.",
    overview: "Our commercial diving division is built on a foundation of safety, precision, and deep‑sea expertise. We deploy highly trained divers with specialist equipment to execute complex underwater tasks – from high‑voltage cutting and welding to delicate artifact recovery – all while maintaining the highest safety standards.",
    benefits: [
      "IMCA and HSE‑certified diving teams",
      "Surface‑supplied and saturation diving capability",
      "State‑of‑the‑art underwater welding and cutting equipment",
      "24/7 emergency response readiness",
      "Proven track record in deep‑water and challenging environments",
    ],
    process: [
      { step: "1. Assessment", desc: "We evaluate the underwater task and environmental conditions." },
      { step: "2. Dive Plan", desc: "Our team creates a detailed dive plan with safety protocols." },
      { step: "3. Execution", desc: "Divers carry out the required tasks using specialised equipment." },
      { step: "4. Quality Check", desc: "We inspect and verify the work, ensuring it meets specifications." },
      { step: "5. Reporting", desc: "A comprehensive report with video and photo evidence is delivered." },
    ],
    stats: [
      { label: "Dives Completed", value: "2,000+" },
      { label: "Certified Divers", value: "28" },
      { label: "Max Depth", value: "300m" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581094288338-f7dc0f4a0ec2?q=80&w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581094288338-f7dc0f4a0ec2?q=80&w=600&h=400&fit=crop&sat=20",
      "https://images.unsplash.com/photo-1581094288338-f7dc0f4a0ec2?q=80&w=600&h=400&fit=crop&sat=-10",
    ],
    image: "https://images.unsplash.com/photo-1581094288338-f7dc0f4a0ec2?q=80&w=600&h=400&fit=crop",
    hero: "https://images.unsplash.com/photo-1581094288338-f7dc0f4a0ec2?q=80&w=1920&h=800&fit=crop",
    features: [
      "Underwater welding and cutting (wet and dry)",
      "Hull cleaning and propeller polishing",
      "Search and recovery of lost cargo and anchors",
      "Archaeological artifact recovery and preservation",
      "Underwater demolition and debris removal",
    ],
    specs: [
      { label: "Max Depth", value: "Up to 300m (saturation)" },
      { label: "Diving Systems", value: "Surface-supplied, Saturation" },
      { label: "Certifications", value: "IMCA, ADCI, HSE" },
      { label: "Response", value: "Worldwide, 24/7" },
    ],
  },
  {
    slug: "subsea-engineering-construction",
    name: "Subsea Engineering & Construction",
    short: "Mooring systems, pipeline and cable inspections, and offshore platform assembly for long-term subsea infrastructure.",
    long: "We design and install robust subsea infrastructure including mooring systems, flexible risers, and subsea manifolds. Our inspection services cover pipelines, power cables, and subsea structures using ROVs and AUVs. We also support offshore platform assembly, subsea tree installation, and tie-in operations, ensuring reliable, safe, and long-lasting sub-sea assets.",
    overview: "We specialise in the engineering, installation, and maintenance of subsea infrastructure for the offshore energy sector. From the seabed to the surface, our integrated approach ensures that your subsea assets perform reliably for decades. Our team of marine engineers and ROV pilots delivers world‑class solutions in water depths up to 3,000 metres.",
    benefits: [
      "Integrated engineering, procurement, and construction (EPC) services",
      "In‑house ROV and AUV fleet for inspection and intervention",
      "Design and modelling using industry‑leading software",
      "Project management and execution with a proven safety record",
      "Global track record with major oil & gas and renewables clients",
    ],
    process: [
      { step: "1. Feasibility", desc: "We assess the technical and operational requirements." },
      { step: "2. Design", desc: "Our engineers develop detailed designs and simulations." },
      { step: "3. Fabrication", desc: "We oversee the manufacturing of subsea components." },
      { step: "4. Installation", desc: "Using specialised vessels and ROVs, we install the infrastructure." },
      { step: "5. Commissioning", desc: "We test and verify the system, ensuring it meets all specifications." },
    ],
    stats: [
      { label: "Projects Completed", value: "120+" },
      { label: "Max Water Depth", value: "3,000m" },
      { label: "ROV Fleet", value: "8" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&h=400&fit=crop&sat=20",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&h=400&fit=crop&sat=-10",
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&h=400&fit=crop",
    hero: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1920&h=800&fit=crop",
    features: [
      "Mooring system design and installation",
      "Pipeline and cable inspection and maintenance",
      "Offshore platform assembly and hook-up",
      "Subsea tree installation and tie-in",
      "Remotely operated vehicle (ROV) intervention",
    ],
    specs: [
      { label: "Water Depth", value: "Up to 3,000m" },
      { label: "Products", value: "Moorings, Risers, Manifolds" },
      { label: "Technology", value: "ROV, AUV, Construction vessels" },
      { label: "Standards", value: "DNV, API, ISO" },
    ],
  },
  {
    slug: "salvage-emergency-response",
    name: "Salvage & Emergency Response",
    short: "Rapid-response teams for vessel re-floating, wreck removal, and oil spill containment with minimal environmental impact.",
    long: "Our emergency response teams are on standby 24/7 to handle maritime crises including vessel groundings, collisions, fires, and oil spills. We provide wreck removal, re-floating, and salvage engineering using advanced simulation and heavy-lift equipment. Our environmental protection protocols ensure that we mitigate impacts on marine ecosystems while restoring navigational safety.",
    overview: "We are a leading provider of emergency marine response and salvage services, with a reputation for rapid mobilisation and decisive action. Our teams are equipped with cutting‑edge salvage engineering and heavy‑lift capabilities, enabling us to manage complex incidents – from re‑floating grounded vessels to removing wreckage – while prioritising environmental protection.",
    benefits: [
      "24/7 emergency call‑out with global coverage",
      "In‑house salvage engineering and naval architecture",
      "Heavy‑lift and de‑watering equipment fleet",
      "Environmental protection specialists on‑site",
      "Proven track record with major insurers and flag states",
    ],
    process: [
      { step: "1. Alert", desc: "We respond to the emergency call, mobilising our team within hours." },
      { step: "2. Assessment", desc: "Our engineers assess the situation and develop a salvage plan." },
      { step: "3. Stabilisation", desc: "We take immediate steps to prevent further damage and pollution." },
      { step: "4. Salvage Operations", desc: "We execute the salvage plan using heavy‑lift and de‑watering equipment." },
      { step: "5. Post‑Incident", desc: "We conduct a full review and provide a detailed incident report." },
    ],
    stats: [
      { label: "Emergency Responses", value: "200+" },
      { label: "Average Response Time", value: "< 4 hours" },
      { label: "Vessels Re‑floated", value: "35" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1573831396264-1f5b9d6b755a?q=80&w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1573831396264-1f5b9d6b755a?q=80&w=600&h=400&fit=crop&sat=20",
      "https://images.unsplash.com/photo-1573831396264-1f5b9d6b755a?q=80&w=600&h=400&fit=crop&sat=-10",
    ],
    image: "https://images.unsplash.com/photo-1573831396264-1f5b9d6b755a?q=80&w=600&h=400&fit=crop",
    hero: "https://images.unsplash.com/photo-1573831396264-1f5b9d6b755a?q=80&w=1920&h=800&fit=crop",
    features: [
      "Vessel re-floating and de-watering",
      "Wreck removal and debris clearance",
      "Oil spill containment and recovery",
      "Firefighting and damage control",
      "Emergency towage and salvage engineering",
    ],
    specs: [
      { label: "Response Time", value: "Global, <24 hours" },
      { label: "Equipment", value: "Heavy-lift, pumps, boom" },
      { label: "Certifications", value: "ISM, ISPS, OPA 90" },
      { label: "Coverage", value: "Worldwide" },
    ],
  },
  {
    slug: "specialized-marine-services",
    name: "Specialized Marine Services",
    short: "From rope access maintenance to ROV inspections and marine consultancy, we enhance vessel upkeep, compliance, and operational planning.",
    long: "We offer a suite of specialized services including rope access maintenance for hard-to-reach areas, advanced ROV inspections, and marine consultancy for regulatory compliance and operational optimisation. Our team provides tailored solutions for vessel performance improvement, risk assessment, and project management, ensuring that your assets operate at peak efficiency.",
    overview: "Our specialized services division provides targeted solutions that address the unique operational challenges of the maritime sector. Whether it's rope access maintenance for topside repairs, ROV inspections for subsea assets, or expert consultancy for regulatory compliance, we deliver precision and reliability that enhance your operational readiness.",
    benefits: [
      "IRATA‑certified rope access technicians",
      "Experienced ROV pilots and survey specialists",
      "In‑house marine consultants with industry expertise",
      "Customised solutions for each client's specific needs",
      "Comprehensive support from inspection to remediation",
    ],
    process: [
      { step: "1. Discovery", desc: "We work with you to understand your specific operational requirements." },
      { step: "2. Planning", desc: "Our team designs a tailored scope of work and mobilisation plan." },
      { step: "3. Execution", desc: "We deploy the appropriate specialists and equipment to carry out the service." },
      { step: "4. Quality Control", desc: "We ensure all work meets the highest standards and client expectations." },
      { step: "5. Reporting", desc: "We provide a comprehensive report with findings and recommendations." },
    ],
    stats: [
      { label: "Rope Access Specialists", value: "15" },
      { label: "ROV Pilots", value: "8" },
      { label: "Consultancy Projects", value: "180+" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=600&h=400&fit=crop&sat=20",
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=600&h=400&fit=crop&sat=-10",
    ],
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=600&h=400&fit=crop",
    hero: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1920&h=800&fit=crop",
    features: [
      "Rope access maintenance and repair",
      "ROV inspections and survey support",
      "Marine consultancy and project management",
      "Vessel performance analysis and optimisation",
      "Regulatory compliance (IMO, MARPOL, FuelEU)",
    ],
    specs: [
      { label: "Coverage", value: "Global" },
      { label: "Team", value: "IRATA-certified, ROV pilots, consultants" },
      { label: "Certifications", value: "ISO 9001, 14001" },
      { label: "Experience", value: "40+ years combined" },
    ],
  },
];

export const IMAGES = {
  homeHero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&h=1080&fit=crop",
  aboutHero: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=800&h=600&fit=crop",
  servicesHero: "https://images.unsplash.com/photo-1566024287286-457247b70310?q=80&w=1920&h=600&fit=crop",
  fleetHero: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1920&h=600&fit=crop",
  insightsHero: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=1920&h=600&fit=crop",
};

export const FLEET = [
  {
    name: "M/V Mafmarines Alpha",
    type: "Ultra-Large Container Vessel",
    length: "400m",
    built: "2021",
    image: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785589345/WhatsApp_Image_2026-08-01_at_04.45.51_nxvrxy.jpg",
  },
  {
    name: "M/Y Aura",
    type: "Superyacht Support",
    length: "85m",
    built: "2019",
    image: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785589345/WhatsApp_Image_2026-08-01_at_04.45.52_m2kdn7.jpg",
  },
  {
    name: "OSV Mafmarines Pioneer",
    type: "Offshore Supply Vessel",
    length: "92m",
    built: "2022",
    image: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785589345/WhatsApp_Image_2026-08-01_at_04.45.45_vuyf1w.jpg",
  },
  {
    name: "M/V Mafmarines Horizon",
    type: "Bulk Carrier",
    length: "225m",
    built: "2018",
    image: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785589345/WhatsApp_Image_2026-08-01_at_04.45.50_qx1pjj.jpg",
    video: "https://res.cloudinary.com/tgvfx3bf/video/upload/v1785162431/welding_3_j5jthk.mp4",
  },
  {
    name: "M/V Mafmarines Atlas",
    type: "Heavy‑Lift Vessel",
    length: "180m",
    built: "2023",
    image: "https://res.cloudinary.com/tgvfx3bf/image/upload/v1785589345/WhatsApp_Image_2026-08-01_at_04.45.50_qx1pjj.jpg",
  },
];