export const site = {
  name: "Lunelle Spa",
  tagline: "Massage & Wellness · Orlando",
  description:
    "Relax with Swedish or deep tissue massage, lymphatic drainage, and body sculpting at Lunelle Spa in Orlando. View services and book online.",
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
    image: "/spa_bg.png",
    imageAlt: "Massage room illustration",
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

