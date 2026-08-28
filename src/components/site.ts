export const site = {
  name: "Lunelle Spa",
  tagline: "Therapeutic Massage & Wellness in Orlando",
  description:
    "Personalized relaxation, deep tissue, lymphatic and bodywork massage in Orlando. Book Lunelle Spa online or text us for help choosing.",
  url: "https://lunellespa.com",
  booksy:
    "https://booksy.com/en-us/1474517_lunelle-spa_massage_134763_orlando",
  phoneDisplay: "(407) 868-6023",
  phoneHref: "tel:+14078686023",
  smsHref:
    "sms:+14078686023?body=Hi%20Lidiane%2C%20I%20would%20like%20help%20choosing%20a%20massage.",
  whatsappHref:
    "https://wa.me/14078686023?text=Hi%20Lidiane%2C%20I%20would%20like%20help%20choosing%20a%20massage.",
  email: "contact@lunellespa.com",
  address: "5979 Vineland Rd Suite 304, Orlando, FL 32819",
  addressShort: "5979 Vineland Rd · Suite 304 · Orlando",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=5979%20Vineland%20Rd%20Suite%20304%2C%20Orlando%2C%20FL%2032819",
  instagram: "https://www.instagram.com/luxordayspaorlando/",
} as const;

export const serviceFamilies = [
  {
    number: "01",
    title: "Customized & Relaxation",
    description:
      "For unwinding, general stress, and a calmer full-body experience. A comfortable starting point for first-time clients.",
    image: "/spa_bg.png",
    imageAlt: "Calm massage room prepared for a personalized session",
    helper: "Swedish · Customized · Hot Stone · Aromatherapy",
  },
  {
    number: "02",
    title: "Deep Tissue & Recovery",
    description:
      "Focused massage for persistent muscle tension or activity-related tightness, with pressure adjusted throughout your session.",
    image: "/deep_tissue.jpg",
    imageAlt: "Focused deep tissue massage technique",
    helper: "Deep Tissue · Sports & Recovery · Assisted Stretching",
  },
  {
    number: "03",
    title: "Lymphatic & Post-Op",
    description:
      "Gentle or more dynamic drainage-inspired bodywork, including post-op options after clearance from your healthcare provider.",
    image: "/lymphatic_massage.jpg",
    imageAlt: "Gentle lymphatic bodywork session",
    helper: "Manual · Brazilian · Sculpting · Post-Op",
  },
  {
    number: "04",
    title: "Bodywork & Sculpting",
    description:
      "Manual massage and wood-therapy techniques for body-focused care and temporary appearance benefits. Results vary.",
    image: "/body-contouring-massages.jpg",
    imageAlt: "Manual body-focused massage technique",
    helper: "Body Sculpting · Wood Therapy · Combined Sessions",
  },
] as const;

export const packages = [
  { title: "Lymphatic Drainage", five: "$550", fiveSaving: "Save $50", ten: "$1,000", tenSaving: "Save $200" },
  { title: "Post-Op Lymphatic", five: "$575", fiveSaving: "Save $50", ten: "$1,050", tenSaving: "Save $200" },
  { title: "Post-Op Advanced / Fibrosis", five: "$625", fiveSaving: "Save $50", ten: "$1,150", tenSaving: "Save $200" },
] as const;

export const faqs = [
  {
    question: "Which massage should I book for my first visit?",
    answer:
      "If you mainly want to relax or you are unsure where to start, the New Client Therapeutic Customized Massage is the simplest option. For focused muscle tension, lymphatic bodywork, or post-op support, text us and we will help you choose the closest service.",
  },
  {
    question: "Is deep tissue massage supposed to hurt?",
    answer:
      "No. Deep tissue uses firmer, controlled pressure, but it should remain within your comfort. Tell us whenever you want the pressure adjusted.",
  },
  {
    question: "Can I skip aromatherapy?",
    answer:
      "Yes. Aromatherapy in the first-visit offer is optional and can be omitted for fragrance sensitivity or personal preference.",
  },
  {
    question: "Do you offer post-op massage?",
    answer:
      "Yes. Post-op lymphatic and focused bodywork options are available after clearance from your healthcare provider. These services do not replace medical care or follow-up.",
  },
  {
    question: "Are packages required?",
    answer:
      "No. You can book individual appointments. Packages are optional for clients who already want a consistent series.",
  },
  {
    question: "Where is Lunelle Spa located?",
    answer:
      "We are at 5979 Vineland Rd, Suite 304, Orlando, FL 32819. Text us if you need help finding the suite.",
  },
] as const;

