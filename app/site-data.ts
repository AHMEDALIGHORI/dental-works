import type { SiteData } from "./site-types";

export const siteData: SiteData = {
  brand: "Dental Works", mark: "DW", specialty: "Specialist dentistry in DHA", city: "DHA Karachi",
  eyebrow: "Academic expertise, made approachable", headline: "Specialist experience for everyday confidence.",
  intro: "A refined dental experience led by Prof. Dr. Shoaib Khan and a multidisciplinary team, combining academic depth with clear, patient-centered care.",
  heroCardTitle: "Expertise you can understand.", heroCardText: "Specialist care, concise guidance, and a clearer path to booking the right clinician.",
  phoneDisplay: "0308 2009504", phoneHref: "tel:+923082009504", whatsappHref: "https://wa.me/923082009504", email: "info@dentalworks.pk",
  address: "Badar Commercial Area, DHA, Karachi", hours: "Contact the clinic for current appointment times", established: "23+ years of dental experience",
  variant: "editorial", theme: { ink: "#27313a", muted: "#69747c", paper: "#fcfbfa", surface: "#efe9e4", primary: "#4d5e6b", primaryDark: "#202a31", accent: "#eea47f", line: "#e3ddd8" },
  stats: [{ value: "23+", label: "Years of experience" }, { value: "4", label: "Dental specialists" }, { value: "2,500", label: "Patients per year" }, { value: "2,200", label: "Happy smiles" }],
  services: [
    { icon: "+", title: "Implant dentistry", description: "Specialist consultation and planning for replacing missing teeth with long-term function in mind." },
    { icon: "✦", title: "Aesthetic dentistry", description: "Restorative and cosmetic options designed to improve confidence while protecting oral health." },
    { icon: "◇", title: "Restorative dentistry", description: "Crowns, bridges, fillings, and rehabilitation for damaged or heavily restored teeth." },
    { icon: "↔", title: "Orthodontic guidance", description: "Assessment and referral to the right path for alignment and bite concerns." },
    { icon: "○", title: "Preventive care", description: "Examinations, professional cleaning, and practical plans for maintaining dental health." },
    { icon: "≈", title: "Complex treatment planning", description: "A structured approach for patients who need coordinated specialist input." }
  ],
  doctor: { name: "Prof. Dr. Shoaib Khan", title: "Professor & lead clinician", initials: "SK", bio: "Prof. Dr. Shoaib Khan combines clinical care with academic leadership in dental materials. The redesigned site turns extensive credentials into a concise reason for patients to trust the clinic and book the right consultation.", credentials: ["23+ years’ experience", "Academic leadership", "Implantology", "Dental materials expertise"] },
  promises: [{ title: "Credentials with context", description: "Academic depth is translated into patient benefits instead of overwhelming biographies." }, { title: "The right clinician, faster", description: "Clear team specialties help patients book an appropriate consultation." }, { title: "A focused booking path", description: "The primary action stays visible without competing with long informational sections." }],
  process: [{ step: "01", title: "Choose your concern", description: "Identify the treatment area or ask the clinic to guide you." }, { step: "02", title: "Meet the right specialist", description: "Book with the clinician whose expertise best matches the case." }, { step: "03", title: "Follow a coordinated plan", description: "Receive clear treatment priorities and specialist follow-up when needed." }],
  testimonial: { quote: "The expertise was obvious, but what stood out was how clearly the treatment choices were explained.", author: "Dental Works patient", detail: "Patient experience" },
  faqs: [{ question: "Who leads Dental Works?", answer: "The practice is led by Prof. Dr. Shoaib Khan, who combines clinical dentistry with academic leadership." }, { question: "How do I choose the right dentist?", answer: "Contact the clinic with your main concern and the team can guide you toward the appropriate clinician." }, { question: "Where is the clinic?", answer: "Dental Works is located in the Badar Commercial Area of DHA, Karachi." }]
};
