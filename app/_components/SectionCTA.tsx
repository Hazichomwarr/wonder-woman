// _components/SectionCTA

import Link from "next/link";
import Button from "./ui/Button";
import { ROUTES } from "../_lib/siteRoutes";
import Container from "./ui/Container";

export default function SectionCTA() {
  return (
    <section className="bg-neutral-900 py-10 rounded">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Rejoignez le mouvement.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80">
              Que vous soyez partenaire, bénévole, artiste, ou simplement
              curieux — votre soutien compte.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 ">
            <Link href={ROUTES.contact}>
              <Button variant="primary">Participer</Button>
            </Link>

            <Link
              href={ROUTES.festival}
              className="text-sm font-medium border p-2 rounded text-white/90 hover:scale-95 hover:underline"
            >
              Explorer le festival
            </Link>
            {/* <Link
              href={ROUTES.contact}
              className="text-sm font-medium border p-2 rounded text-white/90 hover:scale-95 hover:underline"
            >
              Participer
            </Link> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
