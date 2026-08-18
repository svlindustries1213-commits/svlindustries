import svcMould from "@/assets/svc-mould.jpg";
import svcCnc from "@/assets/svc-cnc.jpg";
import svcService from "@/assets/svc-service.jpg";
import svcDesign from "@/assets/svc-design.jpg";
import aboutFactory from "@/assets/about-factory.jpg";
import quality from "@/assets/quality-inspection.jpg";
import edm from "@/assets/edm.jpg";
import mouldsStacked from "@/assets/moulds-stacked.jpg";

export const services = [
  {
    img: svcMould,
    title: "Tyre Mould Manufacturing",
    body: "New two-piece and segmented (sectional) moulds machined to exacting tolerances for passenger, commercial and specialty tyres.",
    points: ["Two-piece moulds", "Segmented / sectional moulds", "Container & holder assemblies"],
  },
  {
    img: svcCnc,
    title: "Precision CNC Machining",
    body: "Multi-axis CNC machining, EDM and engraving for intricate tread patterns and sidewall detailing.",
    points: ["Multi-axis CNC milling", "Wire & sinker EDM", "Sidewall lettering & engraving"],
  },
  {
    img: svcService,
    title: "Mould Servicing & Refurbishment",
    body: "Cleaning, repair, re-venting and refurbishment to extend mould life and restore production quality.",
    points: ["Ultrasonic & laser cleaning", "Re-venting and vent plugs", "Weld repair & re-machining"],
  },
  {
    img: svcDesign,
    title: "Design & Engineering",
    body: "In-house CAD/CAM design, mould flow analysis and prototyping to bring your tyre design to life.",
    points: ["CAD / CAM modelling", "Mould flow analysis", "Prototype & sample moulds"],
  },
];

export const stats = [
  { value: "20+", label: "Years of Expertise" },
  { value: "500+", label: "Moulds Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "24/7", label: "Service Support" },
];

export const process = [
  {
    step: "01",
    title: "Enquiry & Consultation",
    body: "We review your tyre drawings, size range and production targets to define the right mould specification.",
  },
  {
    step: "02",
    title: "Design & Engineering",
    body: "CAD/CAM modelling, tread pattern development and mould flow analysis, approved by you before cutting steel.",
  },
  {
    step: "03",
    title: "Precision Manufacturing",
    body: "Multi-axis CNC machining, EDM and engraving of segments, sidewall plates and containers to tight tolerances.",
  },
  {
    step: "04",
    title: "Inspection & Dispatch",
    body: "Dimensional inspection, trial fitment and finishing before packing and on-time delivery to your plant.",
  },
  {
    step: "05",
    title: "After-Sales Service",
    body: "Ongoing cleaning, re-venting, repair and refurbishment support to keep your moulds in production.",
  },
];

export const industries = [
  { name: "Passenger Car Tyres", desc: "PCR moulds with fine tread detail and premium sidewall finish." },
  { name: "Truck & Bus Radial", desc: "Heavy-duty TBR segmented moulds built for long production runs." },
  { name: "Two & Three Wheeler", desc: "High-volume moulds for motorcycle, scooter and auto-rickshaw tyres." },
  { name: "Off-The-Road & Agri", desc: "Large OTR and tractor moulds with deep-lug tread geometry." },
  { name: "Industrial & Solid Tyres", desc: "Forklift, solid and specialty tyre moulds for niche applications." },
  { name: "Retreading & Precure", desc: "Precure tread moulds and matrices for the retreading industry." },
];

export const capabilities = [
  { title: "CNC Machining Centres", desc: "Multi-axis vertical and horizontal machining for segments and plates." },
  { title: "Wire & Sinker EDM", desc: "Fine detail sipes, vents and lettering with sharp definition." },
  { title: "CNC Turning & Boring", desc: "Accurate containers, rings and holders with concentric finish." },
  { title: "Metrology & Inspection", desc: "Dimensional checks and profile verification on every batch." },
  { title: "Cleaning & Refurbishment Bay", desc: "Dedicated servicing line for used moulds and re-venting." },
  { title: "CAD / CAM Design Studio", desc: "Full in-house design capability with fast turnarounds." },
];

export const whyUs = [
  { title: "Two Decades of Know-How", body: "Deep tyre-mould specialisation, not general job work." },
  { title: "Tight Tolerances", body: "Precision machining backed by disciplined in-process inspection." },
  { title: "Reduced Downtime", body: "Fast servicing and refurbishment keep your presses running." },
  { title: "On-Time Delivery", body: "Planned capacity and realistic schedules you can build around." },
  { title: "Global Supply", body: "Serving tyre manufacturers in India and export markets." },
  { title: "Responsive Support", body: "Direct access to engineers, 24/7 service coordination." },
];

export const gallery = [
  { img: aboutFactory, alt: "SVL Industries CNC machining shop floor" },
  { img: edm, alt: "EDM sparking operation on hardened steel" },
  { img: quality, alt: "Dimensional inspection of a mould component" },
  { img: mouldsStacked, alt: "Finished tyre moulds ready for dispatch" },
  { img: svcCnc, alt: "Multi-axis CNC machining centre in operation" },
  { img: svcService, alt: "Technician refurbishing a tyre mould" },
];

export { quality, edm, mouldsStacked, aboutFactory };
