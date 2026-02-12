// _components/SectionPillars.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import Container from "./ui/Container";

const PILLARS = [
  {
    title: "Formations",
    description:
      "Des ateliers pratiques pour développer des compétences utiles et durables.",
    content: [
      " Compétences professionnelles",
      "Autonomie & entrepreneuriat",
      "Accompagnement communautaire",
    ],
    icon: "icon",
  },
  {
    title: "Ressources",
    description:
      "Des outils et du soutien pour aider les femmes à avancer, étape par étape.",
    content: [
      "Informations & orientation",
      "Réseau & opportunités",
      "Accompagnement communautaire",
    ],
    icon: "icon",
  },
  {
    title: "Festival annuel",
    description:
      "Un moment fort pour célébrer la culture, les talents, et la communauté.",
    content: [
      "Artistes locaux",
      " Exposition de mets & savoir-faire",
      "Jeux, trivia & activités",
    ],
    icon: "icon",
  },
];

export default function SectionPillars() {
  return (
    <section id="mission" className="bg-neutral-300 py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-orange-700">
            Ce que nous faisons
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Donner aux femmes les moyens d’agir — avec la culture comme force.
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            WONDER WOMAN soutient les femmes à travers des formations, des
            ressources concrètes, et un festival annuel qui valorise les talents
            locaux.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Card key={p.title} className="border-neutral-200">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {p.content.map((c, idx) => (
                    <li key={idx}>• {c} </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          <Link
            href="/mission"
            className="font-light underline hover:text-red-600"
          >
            En Savoir plus
          </Link>
        </div>
      </Container>
    </section>
  );
}
