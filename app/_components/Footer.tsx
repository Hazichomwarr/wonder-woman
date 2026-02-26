// _components/Footer.tsx

import Link from "next/link";
import Container from "./ui/Container";
import { ROUTES } from "../_lib/siteRoutes";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-8">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-white">
            <p className="text-sm font-semibold">WONDER WOMAN</p>
            <p className="mt-1 text-xs text-white/70">
              Empowering women through training, resources, and an annual
              festival.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <Link href={ROUTES.mission} className="hover:text-white">
              Mission
            </Link>
            <Link href={ROUTES.festival} className="hover:text-white">
              Festival
            </Link>
            <Link href={ROUTES.contact} className="hover:text-white">
              Contact
            </Link>
          </div>

          <p className="text-xs text-white/60">
            {" "}
            © {new Date().getFullYear()} WONDER WOMAN. Built by{" "}
            <a
              href="https://hamzamare.dev"
              target="_blank"
              title="Web Developer"
              className="underline hover:text-white"
            >
              Hamza Mare
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
