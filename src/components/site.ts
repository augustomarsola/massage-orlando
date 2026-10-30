export const site = {
  name: "Lunelle Spa",
  tagline: "Massage & Wellness · Orlando",
  description:
    "Explore massage, lymphatic drainage, body sculpting, and microneedling at Lunelle Spa in Orlando. View service details and book online with Booksy.",
  url: "https://lunellespa.com",
  booksy:
    "https://booksy.com/en-us/1474517_lunelle-spa_massage_134763_orlando",
  booksyReviews:
    "https://booksy.com/en-us/1474517_lunelle-spa_massage_134763_orlando#business-reviews",
  phoneDisplay: "(407) 868-6023",
  phoneInternational: "+1 (407) 868-6023",
  languages: ["English", "Spanish", "Portuguese"],
  phoneHref: "tel:+14078686023",
  smsHref:
    "sms:+14078686023?body=Hi%20Lidiane%2C%20I%20would%20like%20to%20book%20a%20service.%20I%20found%20you%20on%20your%20website.",
  whatsappHref:
    "https://wa.me/14078686023?text=Hi%20Lidiane%2C%20I%20would%20like%20to%20book%20a%20service.%20I%20found%20you%20on%20your%20website.",
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
    trackingName: "Customized & Relaxation",
    title: "Relaxation Massage",
    description:
      "Unwind with a Swedish, customized, hot stone, or aromatherapy massage. Your comfort and preferred pressure guide the session.",
    image: "/images/capture-2026-10-18/lunelle-massage-model-0354-hq.webp",
    imageAlt: "A massage session with a female model at Lunelle Spa",
    helper: "Swedish · Therapeutic Customized · Hot Stone · Aromatherapy",
    note: "",
  },
  {
    number: "02",
    trackingName: "Deep Tissue & Recovery",
    title: "Deep Tissue & Sports Massage",
    description:
      "For tight muscles and everyday soreness. Focused massage and assisted stretching, with pressure adjusted to your comfort.",
    image: "/deep_tissue.jpg",
    imageAlt: "Deep tissue massage technique",
    helper: "Deep Tissue · Sports & Recovery · Massage + Assisted Stretching",
    note: "",
  },
  {
    number: "03",
    trackingName: "Lymphatic & Post-Op",
    title: "Lymphatic Drainage Massage",
    description:
      "Explore Manual and Brazilian Lymphatic Drainage, Lymphatic Sculpting, and Post-Op Massage. Each service offers a different approach.",
    image: "/lymphatic_massage.jpg",
    imageAlt: "Hands performing a massage",
    helper: "Manual · Brazilian · Lymphatic Sculpting · Post-Op",
    note: "Post-op appointments require clearance from your healthcare provider.",
  },
  {
    number: "04",
    trackingName: "Bodywork & Sculpting",
    title: "Body Sculpting & Wood Therapy",
    description:
      "Hands-on body treatments with manual massage and wood therapy. Explore individual sessions or combined options.",
    image: "/body-contouring-massages.jpg",
    imageAlt: "Hands performing a back massage",
    helper: "Body Sculpting · Anti-Cellulite Manual Massage · Wood Therapy · Wood Therapy + Lymphatic Drainage",
    note: "Results vary. These services are not weight-loss treatments.",
  },
] as const;

// October 25 handoff. No service-specific URLs or published availability assumed.
// Keep false until the saved Booksy catalog, proposed prices and Acne Scars intent
// have been checked. Planned services must not become structured-data offers.
export const skinCareCatalogVerified = false;

export type SkinCareOption = {
  id: string;
  title: string;
  trackingName: string;
  label: string;
  price: number;
  proposedPrice: boolean;
  description: string;
  helper: string;
  note?: string;
};

type SkinCareFamily = {
  id: string;
  number: string;
  title: string;
  image: string;
  imageAlt: string;
  note?: string;
  options: readonly SkinCareOption[];
};

export const skinCareFamilies: readonly SkinCareFamily[] = [
  {
    id: "deep-cleansing", number: "05", title: "Deep Cleansing Facial",
    image: "/images/skin-care-2026-10-25/cleansing-illustration.webp",
    imageAlt: "Illustrative scene of an adult woman receiving gentle facial cleansing with a cotton pad",
    options: [{
      id: "deep-cleansing", title: "Deep Cleansing Facial", trackingName: "Deep Cleansing Facial", label: "Deep Cleansing Facial",
      price: 80, proposedPrice: false,
      description: "A personalized facial focused on deep cleansing and a fresh, cared-for feel. Care is tailored to your skin's needs.",
      helper: "Cleansing · Personalized skin care",
    }],
  },
  {
    id: "acne-care", number: "06", title: "Acne Care Facial",
    image: "/images/skin-care-2026-10-25/acne-care-illustration.webp",
    imageAlt: "Illustrative cosmetic skin consultation with an adult woman with natural blemishes",
    options: [{
      id: "acne-care", title: "Acne Care Facial", trackingName: "Acne Care Facial", label: "Acne Care Facial",
      price: 120, proposedPrice: false,
      description: "Facial care for skin prone to congestion and blemishes, with a focus on cleansing and individual skin needs.",
      helper: "Congestion · Blemish-prone skin",
      note: "Cosmetic skin care does not replace dermatology care.",
    }],
  },
  {
    id: "microneedling", number: "07", title: "Microneedling",
    image: "/images/skin-care-2026-10-25/microneedling-illustration.webp",
    imageAlt: "Illustrative still life of folded towels, unused gloves and a closed unbranded container",
    note: "Suitability is assessed before treatment. Results vary.",
    options: [
      {
        id: "skin-rejuvenation", title: "Microneedling – Skin Rejuvenation", trackingName: "Microneedling – Skin Rejuvenation", label: "Skin Rejuvenation",
        price: 100, proposedPrice: true,
        description: "Microneedling focused on the appearance of fine lines and uneven texture.",
        helper: "Fine lines · Uneven texture",
      },
      {
        id: "acne-scars", title: "Microneedling – Acne Scars", trackingName: "Microneedling – Acne Scars", label: "Acne Scars",
        price: 100, proposedPrice: true,
        description: "Microneedling focused on the appearance of acne scars and uneven skin texture.",
        helper: "Acne scars · Uneven texture",
        note: "Not intended for active acne or inflamed breakouts.",
      },
      {
        id: "pdrn", title: "Microneedling with PDRN (Salmon DNA)", trackingName: "Microneedling with PDRN (Salmon DNA)", label: "PDRN (Salmon DNA)",
        price: 250, proposedPrice: false,
        description: "Explore our PDRN (Salmon DNA) microneedling option, often called a “salmon sperm” facial.",
        helper: "PDRN · Salmon DNA",
      },
    ],
  },
];

export const skinCareDuration = "80 min";

// Public Booksy snapshot, checked 2026-10-08. Recheck before future releases.
// Keep the live reviews link visible; these values are not automatically synced.
export const booksyReviewSummary = { rating: "5.0", count: 2, checkedOn: "2026-10-08" } as const;

export const packages = [
  { title: "Lymphatic Drainage", five: "$550", fiveSaving: "Save $50", ten: "$1,000", tenSaving: "Save $200" },
  { title: "Post-Op Lymphatic", five: "$575", fiveSaving: "Save $50", ten: "$1,050", tenSaving: "Save $200" },
  { title: "Post-Op Advanced / Fibrosis", five: "$625", fiveSaving: "Save $50", ten: "$1,150", tenSaving: "Save $200" },
] as const;

export const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Choose your service and an available time on Booksy, then follow the steps to confirm your appointment.",
  },
  {
    question: "Where can I see prices and session lengths?",
    answer:
      "The full menu, current prices, session lengths, and available times are listed on Booksy.",
  },
  {
    question: "Can the massage pressure be adjusted?",
    answer:
      "Yes. Let us know what feels comfortable. Pressure adjustments depend on the service you booked.",
  },
  {
    question: "Do you offer post-op massage?",
    answer:
      "Yes. Post-op lymphatic massage services are available after clearance from your healthcare provider. They do not replace medical care or follow-up.",
  },
  {
    question: "Do I need to purchase a package?",
    answer:
      "No. You can book a single appointment. Packages are optional for clients planning several visits.",
  },
  {
    question: "What languages do you speak?",
    answer:
      "You can contact us in English, Spanish, or Portuguese.",
  },
] as const;

