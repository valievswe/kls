import Image from "next/image";
import { getMessages } from "@/content/i18n";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const programImages = [
  "/images/program-primary.svg",
  "/images/program-middle.svg",
  "/images/program-high.svg",
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-violet-200/60">
        <Image
          src="/images/hero-campus.jpg"
          alt="Main campus exterior of Kokand Leader School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-900/35 to-transparent" />
        <Container>
          <div className="relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl rounded-xl bg-slate-900/35 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]">
                KLS International School
              </p>
              <h1 className="mt-4 text-4xl leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.75)] sm:text-5xl lg:text-6xl">
                {t.home.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                {t.home.subtitle}. We provide a structured private-school environment for
                high-quality academic outcomes and international collaboration.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`/${locale}/admissions`} variant="solid">
                  {t.home.apply}
                </Button>
                <Button href={`/${locale}/contact`} variant="outline">
                  {t.home.visit}
                </Button>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-white/95 p-4">
                  <p className="text-2xl font-semibold text-slate-900">K-12</p>
                  <p className="text-xs text-slate-600">Full School Pathway</p>
                </div>
                <div className="rounded-lg bg-white/95 p-4">
                  <p className="text-2xl font-semibold text-slate-900">3</p>
                  <p className="text-xs text-slate-600">Teaching Languages</p>
                </div>
                <div className="rounded-lg bg-white/95 p-4">
                  <p className="text-2xl font-semibold text-slate-900">4+</p>
                  <p className="text-xs text-slate-600">Partner Formats</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-white">
        <Container>
          <div className="py-14 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-700">
                About School
              </p>
              <h2 className="mt-3 text-3xl text-slate-900 sm:text-4xl">Campus Life at KLS</h2>
              <p className="mt-4 text-[1.05rem] text-slate-700">
                Learning, mentoring, and collaboration spaces designed for both academic focus and
                student wellbeing.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-8 lg:auto-rows-[42px]">
              <figure className="relative h-64 overflow-hidden rounded-xl sm:h-72 lg:col-span-4 lg:row-span-8 lg:h-auto">
                <Image
                  src="/images/hero-campus.jpg"
                  alt="Main KLS campus building"
                  fill
                  className="object-cover"
                />
              </figure>

              <figure className="relative h-56 overflow-hidden rounded-xl sm:h-64 lg:col-span-4 lg:row-span-4 lg:h-auto">
                <Image
                  src="/images/campus-learning.svg"
                  alt="KLS learning spaces"
                  fill
                  className="object-cover"
                />
              </figure>

              <figure className="relative h-56 overflow-hidden rounded-xl sm:h-64 lg:col-span-2 lg:row-span-4 lg:h-auto">
                <Image
                  src="/images/program-primary.svg"
                  alt="Primary stage activities at KLS"
                  fill
                  className="object-cover"
                />
              </figure>

              <figure className="relative h-56 overflow-hidden rounded-xl sm:h-64 lg:col-span-2 lg:row-span-4 lg:h-auto">
                <Image
                  src="/images/program-middle.svg"
                  alt="Middle school stage at KLS"
                  fill
                  className="object-cover"
                />
              </figure>

              <figure className="relative h-56 overflow-hidden rounded-xl sm:h-64 lg:col-span-4 lg:row-span-4 lg:h-auto">
                <Image
                  src="/images/program-high.svg"
                  alt="High school stage at KLS"
                  fill
                  className="object-cover"
                />
              </figure>

              <figure className="relative h-64 overflow-hidden rounded-xl sm:h-72 lg:col-span-4 lg:row-span-8 lg:h-auto">
                <Image
                  src="/images/partner-network.svg"
                  alt="Partnership and international collaboration at KLS"
                  fill
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-white">
        <Container>
          <div className="py-14 sm:py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl text-slate-900 sm:text-4xl">{t.academic_overview.title}</h2>
              <p className="mt-4 text-[1.05rem] text-slate-700">
                Our academic model combines a strong curriculum, multilingual learning, and close
                student support.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {t.academic_overview.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-violet-200/70 bg-gradient-to-b from-white to-violet-50/40 p-6 shadow-[0_20px_34px_-30px_rgba(109,40,217,0.55)]"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-gradient-to-b from-white to-violet-50/50">
        <Container>
          <div className="py-14 sm:py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl text-slate-900 sm:text-4xl">{t.programs.title}</h2>
              <p className="mt-4 text-[1.05rem] text-slate-700">
                A coherent learning pathway from primary to high school, designed for long-term
                growth and readiness for international exams.
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {t.programs.items.map((program, index) => (
                <article
                  key={program.title}
                  className="overflow-hidden rounded-xl border border-violet-200/70 bg-white shadow-[0_20px_34px_-30px_rgba(109,40,217,0.55)]"
                >
                  <figure className="overflow-hidden border-b border-violet-200/70 bg-white">
                    <Image
                      src={programImages[index] ?? programImages[0]}
                      alt={`${program.title} at Kokand Leader School`}
                      width={900}
                      height={620}
                      className="h-60 w-full object-cover"
                    />
                  </figure>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-700">{program.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-white">
        <Container>
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-start">
            <figure className="overflow-hidden rounded-xl border border-violet-200/70 bg-slate-100 shadow-[0_24px_44px_-34px_rgba(88,28,135,0.45)]">
              <Image
                src="/images/partner-network.svg"
                alt="International partnership network illustration"
                width={1200}
                height={800}
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
            </figure>

            <div>
              <h2 className="text-3xl text-slate-900 sm:text-4xl">{t.partnerships.title}</h2>
              <p className="mt-4 text-[1.05rem] text-slate-700">{t.partnerships.subtitle}</p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {t.partnerships.items.map((item) => (
                  <article key={item.title}>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-700">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-violet-950 via-violet-900 to-fuchsia-800">
        <Container>
          <div className="grid gap-6 py-12 text-white md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl">Collaborate with Kokand Leader School</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-violet-100">
                Our partnership office is available to discuss student exchange, teacher
                development, and institutional projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-violet-800 transition-colors duration-150 hover:bg-violet-100"
              >
                Contact Team
              </a>
              <a
                href={`/${locale}/admissions`}
                className="inline-flex items-center justify-center rounded-md border border-violet-200/60 bg-violet-700/40 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-violet-700/60"
              >
                Admissions Details
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
