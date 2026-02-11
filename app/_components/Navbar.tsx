// _components/Navbar.tsx

"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { NAV_LINKS } from "../_lib/nav";
import { ROUTES } from "../_lib/siteRoutes";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 from-black/40 to-transparent">
      <Container>
        {/* LOGO */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/wwlogo.png"
              alt="Association Wonder Woman"
              width={74}
              height={74}
              priority
              className="rounded-lg bg-gray-100 shadow-lg p-1 object-contain"
            />
            <span className="sr-only">Wonder Woman</span>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((item) => {
              const isHome = pathname === "/";
              const href = isHome && item.hash ? item.hash : item.href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-bold text-white/90 hover:scale-125 hover:underline"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            {/* <Link
              href={ROUTES.participate}
              className="rounded-md border border-white/60 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Participer
            </Link> */}
            <Link
              href={ROUTES.contact}
              className="rounded-full px-4 py-2 text-sm text-white bg-orange-600 font-medium hover:bg-orange-700"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
