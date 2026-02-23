import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getMessages } from "@/content/i18n";

export default async function Admissions({
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
              {t.nav.admissions}
            </p>
            <h1 className="mt-3 text-4xl text-slate-900 sm:text-5xl">{t.admissions_page.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-700">{t.admissions_page.subtitle}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-gradient-to-b from-white to-violet-50/40">
        <Container>
          <div className="py-12 sm:py-14">
            <h2 className="text-3xl text-slate-900 sm:text-4xl">{t.admissions_page.process_title}</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {t.admissions_page.process.map((step) => (
                <article
                  key={step.title}
                  className="rounded-xl border border-violet-200/70 bg-white p-6 shadow-[0_20px_32px_-30px_rgba(109,40,217,0.5)]"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-white">
        <Container>
          <div className="grid gap-8 py-12 sm:py-14 lg:grid-cols-2">
            <article className="rounded-xl border border-violet-200/70 bg-violet-50/50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                {t.admissions_page.requirements_title}
              </h2>
              <ul className="mt-5 space-y-3 text-base text-slate-700">
                {t.admissions_page.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-violet-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-violet-200/70 bg-white p-6 shadow-[0_20px_32px_-30px_rgba(109,40,217,0.5)]">
              <h2 className="text-2xl font-semibold text-slate-900">{t.admissions_page.timeline_title}</h2>
              <div className="mt-5 space-y-4">
                {t.admissions_page.timeline.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-violet-200/60 bg-violet-50/40 px-4 py-3"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-violet-700">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base text-slate-800">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 py-10">
            <p className="text-base text-slate-700">{t.cta.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={`/${locale}/contact`} variant="outline">
                {t.nav.contact}
              </Button>
              <Button href={`/${locale}/programs`} variant="solid">
                {t.nav.programs}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
