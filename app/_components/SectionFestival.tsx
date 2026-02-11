// _components/SectionFestival.tsx
import Image from "next/image";
import Container from "./ui/Container";
import Link from "next/link";
import Button from "./ui/Button";
import { ROUTES } from "../_lib/siteRoutes";

export default function SectionFestival() {
  return (
    <section id="festival" className="bg-neutral-300 py-16">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-orange-700">
              Le Festival
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Un musée vivant de la culture — porté par les femmes.
            </h2>
            <p className="mt-4 text-base text-neutral-700">
              Chaque édition rassemble artistes, familles et partenaires autour
              de la musique, de la gastronomie locale et d’activités
              communautaires. C’est notre preuve, notre fierté, et notre
              énergie.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={ROUTES.festival}>
                <Button variant="primary">Voir les éditions</Button>
              </Link>
              <Link href={ROUTES.contact}>
                <Button variant="secondary">Devenir partenaire</Button>
              </Link>
            </div>
          </div>

          {/* Image grid preview */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-56 overflow-hidden rounded-2xl shadow-sm sm:h-64">
              <Image
                src="/images/hero.jpeg"
                alt="Festival Wonder Woman"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="relative h-26 overflow-hidden rounded-2xl shadow-sm sm:h-30">
                <Image
                  src="/images/hero.jpeg"
                  alt="Festival Wonder Woman"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-26 overflow-hidden rounded-2xl shadow-sm sm:h-30">
                <Image
                  src="/images/hero.jpeg"
                  alt="Festival Wonder Woman"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="sm:col-span-2 text-xs text-neutral-500">
              *Aperçu — photos/vidéos par année disponibles sur la page
              Festival.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
