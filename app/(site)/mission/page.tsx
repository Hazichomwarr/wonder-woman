// app/(site)/mission/page.tsx
import Container from "../../_components/ui/Container";
import Button from "../../_components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../_components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "../../_lib/siteRoutes";
import { SITE_INFOS } from "../../_lib/siteInfos";

export default function Page() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b bg-neutral-50 py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-wide text-orange-700">
              Mission
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Notre mission : autonomiser les femmes, durablement.
            </h1>
            <p className="mt-4 text-base text-neutral-700">
              {SITE_INFOS.tagline}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={ROUTES.contact}>
                <Button variant="primary">Nous contacter</Button>
              </Link>
              <Link href={ROUTES.festival}>
                <Button variant="secondary">Découvrir le festival</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision / Values */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                Vision & valeurs
              </h2>
              <p className="mt-4 text-neutral-700">
                WONDER WOMAN croit que l’autonomie des femmes renforce toute la
                communauté. Nous créons des espaces où les femmes apprennent,
                développent des compétences, et trouvent des opportunités
                concrètes.
              </p>
              <p className="mt-4 text-neutral-700">
                Notre approche combine{" "}
                <span className="font-medium">formation</span>,{" "}
                <span className="font-medium">ressources</span> et{" "}
                <span className="font-medium">célébration culturelle</span> pour
                générer un impact durable.
              </p>
            </div>

            <div className="relative h-72 overflow-hidden rounded-2xl shadow-sm md:h-96">
              <Image
                src="/images/hero.jpeg"
                alt="Wonder Woman"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-neutral-50 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-orange-700">
              Nos piliers
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Une structure simple, une action continue.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Formations</CardTitle>
                <CardDescription>
                  Ateliers pratiques pour développer des compétences utiles.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Exemples : compétences professionnelles, entrepreneuriat,
                autonomie, accompagnement.
              </CardContent>
            </Card>

            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Ressources</CardTitle>
                <CardDescription>
                  Outils, orientation et opportunités accessibles.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Informations, réseau local, partenariats, soutien communautaire.
              </CardContent>
            </Card>

            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Festival annuel</CardTitle>
                <CardDescription>
                  Célébrer la culture et valoriser les talents locaux.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Artistes, gastronomie, expositions, activités communautaires.
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                Programmes & actions
              </h2>
              <p className="mt-4 text-neutral-700">
                Voici un aperçu des activités proposées (évolutif selon les
                éditions et besoins).
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    Programme 1 — Formations ciblées
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Sessions pratiques adaptées aux réalités locales.
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    Programme 2 — Ressources & orientation
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Accès à des outils, conseils, réseau et opportunités.
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    Programme 3 — Événements & célébrations
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Festival annuel et activités culturelles pour rassembler.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href={ROUTES.contact}>
                  <Button variant="primary">Soutenir / Participer</Button>
                </Link>
              </div>
            </div>

            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Comment aider ?</CardTitle>
                <CardDescription>
                  Plusieurs façons de contribuer, selon vos moyens.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-700">
                <p>• Participer comme bénévole</p>
                <p>• Devenir partenaire / sponsor</p>
                <p>• Proposer une formation ou ressource</p>
                <p>• Mettre en avant des artistes locaux</p>

                <div className="pt-3">
                  <Link href={ROUTES.contact + "#participer"}>
                    <Button variant="primary">Voir “Participer”</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-neutral-900 py-14">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Construisons ensemble.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/80">
                WONDER WOMAN accueille les partenariats, les artistes et les
                initiatives qui renforcent l’autonomie des femmes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={ROUTES.festival}>
                <Button variant="secondary">Voir le festival</Button>
              </Link>
              <Link href={ROUTES.contact}>
                <Button variant="primary">Contact</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
