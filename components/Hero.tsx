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
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h1 className="
  max-w-4xl
  text-5xl
  md:text-7xl
  lg:text-8xl
  leading-[0.95]
  tracking-tight
">
  Diseñamos experiencias de audio
  <br />
  <span className="text-zinc-300">
    para vehículos excepcionales.
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
