export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

// Navigation labels are based on the supplied reference screenshots.
// All links use the existing frontend routes; official content can be connected later.
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/about" },
  {
    label: "About Us",
    href: "/about",
    children: [
  { label: "Citizen Charter", href: "/charter" },
  { label: "Greetings From The Director", href: "/director" },
  { label: "Acknowledgement", href: "/acknowledgement" },
  { label: "Prominent Cases", href: "/cases" },
],
  },
  {
    label: "Divisions",
    href: "/divisions",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services Overview", href: "/services" },
      { label: "Case Forwarding Checklist", href: "/services/case-forwarding-checklist" },
    ],
  },
  {
    label: "Notice Board",
    href: "/notices",
    children: [
      { label: "What's New", href: "/notices" },
      { label: "Latest News", href: "/notices" },
      { label: "Vacancy", href: "/notices" },
      { label: "Related Links", href: "/notices" },
      { label: "Important Links", href: "/notices" },
      { label: "Vigilance Complaint Information Management System (VCIMS)", href: "/notices" },
      { label: "Delhi Govt. Website", href: "/notices" },
      { label: "Recruitment Rules", href: "/notices" },
    ],
  },
  { label: "RTI", href: "/rti" },
  { label: "Contact Us", href: "/contact" },
];

export const quickLinks = [
  { icon: "⌕", title: "Public Notices", subtitle: "Updates and announcements", href: "/notices" },
  { icon: "⌘", title: "Forensic Divisions", subtitle: "Explore areas of expertise", href: "/divisions" },
  { icon: "▤", title: "Public Information", subtitle: "Resources and RTI", href: "/rti" },
  { icon: "✉", title: "Contact Laboratory", subtitle: "Find contact information", href: "/contact" },
];

export const divisions = [
  { icon: "⌘", title: "Digital Forensics", description: "Sample overview of digital evidence examination and related forensic capabilities.", href: "/divisions" },
  { icon: "◈", title: "Physics Forensics", description: "A placeholder for relevant physical-science disciplines and their scope of work.", href: "/divisions" },
  { icon: "❋", title: "Biology Forensics", description: "A placeholder for biological examination services and scientific disciplines.", href: "/divisions" },
  { icon: "⚗", title: "Chemical Forensics", description: "A placeholder for chemical analysis and associated laboratory capabilities.", href: "/divisions" },
  { icon: "◎", title: "Questioned Documents", description: "A placeholder for document examination information and related services.", href: "/divisions" },
  { icon: "⌁", title: "Explosive Forensics", description: "A placeholder for research, training, collaboration and development activities.", href: "/divisions" },
  { icon: "⌁", title: "Ballistics Forensics", description: "A placeholder for research, training, collaboration and development activities.", href: "/divisions" },
  { icon: "⌁", title: "DNA Forensics", description: "A placeholder for research, training, collaboration and development activities.", href: "/divisions" },
  { icon: "⌁", title: "Narcotics & Drugs Forensics", description: "A placeholder for research, training, collaboration and development activities.", href: "/divisions" },
  { icon: "⌁", title: "Toxicology Forensics", description: "A placeholder for research, training, collaboration and development activities.", href: "/divisions" },
];

export const notices = [
  { day: "27", month: "OCT", type: "Sample notice", title: "Demonstration notice — replace with an approved laboratory announcement", summary: "This entry is illustrative content for layout testing only.", date: "27 October 2026" },
  { day: "22", month: "OCT", type: "Training", title: "Demonstration training update for the notices section", summary: "Use this area for verified training announcements or institutional updates.", date: "22 October 2026" },
  { day: "15", month: "OCT", type: "Public information", title: "Example public information resource listing", summary: "Replace this text and its link with the correct official document when available.", date: "15 October 2026" },
];

export const events = [
  { title: "Training and capacity building", description: "A sample item for future workshops, training programmes or academic engagement announcements." },
  { title: "Scientific updates", description: "A placeholder for verified research updates, institutional activities and public announcements." },
  { title: "Public resources", description: "A place to highlight approved resources, forms, guidelines or information for stakeholders." },
];

export const pages: Record<string, { title: string; intro: string; heading: string; paragraphs: string[]; bullets: string[] }> = {
  about: { title: "Overview", intro: "An introduction to CFSL Hyderabad, its institutional role and official identity.", heading: "Institutional overview", paragraphs: [], bullets: [] },
  profile: { title: "Institutional Profile", intro: "A structured place for verified institutional details and leadership information.", heading: "Profile and governance", paragraphs: ["This section is a template for approved information about the laboratory, its administration and its organisational structure."], bullets: ["Official name and administrative authority", "Leadership and organisational structure", "Approved institutional milestones"] },
  divisions: { title: "Scientific Divisions", intro: "Explore the scientific disciplines and areas of expertise represented by the laboratory.", heading: "Divisions and areas of expertise", paragraphs: ["The division names shown here are illustrative navigation examples, not a verified directory of CFSL Hyderabad. Confirm the actual divisions and their remits before publication."], bullets: ["Add each confirmed division as structured data", "Provide approved descriptions and scope of work", "Add official contact or referral guidance where appropriate"] },
  services: { title: "Services", intro: "A clear directory for approved information about forensic services and stakeholder guidance.", heading: "Service information", paragraphs: ["This page is a placeholder. Populate it with verified service descriptions, eligibility or referral information, document requirements and official procedures as applicable."], bullets: ["Approved service descriptions", "Submission and referral guidance", "Applicable forms and official resources"] },
  notices: { title: "Notices & Updates", intro: "A central place for announcements, tenders, recruitment notices and public resources.", heading: "Latest notices", paragraphs: ["The notice entries currently shown on this demonstration website are sample content. They are not real official announcements and must be replaced before deployment."], bullets: ["Use a clear title and publication date", "Link directly to the approved document or notice", "Remove expired content according to the site's publishing policy"] },
  rti: {
  title: "Right to Information",
  intro:
    "Access RTI application guidance, official government resources and public-information disclosures.",
  heading: "Public information resources",
  paragraphs: [
    "Find official RTI resources and general guidance for seeking information under the Right to Information Act, 2005. CFSL Hyderabad officer details and current proactive-disclosure documents should be added only after verification.",
  ],
  bullets: [
    "RTI application routes and official forms",
    "Current CPIO and First Appellate Authority details, once verified",
    "Section 4 proactive disclosures and official government resources",
  ],
},
  contact: { title: "Contact the Laboratory", intro: "Official address and publicly listed communication channels for CFSL Hyderabad.", heading: "Contact information", paragraphs: ["The contact page provides the laboratory address and a publicly listed institutional email. Telephone numbers, office hours and visitor requirements should be confirmed through current official channels before a visit."], bullets: ["Confirm the current procedure before forwarding evidence", "Do not send confidential case material to an unverified email address", "Check the official website for current notices and contact updates"] },
  charter: {
  title: "Citizen Charter",
  intro: "Our commitment to transparent, professional and timely public service.",
  heading: "Citizen Charter",
  paragraphs: [
    "The official Citizen’s Charter and its service standards will be published here after the approved source document is provided and verified.",
    "This page will present the laboratory’s service commitments, applicable procedures, expected timelines where officially specified, and the appropriate channels for feedback or grievances.",
  ],
  bullets: [
    "Service commitments and standards — official details to be added",
    "Case submission and communication procedures — to be verified",
    "Feedback and grievance channels — to be verified",
  ],
},
director: {
  title: "Greetings From The Director",
  intro: "A message from the Director of CFSL Hyderabad.",
  heading: "Message from the Director",
  paragraphs: [],
  bullets: [],
},
acknowledgement: {
  title: "Acknowledgement",
  intro: "Recognition of the people and organisations contributing to the laboratory and this website.",
  heading: "Acknowledgement",
  paragraphs: [
    "The Central Forensic Science Laboratory, Hyderabad acknowledges the professional contribution of its scientific, technical, administrative and support personnel in carrying out the laboratory’s responsibilities.",
    "This website is intended to make institutional information more accessible to the public. The final list of contributors and formal acknowledgements will be added after confirmation by the laboratory.",
  ],
  bullets: [
    "Scientific and technical personnel",
    "Administrative and support teams",
    "Website contributors — details to be confirmed",
  ],
},
cases: {
  title: "Prominent Cases",
  intro: "Publicly shareable information about notable forensic casework and scientific contributions.",
  heading: "Prominent Cases",
  paragraphs: [
    "Details will be added only for cases approved for public communication. Case information must respect confidentiality, privacy, court restrictions and the integrity of ongoing investigations.",
  ],
  bullets: [
    "Approved case summaries to be added",
    "No confidential evidence or identifying case details will be published without authorisation",
  ],
},
};
