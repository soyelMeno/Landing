import Image from "next/image";
import heroImg from "../assets/hero1.jpg";

export default function Hero() {
  return (
    <section className="relative flex h-[50vh] min-h-[420px] w-full items-center justify-center overflow-hidden bg-background min-[790px]:h-[92vh] min-[790px]:min-h-[640px]">
      {/* Background image */}
      <Image
        src={heroImg}
        alt="Garaje de alta gama con vehículos preparados para integración de audio"
        fill
        priority
        className="object-cover object-center opacity-80"
      />

      {/* Gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

      {/* Content */}
     <div className="
  relative
  z-10
  -translate-y-25
  mx-auto
  flex
  max-w-5xl
  flex-col
  items-center
  px-6
  text-center
">
  <h1 className="
    max-w-3xl
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-light
    tracking-tight
    leading-[1.05]
    text-white
  ">
    Diseñamos experiencias de audio para

    <span className="block text-zinc-300">
      vehículos excepcionales.
    </span>

  </h1>

</div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <span className="block h-9 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>
    </section>
  );
}
