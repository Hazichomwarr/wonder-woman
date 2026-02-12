// app/(site)/event/nyc-2026/page.tsx
import Container from "../../../_components/ui/Container";
import Button from "../../../_components/ui/Button";
import Image from "next/image";

export default function Page() {
  const whatsapp = "https://wa.me/16462861955";

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/event/event01.jpeg"
            alt="Wonder Woman Africa International"
            fill
            priority
            className="object-cover"
          />
        </div>

        <Container>
          <div className="relative py-20">
            <p className="text-sm font-semibold text-orange-300">
              Upcoming Event • New York
            </p>

            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              WONDER WOMAN Africa International
            </h1>

            <p className="mt-4 max-w-2xl text-white/80">
              A night celebrating African culture, talent, music and community.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank">
                <Button variant="primary">Reserve via WhatsApp</Button>
              </a>

              <a href="tel:6462861955">
                <Button
                  variant="secondary"
                  className="border-white/60 text-black hover:bg-white/10"
                >
                  Call Organizer
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* INFO CARDS */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <p className="text-xs font-semibold text-neutral-500">DATE</p>
              <p className="mt-2 text-xl font-semibold">February 27</p>
              <p className="text-sm text-neutral-600">8 PM</p>
            </div>

            <div className="rounded-2xl border p-6">
              <p className="text-xs font-semibold text-neutral-500">LOCATION</p>
              <p className="mt-2 text-xl font-semibold">New York City</p>
              <p className="text-sm text-neutral-600">405 W 125th Street</p>
            </div>

            <div className="rounded-2xl border p-6">
              <p className="text-xs font-semibold text-neutral-500">
                PERFORMER
              </p>
              <p className="mt-2 text-xl font-semibold">Le Magnific</p>
              <p className="text-sm text-neutral-600">
                Live performance & entertainment
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* DETAILS */}
      <section className="bg-neutral-50 py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">
                What to expect
              </h2>

              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Live African music performance</li>
                <li>• Cultural celebration</li>
                <li>• Community gathering</li>
                <li>• Food & experiences</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsapp} target="_blank">
                  <Button variant="primary">Reserve your spot</Button>
                </a>

                <a href="tel:9293584124">
                  <Button variant="secondary">Call second contact</Button>
                </a>
              </div>
            </div>

            {/* Poster */}
            <div className="relative h-105 overflow-scroll rounded-2xl shadow-lg md:h-175">
              <Image
                src="/event/event01.jpeg"
                alt="Event Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-14 text-white">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Don’t miss this special edition.
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Join us in New York for a unique celebration of African culture.
              </p>
            </div>

            <div className="flex gap-3">
              <a href={whatsapp} target="_blank">
                <Button variant="primary">Reserve Now</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
