// app/(site)/contact/page.tsx
import Container from "../../_components/ui/Container";
import Button from "../../_components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../_components/ui/Card";
import { SITE_INFOS } from "../../_lib/siteInfos";

export default function Page() {
  const phone = SITE_INFOS.phones?.[0];
  const whatsappDigits = phone?.href
    ?.replace("tel:", "")
    .replace(/[^\d+]/g, "");
  const whatsappHref = whatsappDigits
    ? `https://wa.me/${whatsappDigits.replace("+", "")}`
    : "#";

  const mailtoHref = `mailto:${SITE_INFOS.email}?subject=${encodeURIComponent(
    "Contact — WONDER WOMAN",
  )}`;

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b bg-neutral-50 py-14">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-orange-700">
              Contact
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Parlons ensemble.
            </h1>
            <p className="mt-4 text-base text-neutral-700">
              Une question, une idée, une proposition de partenariat ou envie de
              participer ? Écrivez-nous — on vous répond rapidement.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Form */}
            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Envoyer un message</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire, ou contactez-nous directement via
                  WhatsApp / Email.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* NOTE: This is a UI-only form (no backend). Hook it later to EmailJS, Formspree, or a Next.js route handler. */}
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-neutral-800">
                      Nom
                    </label>
                    <input
                      name="name"
                      placeholder="Votre nom"
                      className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-neutral-800">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="vous@email.com"
                        className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-neutral-800">
                        Téléphone (optionnel)
                      </label>
                      <input
                        name="phone"
                        placeholder="+226 ..."
                        className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-neutral-800">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Dites-nous comment on peut vous aider…"
                      rows={6}
                      className="mt-2 w-full resize-none rounded-lg border border-neutral-200 bg-white text-black px-3 py-2 text-sm outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button type="submit" variant="primary">
                      Envoyer
                    </Button>

                    <a
                      href={mailtoHref}
                      className="inline-flex items-center justify-center rounded px-4 py-2 text-sm text-black border bg-white hover:bg-neutral-100 active:scale-95 transition"
                    >
                      Envoyer par Email
                    </a>
                  </div>

                  <p className="text-xs text-neutral-500">
                    *Le formulaire est prêt côté UI. On connectera l’envoi au
                    backend / service email ensuite.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Direct contact */}
            <div className="space-y-6">
              <Card className="border-neutral-200">
                <CardHeader>
                  <CardTitle>Contact direct</CardTitle>
                  <CardDescription>
                    Choisissez le canal le plus simple pour vous.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <p className="text-xs font-semibold text-neutral-600">
                      WHATSAPP
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-900">
                      Message rapide
                    </p>
                    <div className="mt-3">
                      <a href={whatsappHref} target="_blank" rel="noreferrer">
                        <Button variant="primary">Écrire sur WhatsApp</Button>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <p className="text-xs font-semibold text-neutral-600">
                      EMAIL
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-900">
                      {SITE_INFOS.email}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Pour partenariats, médias, demandes générales.
                    </p>
                    <div className="mt-3">
                      <a href={mailtoHref}>
                        <Button variant="secondary">Envoyer un email</Button>
                      </a>
                    </div>
                  </div>

                  {phone?.href && (
                    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                      <p className="text-xs font-semibold text-neutral-600">
                        TÉLÉPHONE
                      </p>
                      <p className="mt-1 text-sm font-medium text-neutral-900">
                        {phone.label}
                      </p>
                      <div className="mt-3">
                        <a href={phone.href}>
                          <Button variant="secondary">Appeler</Button>
                        </a>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-neutral-200">
                <CardHeader>
                  <CardTitle>Informations</CardTitle>
                  <CardDescription>
                    Adresse et infos publiques de l’organisation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-neutral-700">
                  <p>
                    <span className="font-medium">Organisation:</span>{" "}
                    {SITE_INFOS.name}
                  </p>
                  <p>
                    <span className="font-medium">Adresse:</span>{" "}
                    {SITE_INFOS.address}
                  </p>
                  <p>
                    <span className="font-medium">Site:</span>{" "}
                    {SITE_INFOS.website}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* PARTICIPATE SECTION (anchor) */}
      <section id="participer" className="bg-neutral-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-wide text-orange-700">
              Participer
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Rejoignez le mouvement.
            </h2>
            <p className="mt-4 text-base text-neutral-700">
              Vous pouvez contribuer en tant que bénévole, partenaire ou
              artiste. Choisissez l’option qui vous correspond.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Bénévole</CardTitle>
                <CardDescription>
                  Aidez pendant les activités, le festival, ou l’organisation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${SITE_INFOS.email}?subject=${encodeURIComponent(
                    "Participer — Bénévole",
                  )}`}
                >
                  <Button variant="primary">Je veux aider</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Partenaire</CardTitle>
                <CardDescription>
                  Sponsors, ONG, institutions — construisons ensemble.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={`mailto:${SITE_INFOS.email}?subject=${encodeURIComponent(
                    "Partenariat — WONDER WOMAN",
                  )}`}
                >
                  <Button variant="primary">Devenir partenaire</Button>
                </a>
                <p className="text-xs text-neutral-500">
                  *Nous pouvons partager un dossier de partenariat sur demande.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-200">
              <CardHeader>
                <CardTitle>Artiste</CardTitle>
                <CardDescription>
                  Musique, danse, exposition, gastronomie — candidatez.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${SITE_INFOS.email}?subject=${encodeURIComponent(
                    "Candidature — Artiste",
                  )}`}
                >
                  <Button variant="primary">Candidater</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center text-sm text-neutral-600">
            Ou écrivez-nous directement :{" "}
            <a className="text-orange-700 underline" href={mailtoHref}>
              {SITE_INFOS.email}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
