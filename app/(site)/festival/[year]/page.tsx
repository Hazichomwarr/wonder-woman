// app/(site)/festival/[year]/page.tsx
import Container from "../../../_components/ui/Container";
import Button from "../../../_components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../_components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ROUTES } from "../../../_lib/siteRoutes";

// Demo data (replace later with content/festival.ts or CMS)
type MediaItemPhoto = { type: "photo"; src: string; alt: string };
type MediaItemVideo = { type: "video"; src: string; title: string };

type FestivalYear = {
  year: string;
  title: string;
  subtitle: string;
  cover: string;
  highlights: string[];
  photos: MediaItemPhoto[];
  videos: MediaItemVideo[];
};

const FESTIVAL_DATA: Record<string, FestivalYear> = {
  "2026": {
    year: "2026",
    title: "Festival WONDER WOMAN — Édition 2026",
    subtitle:
      "Une célébration des talents féminins, de la culture locale et de la communauté.",
    cover: "/images/hero.jpeg",
    highlights: [
      "Performances d’artistes locaux",
      "Exposition de mets et savoir-faire",
      "Jeux, trivia et moments communautaires",
      "Rencontres & partenariats",
    ],
    photos: [
      { type: "photo", src: "/event/event01.jpeg", alt: "Event 2026 - NYC" },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/WVtncw9TYZI",
        title: "Festival 2024 — Highlights (demo)",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/gdLVscm8V6M",
        title: "Festival 2024 — Highlights (demo)",
      },
    ],
  },

  "2025": {
    year: "2025",
    title: "Festival WONDER WOMAN — Édition 2025",
    subtitle:
      "Une célébration des talents féminins, de la culture locale et de la communauté.",
    cover: "/images/hero.jpeg",
    highlights: [
      "Performances d’artistes locaux",
      "Exposition de mets et savoir-faire",
      "Jeux, trivia et moments communautaires",
      "Rencontres & partenariats",
    ],
    photos: [
      {
        type: "photo",
        src: "/festival/f12.jpeg",
        alt: "Festival 2024 — Photo 1",
      },
      {
        type: "photo",
        src: "/festival/f9.jpeg",
        alt: "Festival 2024 — Photo 2",
      },
      {
        type: "photo",
        src: "/festival/f10.jpeg",
        alt: "Festival 2024 — Photo 3",
      },
      {
        type: "photo",
        src: "/festival/f13.jpeg",
        alt: "Festival 2024 — Photo 4",
      },
      {
        type: "photo",
        src: "/festival/f14.jpeg",
        alt: "Festival 2024 — Photo 5",
      },
      {
        type: "photo",
        src: "/festival/f15.jpeg",
        alt: "Festival 2024 — Photo 6",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/WVtncw9TYZI",
        title: "Festival 2024 — Highlights (demo)",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/gdLVscm8V6M",
        title: "Festival 2024 — Highlights (demo)",
      },
    ],
  },

  "2024": {
    year: "2024",
    title: "Festival WONDER WOMAN — Édition 2024",
    subtitle:
      "Artistes, exposition, gastronomie et souvenirs partagés ensemble.",
    cover: "/images/hero.jpeg",
    highlights: [
      "Scène musicale & danse",
      "Expositions & stands",
      "Gastronomie locale",
      "Activités communautaires",
    ],
    photos: [
      {
        type: "photo",
        src: "/festival/f16.jpeg",
        alt: "Festival 2023 — Photo 2",
      },
      {
        type: "photo",
        src: "/festival/f17.jpeg",
        alt: "Festival 2023 — Photo 3",
      },
      {
        type: "photo",
        src: "/festival/f18.jpeg",
        alt: "Festival 2023 — Photo 4",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/gdLVscm8V6M",
        title: "Festival 2023 — Highlights (demo)",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/WVtncw9TYZI",
        title: "Festival 2024 — Highlights (demo)",
      },
    ],
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const data = FESTIVAL_DATA[year];

  if (!data) notFound();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-neutral-900">
        {/* Cover image */}
        <div className="absolute inset-0 opacity-35">
          <Image
            src={data.cover}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <Container>
          <div className="relative py-14 md:py-20">
            <p className="text-sm font-semibold tracking-wide text-orange-300">
              Festival — {data.year}
            </p>
            <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {data.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base text-white/80">
              {data.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={ROUTES.festival}>
                <Button
                  variant="secondary"
                  className="border-white/60 text-black hover:bg-white/10"
                >
                  ← Retour aux éditions
                </Button>
              </Link>
              <Link href={ROUTES.contact + "#participer"}>
                <Button variant="primary">Participer</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-14">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-neutral-200 md:col-span-2">
              <CardHeader>
                <CardTitle>Moments forts</CardTitle>
                <CardDescription>
                  Un aperçu de ce qui rend cette édition unique.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {data.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Accès rapide</CardTitle>
                <CardDescription>
                  Contact, partenariat ou candidature artiste.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 flex flex-col gap-1">
                <Link href={ROUTES.contact}>
                  <Button variant="primary" className="w-full">
                    Nous contacter
                  </Button>
                </Link>
                <Link href={ROUTES.contact + "#participer"}>
                  <Button variant="secondary" className="w-full">
                    Participer
                  </Button>
                </Link>
                <p className="text-xs text-neutral-500">
                  *Cette page album est une démo avec médias statiques.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Photos */}
      <section className="bg-neutral-50 py-14">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-700">
                Photos
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
                Galerie {data.year}
              </h2>
              <p className="mt-3 text-sm text-neutral-600">
                {/* Cliquez pour agrandir (version lightbox à ajouter ensuite). */}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.photos.map((m, idx) => (
              <div
                key={`${m.type}-${idx}`}
                className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                {"src" in m && (
                  <Image
                    src={m.src}
                    alt={m.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Videos */}
      <section className="py-14">
        <Container>
          <p className="text-sm font-semibold tracking-wide text-orange-700">
            Vidéos
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
            Highlights & performances
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            {/* Démo avec vidéos embarquées (YouTube). Remplacez par vos liens. */}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {data.videos.map((v, idx) => (
              <Card
                key={`${v.type}-${idx}`}
                className="overflow-hidden border-neutral-200"
              >
                <div className="relative aspect-video bg-black">
                  {"src" in v && (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={v.src}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{v.title}</CardTitle>
                  <CardDescription>
                    {/* No video description yet */}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* CTA band */}
          <div className="mt-14 rounded-2xl bg-neutral-900 p-8 text-white">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">Vous voulez participer ?</h3>
                <p className="mt-2 text-sm text-white/80">
                  Artiste, partenaire ou bénévole — rejoignez la prochaine
                  édition.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={ROUTES.contact + "#participer"}>
                  <Button
                    variant="primary"
                    className="bg-orange-600! hover:bg-orange-700!"
                  >
                    Participer
                  </Button>
                </Link>
                <Link href={ROUTES.contact}>
                  <Button
                    variant="secondary"
                    className="border-white/60 text-black hover:bg-white/10"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

// Optional: for better static generation behavior with demo data
export function generateStaticParams() {
  return Object.keys(FESTIVAL_DATA).map((year) => ({ year }));
}
