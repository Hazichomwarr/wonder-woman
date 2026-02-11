// _components/SectionPrograms.tsx

import Link from "next/link";
import Button from "./ui/Button";
import { ROUTES } from "../_lib/siteRoutes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import Container from "./ui/Container";

export default function SectionPrograms() {
  return (
    <section id="programs" className="bg-neutral-300 py-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold tracking-wide text-orange-700">
              Programmes & Ressources
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Des actions concrètes, pas seulement des mots.
            </h2>
            <p className="mt-4 text-base text-neutral-700">
              Nous proposons des formations et des ressources accessibles,
              adaptées aux réalités locales, pour accompagner les femmes dans
              leur progression.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <p className="text-sm font-semibold text-neutral-900">
                  Formation 1 — Compétences utiles
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Ateliers pratiques pour renforcer l’autonomie et le
                  savoir-faire.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <p className="text-sm font-semibold text-neutral-900">
                  Formation 2 — Ressources & opportunités
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Accès à des informations, outils et orientations concrètes.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <p className="text-sm font-semibold text-neutral-900">
                  Formation 3 — Réseau & soutien
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Connexions locales, entraide, et initiatives communautaires.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href={ROUTES.mission}>
                <Button variant="primary">Découvrir nos programmes</Button>
              </Link>
            </div>
          </div>

          {/* Impact / proof card */}
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle>Impact & Communauté</CardTitle>
              <CardDescription>
                Même sans “gros chiffres”, notre impact se voit et se vit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-neutral-50 p-5">
                  <p className="text-xs font-semibold text-neutral-600">
                    ÉDITIONS
                  </p>
                  <p className="mt-1 text-2xl font-bold text-neutral-900">+3</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Festivals célébrés avec la communauté.
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-5">
                  <p className="text-xs font-semibold text-neutral-600">
                    COMMUNAUTÉ
                  </p>
                  <p className="mt-1 text-2xl font-bold text-neutral-900">
                    Locale
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Artistes, familles, partenaires & bénévoles.
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-5 sm:col-span-2">
                  <p className="text-xs font-semibold text-neutral-600">
                    OBJECTIF
                  </p>
                  <p className="mt-1 text-lg font-semibold text-neutral-900">
                    Autonomiser les femmes par des actions continues
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Formations, ressources, et événements qui valorisent les
                    talents.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link href={ROUTES.contact}>
                  <Button variant="primary">Nous contacter</Button>
                </Link>
                <Link href={ROUTES.festival}>
                  <Button variant="secondary">Voir le festival</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
