import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getMessages } from "@/content/i18n";

const programImages = [
  "/images/program-primary.svg",
  "/images/program-middle.svg",
  "/images/program-high.svg",
];

export default async function Programs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <main className="bg-slate-50">
      <section className="border-b border-violet-200/60 bg-white">
        <Container>
          <div className="py-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700">
              {t.nav.programs}
            </p>
            <h1 className="mt-3 text-4xl text-slate-900 sm:text-5xl">{t.programs_page.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-700">{t.programs_page.subtitle}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              {t.programs_page.overview}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-gradient-to-b from-white to-violet-50/40">
        <Container>
          <div className="py-12 sm:py-14">
            <div className="grid gap-8 md:grid-cols-3">
              {t.programs_page.tracks.map((track, index) => (
                <article
                  key={track.title}
                  className="overflow-hidden rounded-xl border border-violet-200/70 bg-white shadow-[0_20px_32px_-30px_rgba(109,40,217,0.5)]"
                >
                  <Image
                    src={programImages[index] ?? programImages[0]}
                    alt={track.title}
                    width={900}
                    height={620}
                    className="h-56 w-full border-b border-violet-200/70 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-slate-900">{track.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-700">{track.desc}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {track.focus.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-violet-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="grid gap-8 py-12 sm:py-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl text-slate-900 sm:text-4xl">{t.programs_page.support_title}</h2>
              <ul className="mt-5 space-y-3 text-base text-slate-700">
                {t.programs_page.support_items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-violet-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-violet-200/70 bg-violet-50/60 p-6 shadow-[0_20px_34px_-30px_rgba(109,40,217,0.5)]">
              <h3 className="text-2xl font-semibold text-slate-900">{t.programs_page.cta_title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{t.programs_page.cta_text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`/${locale}/admissions`} variant="solid">
                  {t.nav.admissions}
                </Button>
                <Button href={`/${locale}/contact`} variant="outline">
                  {t.nav.contact}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
