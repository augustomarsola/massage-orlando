import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative h-[90vh] min-h-[640px] flex items-center justify-center"
      id="hero"
    >
      <Image
        src="/spa_bg.png"
        alt="Luxury massage spa ambiance"
        fill
        priority
        className="object-cover brightness-[0.55]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-white mb-6">
          <span className="text-gradient-gold">Luxor Day Spa Orlando</span>
          <br />
          Luxury Massage & Body Treatments
        </h1>
        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
          Experience personalized therapeutic massage, gentle hair removal, and
          rejuvenating body care in a refined, tranquil setting in Orlando.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-3 rounded-full bg-gold text-ebony font-semibold tracking-wide hover:shadow-glow transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold tracking-wide backdrop-blur-md ring-1 ring-white/30 hover:bg-white/20 transition"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
