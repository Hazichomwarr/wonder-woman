// _components/Hero.tsx

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[url('/images/hero.jpeg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-3xl px-4 text-center text-gray-200">
          <h1 className="mb-6 font-bold leading-tight md:text-5xl">
            <span>Empowering Women.</span>
            <br />
            <span className="ml-14"> Celebrating Culture.</span>
            <br />
            <span className="ml-34"> Building Community.</span>
          </h1>

          <p className="mb-8 text-lg text-gray-200">
            WONDER WOMAN est une organisation communautaire dédiée à
            l’autonomisation des femmes à travers la formation, les ressources
            et un festival culturel annuel.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/festival"
              className="rounded-full bg-orange-600 px-6 py-3 font-medium text-white hover:bg-orange-700"
            >
              Explorer le Festival
            </Link>
            <Link
              href="/mission"
              className="rounded-full border border-white/70 px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Notre Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
