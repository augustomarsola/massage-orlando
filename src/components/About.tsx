import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide grid gap-16 lg:grid-cols-2 items-center">
        <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1000&q=60"
            alt="Massage therapy ambiance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-white/40">
            <p className="text-sm text-ebony/80 leading-relaxed">
              <span className="font-serif text-ebony font-semibold">
                Excellence in Touch:
              </span>{" "}
              With years of professional experience, Lidiane blends technical
              skill with a caring approach—providing treatments that restore,
              shape, and relax.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-ebony leading-tight">
            Luxor Day Spa Orlando: Refined Wellness & Personalized Care
          </h2>
          <p className="text-lg text-ebony/70 leading-relaxed mb-6">
            Every client receives individualized attention in a calm, elegant
            environment crafted for true relaxation and body harmony at Luxor
            Day Spa Orlando.
          </p>
          <ul className="grid gap-4 mb-10">
            {[
              "Personalized treatment plans",
              "Professional-grade products",
              "Serene luxury environment",
              "Focus on comfort & safety",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center text-[10px] font-bold text-ebony mt-0.5">
                  ✓
                </span>
                <span className="text-ebony/80 text-sm md:text-base leading-relaxed">
                  {i}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-ebony text-white font-semibold tracking-wide hover:bg-gold hover:text-ebony hover:shadow-glow transition"
          >
            Request Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
