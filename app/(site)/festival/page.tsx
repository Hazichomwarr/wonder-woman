// app/(site)/festival/page.tsx
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
import EventPopup from "@/app/_components/EventPopup";

// Replace this with your real data file later: content/festival.ts
const FESTIVAL_YEARS = [
  {
    year: "2026",
    title: "Édition 2026",
    description:
      "Célébration des talents féminins, musique, gastronomie et communauté.",
    cover: "/festival/f7.jpeg",
  },
  {
    year: "2025",
    title: "Édition 2025",
    description:
      "Artistes locaux, expositions et moments forts partagés ensemble.",
    cover: "/festival/f2.jpeg",
  },
  {
    year: "2024",
    title: "Édition 2024",
    description:
      "Une édition marquante pour rassembler et valoriser la culture locale.",
    cover: "/festival/f8.jpeg",
  },
];

export default function Page() {
  return (
    <div className="bg-white">
      <EventPopup />
      {/* Header */}
      <section className="border-b bg-neutral-50 py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-wide text-orange-700">
              Festival
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Les éditions du festival WONDER WOMAN
            </h1>
            <p className="mt-4 text-base text-neutral-700">
              Photos, vidéos et souvenirs — année par année. Un espace pour
              célébrer la culture, les talents et la communauté.
            </p>
          </div>
        </Container>
      </section>

      {/* Years grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {FESTIVAL_YEARS.map((item) => (
              <Card
                key={item.year}
                className="overflow-hidden border-neutral-200"
              >
                <div className="relative h-48">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-700">
                    {item.year}
                  </span>

                  {/* If you implement /festival/[year], swap this link */}
                  <Link
                    href={
                      item.year === "2026"
                        ? "/event/nyc-2026"
                        : `festival/${item.year}`
                    }
                  >
                    <Button variant="primary">Voir l’album</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-neutral-900 p-8 text-white">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Participer au festival</h2>
                <p className="mt-2 text-sm text-white/80">
                  Vous êtes artiste, partenaire ou bénévole ? Rejoignez la
                  prochaine édition.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.contact + "#participer"}>
                  <Button variant="secondary" className="text-black">
                    Participer
                  </Button>
                </Link>
                <Link href={ROUTES.contact}>
                  <Button variant="primary">Contact</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
