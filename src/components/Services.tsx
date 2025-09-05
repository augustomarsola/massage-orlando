import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  category:
    | "Massage"
    | "Facial Treatment"
    | "Body Treatment"
    | "Hair Treatment"
    | "Beauty Enhancement";
}

const services: ServiceItem[] = [
  // Massage-focused Body Treatments
  {
    title: "Therapeutic Relaxation Massage",
    description:
      "A calming full-body massage focused on releasing stress, improving circulation, and restoring balance. Perfect for those seeking massage Orlando and body spa Orlando experiences.",
    image: "/theurapeutic_relax_massage.jpg",
    category: "Massage",
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Targets deeper layers of muscle and connective tissue to relieve tension, soreness, and chronic pain. Ideal for deep massage Orlando needs.",
    image: "/deep_tissue.jpg",
    category: "Massage",
  },
  {
    title: "Lymphatic Drainage Massage",
    description:
      "Gentle technique that stimulates the lymphatic system to reduce swelling and support detoxification. Popular in body spa Orlando treatments.",
    image: "/lymphatic_massage.jpg",
    category: "Massage",
  },
  {
    title: "Body Contouring Massage",
    description:
      "Specialized techniques to shape, tone, and improve the appearance of skin and body contours. A signature body treatment at Luxor Day Spa Orlando.",
    image:
      "https://images.unsplash.com/photo-1623890343522-34e691b3cbfd?auto=format&fit=crop&w=800&q=60",
    category: "Body Treatment",
  },
  {
    title: "Exfoliating Body Polish",
    description:
      "Revitalizing treatment that gently exfoliates and nourishes skin for a radiant glow. Experience body spa Orlando luxury.",
    image:
      "https://images.unsplash.com/photo-1601046936114-da4ce1140bd8?auto=format&fit=crop&w=800&q=60",
    category: "Body Treatment",
  },
  // Facial Treatments
  {
    title: "Hydrating Facial",
    description:
      "Restores moisture and radiance to the skin, perfect for facial treatments Orlando clients seeking a fresh look.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60",
    category: "Facial Treatment",
  },
  {
    title: "Anti-Aging Facial",
    description:
      "Targets fine lines and wrinkles with advanced products and techniques. A top choice for day spa Orlando visitors.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    category: "Facial Treatment",
  },
  // Hair Treatments
  {
    title: "Gentle Wax Hair Removal",
    description:
      "Clean, careful, and comfortable waxing for smooth skin using high-quality products. Hair treatments Orlando available for all skin types.",
    image:
      "https://images.unsplash.com/photo-1602777928363-8b14546e0815?auto=format&fit=crop&w=800&q=60",
    category: "Hair Treatment",
  },
  // Beauty Enhancements
  {
    title: "Brow Shaping & Tinting",
    description:
      "Enhance your natural beauty with expert brow shaping and tinting for a polished look.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=60",
    category: "Beauty Enhancement",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white/60">
      <div className="container-wide">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-ebony">
            Signature <span className="text-gold">Services</span>
          </h2>
          <p className="text-ebony/70 leading-relaxed text-lg">
            Each session is tailored to your body’s needs with meticulous
            technique, premium products, and a peaceful atmosphere.
          </p>
        </div>
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group card overflow-hidden flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs tracking-wide bg-ebony/80 backdrop-blur-sm text-white border border-white/10">
                  {s.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl mb-2 text-ebony group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-ebony/70 leading-relaxed flex-1">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
