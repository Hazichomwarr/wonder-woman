// _components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { NAV_LINKS } from "../_lib/nav";
import { ROUTES } from "../_lib/siteRoutes";

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        {/* LOGO */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/image/wwlogo.png"
              alt="Association Wonder Woman"
              width={84}
              height={84}
              priority
              className="rounded-lg bg-gray-100 shadow-lg p-1 object-contain"
            />
            <span className="sr-only">Wonder Woman</span>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm  hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Link
              href={ROUTES.participate}
              className="rounded-md border px-3 py-2 text-sm"
            >
              Participer
            </Link>
            <Link
              href={ROUTES.contact}
              className="rounded-md px-3 py-2 text-sm text-white bg-neutral-900 hover:bg-neutral-800"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
